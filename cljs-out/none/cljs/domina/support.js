// Compiled by ClojureScript 0.0-2268
goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
var div_56520 = document.createElement("div");var test_html_56521 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";div_56520.innerHTML = test_html_56521;
domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div_56520.firstChild.nodeType,(3));
domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div_56520.getElementsByTagName("tbody").length,(0));
domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div_56520.getElementsByTagName("link").length,(0));

//# sourceMappingURL=support.js.map