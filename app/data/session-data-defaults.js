/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  grants: {
    A375895: ['Olga Dreher', 'Approved', 'green', '29 Jun 2020'],
    A375896: ['Thando De Laurentis', 'In review', 'purple', '29 Jun 2020'],
    A375897: ['Leeba Kendall', 'In peer review', 'bright-purple', '29 Jun 2020'],
    A375899: ['Lacy Spyros', 'Rejected', 'red', '29 Jun 2020'],
    A375902: ['Clementine Henriksen', 'Overdue', 'black', '12 Feb 2020'],
    A375903: ['Calfuray Chmiel', 'Withdrawn', 'grey', '29 Jun 2020'],
    A375911: ['Gofraidh Salzwedel', 'Approved', 'green', '29 Jun 2020'],
    A375912: ['Hèctor Mateev', 'Approved', 'green', '29 Jun 2020'],
    A375913: ['Roland Mac Alastair', 'Overdue', 'black', '16 Feb 2020'],
    A375914: ['Brunihild Van Rompuy', 'Approved', 'green', '29 Jun 2020']
  }
}
