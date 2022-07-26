/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let s_array =s.split('');
  let t_array =t.split('');
  let result = true;
  let obj_s = {};
  let obj_t = {};
  //let array_s = []; // key:value pairs - letter: number
  //let array_t = []; // key:value pairs - letter: number
    if (s.length === t.length) {
          s_array.forEach( (x) => { obj_s[x] = (obj_s[x] || 0) + 1 });
          t_array.forEach( (x) => { obj_t[x] = (obj_t[x] || 0) + 1 });

      for (const element in obj_s) {
        if (obj_t[element] !== obj_s[element]) {
            return false;
        }
      }
                return true;

    }
      else {
    return false;
  }
  
};