"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var jantari = {
  // Date function
  date: function date() {
    // Instance of new date/time
    var GREGORIAN_DATE = new Date(); // Date/Time locale string

    var LOCALE_STRING = "fa-AF"; // Check if both arguments are passed and are valid

    if (arguments.length === 0 || arguments.length === 2) {
      var l = arguments.length <= 0 ? undefined : arguments[0];
      var f = arguments.length <= 1 ? undefined : arguments[1];
      var toDate = new Date(GREGORIAN_DATE);
      var SHAMSI_DATE = toDate.toLocaleDateString(LOCALE_STRING);

      if (l === "fa" || l === "pa" || l === "en") {
        var gD = toDate.getDay();
        var shamsi_date_arr = SHAMSI_DATE.split('/');

        var _shamsi_date_arr = _slicedToArray(shamsi_date_arr, 3),
            d = _shamsi_date_arr[0],
            m = _shamsi_date_arr[1],
            y = _shamsi_date_arr[2];

        var d_name = afghan_days[l][gD];
        var m_name = afghan_months[l][afghan_numbers.indexOf(m)];
        var today;
        if (f === "full") today = "".concat(d_name, " ").concat(y, " ").concat(m_name, " ").concat(d);
        if (f === "long") today = "".concat(y, " ").concat(m_name, " ").concat(d);
        if (f === "short") today = "".concat(d, "/").concat(m, "/").concat(y);
        return l === "en" ? jantari.p2e(today) : today;
      } else {
        console.error('Invalid input');
        return 'error';
      }
    } else {
      console.error('jantari.js: [ERROR] Please pass both arguments valid or leave empty.');
    }
  },
  // Time function
  time: function time() {},
  // Dari/Pashto numbers to English
  p2e: function p2e(num) {
    num.replace(/[۰-۹]/g, function (d) {
      return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d);
    });
  },
  // English numbers to Dari/Pashto
  e2p: function e2p(num) {
    num.replace(/\d/g, function (d) {
      return '۰۱۲۳۴۵۶۷۸۹'[d];
    });
  }
}; // Afghan months name in Dari, Pashto & Dari(English alphabets)

var afghan_months = {
  fa: ["حمل", "ثور", "جوزا", "سرطان", "اسد", "سنبله", "میزان", "عقرب", "قوس", "جدی", "دلو", "حوت"],
  pa: ["وری", "غویی", "غبرګلی", "چنګاښ", "زمری", "وږی", "تله", "لړم", "لیند", "مرغومی", "سلواغه", "کب"],
  en: ["Hamal", "Sawr", "Jawza", "Sarataan", "Asad", "Sunbola", "Meezan", "Aqrab", "Qaws", "Jadi", "Dalwa", "Hoot"]
}; // Afghan days name in Dari, Pashto & Dari(English alphabets)

var afghan_days = {
  fa: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنچشنبه", "جمعه", "شنبه"],
  pa: ["اتوار", "ګل", "نهي", "شورو", "زيارت", "جمعه", "خالي"],
  en: ["Yakshanba", "Doshanba", "Seshanba", "Charshanba", "Panjshanba", "Jumah", "Shanba"]
}; // Afghan numbers

var afghan_numbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۱۰", "۱۲", "۱۱"];