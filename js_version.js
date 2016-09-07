var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var number = "0123456789".split('');

function generate_zip_code(arr, range_start, range_end) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1){
    return arr[0];
  } else {
    var zip_code_array = [];
    var alphanumeric_arr = generate_zip_code(arr.slice(1));

    for (var c in alphanumeric_arr) {
      for (var i = 0; i < arr[0].length; i++) {
        zip_code_array.push(arr[0][i] + alphanumeric_arr[c]);
      }
    }

    zip_code_array.sort();

    var start_index = zip_code_array.indexOf(range_start);
    var end_index = zip_code_array.indexOf(range_end);

    zip_code_array.splice(0, start_index);
    zip_code_array.splice(end_index);

    return zip_code_array;

  }

}

var combinations = [alphabet, number, alphabet, number, alphabet, number];
generate_zip_code(combinations, 'A0A1A0', 'B3P1D4');