import 'dart:io';

void main() async {
  var input = await File("text.md").readAsString();

  final trimmed = input
      .replaceAll('Â ', ' ')
      .multiSplit(['## ', '### ', '#### '])
      .map((uncut) => uncut.trim())
      .toList();

  final resultLines = trimmed
      .map((part) {
        var name = '';
        var art = '';
        var speed = '';
        var prerequisite = '';
        var range = '';
        var target = '';
        var area = '';
        var cost = '';
        var concentration = 'FALSE';
        var description = '';

        // description
        final descriptionParts = part.split('>');
        if (descriptionParts.length < 2) {
          return null;
        }
        description = '"' +
            descriptionParts[1]
                .replaceAll('</AbilityCard', '')
                .split('\n')
                .map((e) => e.trim())
                .where((e) => e.isNotEmpty)
                .join('\n') +
            '"';

        final lines = part.split('\n');
        name = lines.first;
        for (final line in lines) {
          if (line.startsWith('_Prerequisite')) {
            prerequisite =
                '"' + line.split(': ').last.replaceAll('_', '') + '"';
          }
          if (line.startsWith('speed=')) {
            speed = line.split('"').last.toTitleCase();
          }
          if (line.startsWith('parameters=')) {
            final parameters = line
                .multiSplit(["[", "]"])[1]
                .split(',')
                .map((e) => e.trim().replaceAll('"', '').replaceAll('.', ''));
            for (final parameter in parameters) {
              if (parameter.startsWith('Range: ')) {
                range = parameter.replaceAll('Range: ', '');
              }
              if (parameter.startsWith('Target: ')) {
                target = parameter.replaceAll('Target: ', '');
              }
              if (parameter.startsWith('Area: ')) {
                area = parameter.replaceAll('Area: ', '');
              }
              if (parameter.startsWith('Cost: ')) {
                cost = parameter.replaceAll('Cost: ', '');
              }
              if (parameter.startsWith('Concentration')) {
                concentration = 'TRUE';
              }
            }
          }
        }

        name = name.trim();
        art = art.trim();
        speed = speed.trim();
        prerequisite = prerequisite.trim();
        range = range.trim();
        target = target.trim();
        area = area.trim();
        cost = cost.trim();
        concentration = concentration.trim();
        description = description.trim();

        final result = [
          name,
          art,
          speed,
          prerequisite,
          range,
          target,
          area,
          cost,
          concentration,
          description
        ].join(',');
        return result;
      })
      .whereType<String>()
      .toList();

  final file = File('output.csv');
  file.createSync();
  file.writeAsStringSync(resultLines.join('\n'));
  //print(input.multiSplit(['## ', '### ', '#### ']));
}

extension UtilExtensions on String {
  List<String> multiSplit(Iterable<String> delimeters) => delimeters.isEmpty
      ? [this]
      : this.split(RegExp(delimeters.map(RegExp.escape).join('|')));
  String toCapitalised() =>
      length > 0 ? '${this[0].toUpperCase()}${substring(1).toLowerCase()}' : '';
  String toTitleCase() => replaceAll(RegExp(' +'), ' ')
      .split(' ')
      .map((str) => str.toCapitalised())
      .join(' ');
}
