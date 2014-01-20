// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__24846__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__24845 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24845,0,null);var body = cljs.core.nthnext(vec__24845,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24846 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24846__delegate.call(this,args);};
G__24846.cljs$lang$maxFixedArity = 0;
G__24846.cljs$lang$applyTo = (function (arglist__24847){
var args = cljs.core.seq(arglist__24847);
return G__24846__delegate(args);
});
G__24846.cljs$core$IFn$_invoke$arity$variadic = G__24846__delegate;
return G__24846;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__24852(s__24853){return (new cljs.core.LazySeq(null,(function (){var s__24853__$1 = s__24853;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24853__$1);if(temp__4092__auto__)
{var s__24853__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24853__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24853__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24855 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24854 = 0;while(true){
if((i__24854 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24854);cljs.core.chunk_append(b__24855,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__24856 = (i__24854 + 1);
i__24854 = G__24856;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24855),iter__24852(cljs.core.chunk_rest(s__24853__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24855),null);
}
} else
{var args = cljs.core.first(s__24853__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__24852(cljs.core.rest(s__24853__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(arglists);
});
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__24861(s__24862){return (new cljs.core.LazySeq(null,(function (){var s__24862__$1 = s__24862;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24862__$1);if(temp__4092__auto__)
{var s__24862__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24862__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24862__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24864 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24863 = 0;while(true){
if((i__24863 < size__4116__auto__))
{var script = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24863);cljs.core.chunk_append(b__24864,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$148,"text/javascript",cljs.core.constant$keyword$149,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null));
{
var G__24865 = (i__24863 + 1);
i__24863 = G__24865;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24864),iter__24861(cljs.core.chunk_rest(s__24862__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24864),null);
}
} else
{var script = cljs.core.first(s__24862__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$148,"text/javascript",cljs.core.constant$keyword$149,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null),iter__24861(cljs.core.rest(s__24862__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__24866){
var scripts = cljs.core.seq(arglist__24866);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__24871(s__24872){return (new cljs.core.LazySeq(null,(function (){var s__24872__$1 = s__24872;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24872__$1);if(temp__4092__auto__)
{var s__24872__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24872__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24872__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24874 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24873 = 0;while(true){
if((i__24873 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24873);cljs.core.chunk_append(b__24874,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$148,"text/css",cljs.core.constant$keyword$151,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$152,"stylesheet"], null)], null));
{
var G__24875 = (i__24873 + 1);
i__24873 = G__24875;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24874),iter__24871(cljs.core.chunk_rest(s__24872__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24874),null);
}
} else
{var style = cljs.core.first(s__24872__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$148,"text/css",cljs.core.constant$keyword$151,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$152,"stylesheet"], null)], null),iter__24871(cljs.core.rest(s__24872__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__24876){
var styles = cljs.core.seq(arglist__24876);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$148,"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to24877 = (function() { 
var link_to24877__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$151,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24877 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to24877__delegate.call(this,url,content);};
link_to24877.cljs$lang$maxFixedArity = 1;
link_to24877.cljs$lang$applyTo = (function (arglist__24878){
var url = cljs.core.first(arglist__24878);
var content = cljs.core.rest(arglist__24878);
return link_to24877__delegate(url,content);
});
link_to24877.cljs$core$IFn$_invoke$arity$variadic = link_to24877__delegate;
return link_to24877;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24877);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24879 = (function() { 
var mail_to24879__delegate = function (e_mail,p__24880){var vec__24882 = p__24880;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24882,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$151,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to24879 = function (e_mail,var_args){
var p__24880 = null;if (arguments.length > 1) {
  p__24880 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to24879__delegate.call(this,e_mail,p__24880);};
mail_to24879.cljs$lang$maxFixedArity = 1;
mail_to24879.cljs$lang$applyTo = (function (arglist__24883){
var e_mail = cljs.core.first(arglist__24883);
var p__24880 = cljs.core.rest(arglist__24883);
return mail_to24879__delegate(e_mail,p__24880);
});
mail_to24879.cljs$core$IFn$_invoke$arity$variadic = mail_to24879__delegate;
return mail_to24879;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24879);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24884 = (function unordered_list24884(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$154,(function (){var iter__4117__auto__ = (function iter__24889(s__24890){return (new cljs.core.LazySeq(null,(function (){var s__24890__$1 = s__24890;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24890__$1);if(temp__4092__auto__)
{var s__24890__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24890__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24890__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24892 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24891 = 0;while(true){
if((i__24891 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24891);cljs.core.chunk_append(b__24892,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,x], null));
{
var G__24893 = (i__24891 + 1);
i__24891 = G__24893;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24892),iter__24889(cljs.core.chunk_rest(s__24890__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24892),null);
}
} else
{var x = cljs.core.first(s__24890__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,x], null),iter__24889(cljs.core.rest(s__24890__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24884);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24894 = (function ordered_list24894(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,(function (){var iter__4117__auto__ = (function iter__24899(s__24900){return (new cljs.core.LazySeq(null,(function (){var s__24900__$1 = s__24900;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24900__$1);if(temp__4092__auto__)
{var s__24900__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24900__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24900__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24902 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24901 = 0;while(true){
if((i__24901 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24901);cljs.core.chunk_append(b__24902,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,x], null));
{
var G__24903 = (i__24901 + 1);
i__24901 = G__24903;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24902),iter__24899(cljs.core.chunk_rest(s__24900__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24902),null);
}
} else
{var x = cljs.core.first(s__24900__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,x], null),iter__24899(cljs.core.rest(s__24900__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24894);
/**
* Create an image element.
*/
sablono.core.image24904 = (function() {
var image24904 = null;
var image24904__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image24904__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$149,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$158,alt], null)], null);
});
image24904 = function(src,alt){
switch(arguments.length){
case 1:
return image24904__1.call(this,src);
case 2:
return image24904__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24904.cljs$core$IFn$_invoke$arity$1 = image24904__1;
image24904.cljs$core$IFn$_invoke$arity$2 = image24904__2;
return image24904;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image24904);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24905_SHARP_,p2__24906_SHARP_){return [cljs.core.str(p1__24905_SHARP_),cljs.core.str("["),cljs.core.str(p2__24906_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24907_SHARP_,p2__24908_SHARP_){return [cljs.core.str(p1__24907_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24908_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$148,type,cljs.core.constant$keyword$160,sablono.core.make_name(name),cljs.core.constant$keyword$146,sablono.core.make_id(name),cljs.core.constant$keyword$120,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24909 = (function() {
var hidden_field24909 = null;
var hidden_field24909__1 = (function (name){return hidden_field24909.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field24909__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field24909 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field24909__1.call(this,name);
case 2:
return hidden_field24909__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24909.cljs$core$IFn$_invoke$arity$1 = hidden_field24909__1;
hidden_field24909.cljs$core$IFn$_invoke$arity$2 = hidden_field24909__2;
return hidden_field24909;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field24909);
/**
* Creates a new text input field.
*/
sablono.core.text_field24910 = (function() {
var text_field24910 = null;
var text_field24910__1 = (function (name){return text_field24910.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field24910__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field24910 = function(name,value){
switch(arguments.length){
case 1:
return text_field24910__1.call(this,name);
case 2:
return text_field24910__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24910.cljs$core$IFn$_invoke$arity$1 = text_field24910__1;
text_field24910.cljs$core$IFn$_invoke$arity$2 = text_field24910__2;
return text_field24910;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field24910);
/**
* Creates a new password field.
*/
sablono.core.password_field24911 = (function() {
var password_field24911 = null;
var password_field24911__1 = (function (name){return password_field24911.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field24911__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field24911 = function(name,value){
switch(arguments.length){
case 1:
return password_field24911__1.call(this,name);
case 2:
return password_field24911__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24911.cljs$core$IFn$_invoke$arity$1 = password_field24911__1;
password_field24911.cljs$core$IFn$_invoke$arity$2 = password_field24911__2;
return password_field24911;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field24911);
/**
* Creates a new email input field.
*/
sablono.core.email_field24912 = (function() {
var email_field24912 = null;
var email_field24912__1 = (function (name){return email_field24912.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field24912__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field24912 = function(name,value){
switch(arguments.length){
case 1:
return email_field24912__1.call(this,name);
case 2:
return email_field24912__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24912.cljs$core$IFn$_invoke$arity$1 = email_field24912__1;
email_field24912.cljs$core$IFn$_invoke$arity$2 = email_field24912__2;
return email_field24912;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field24912);
/**
* Creates a check box.
*/
sablono.core.check_box24913 = (function() {
var check_box24913 = null;
var check_box24913__1 = (function (name){return check_box24913.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box24913__2 = (function (name,checked_QMARK_){return check_box24913.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box24913__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$148,"checkbox",cljs.core.constant$keyword$160,sablono.core.make_name(name),cljs.core.constant$keyword$146,sablono.core.make_id(name),cljs.core.constant$keyword$120,value,cljs.core.constant$keyword$161,checked_QMARK_], null)], null);
});
check_box24913 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24913__1.call(this,name);
case 2:
return check_box24913__2.call(this,name,checked_QMARK_);
case 3:
return check_box24913__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24913.cljs$core$IFn$_invoke$arity$1 = check_box24913__1;
check_box24913.cljs$core$IFn$_invoke$arity$2 = check_box24913__2;
check_box24913.cljs$core$IFn$_invoke$arity$3 = check_box24913__3;
return check_box24913;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box24913);
/**
* Creates a radio button.
*/
sablono.core.radio_button24914 = (function() {
var radio_button24914 = null;
var radio_button24914__1 = (function (group){return radio_button24914.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button24914__2 = (function (group,checked_QMARK_){return radio_button24914.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button24914__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$148,"radio",cljs.core.constant$keyword$160,sablono.core.make_name(group),cljs.core.constant$keyword$146,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$120,value,cljs.core.constant$keyword$161,checked_QMARK_], null)], null);
});
radio_button24914 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24914__1.call(this,group);
case 2:
return radio_button24914__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24914__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24914.cljs$core$IFn$_invoke$arity$1 = radio_button24914__1;
radio_button24914.cljs$core$IFn$_invoke$arity$2 = radio_button24914__2;
radio_button24914.cljs$core$IFn$_invoke$arity$3 = radio_button24914__3;
return radio_button24914;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button24914);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24915 = (function() {
var select_options24915 = null;
var select_options24915__1 = (function (coll){return select_options24915.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options24915__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__24924(s__24925){return (new cljs.core.LazySeq(null,(function (){var s__24925__$1 = s__24925;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24925__$1);if(temp__4092__auto__)
{var s__24925__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24925__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24925__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24927 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24926 = 0;while(true){
if((i__24926 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24926);cljs.core.chunk_append(b__24927,((cljs.core.sequential_QMARK_(x))?(function (){var vec__24930 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24930,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24930,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$162,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$163,text], null),select_options24915.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$164,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$120,val,cljs.core.constant$keyword$165,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$164,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$165,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__24932 = (i__24926 + 1);
i__24926 = G__24932;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24927),iter__24924(cljs.core.chunk_rest(s__24925__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24927),null);
}
} else
{var x = cljs.core.first(s__24925__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__24931 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24931,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24931,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$162,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$163,text], null),select_options24915.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$164,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$120,val,cljs.core.constant$keyword$165,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$164,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$165,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__24924(cljs.core.rest(s__24925__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options24915 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24915__1.call(this,coll);
case 2:
return select_options24915__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24915.cljs$core$IFn$_invoke$arity$1 = select_options24915__1;
select_options24915.cljs$core$IFn$_invoke$arity$2 = select_options24915__2;
return select_options24915;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options24915);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24933 = (function() {
var drop_down24933 = null;
var drop_down24933__2 = (function (name,options){return drop_down24933.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down24933__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$160,sablono.core.make_name(name),cljs.core.constant$keyword$146,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down24933 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24933__2.call(this,name,options);
case 3:
return drop_down24933__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24933.cljs$core$IFn$_invoke$arity$2 = drop_down24933__2;
drop_down24933.cljs$core$IFn$_invoke$arity$3 = drop_down24933__3;
return drop_down24933;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down24933);
/**
* Creates a text area element.
*/
sablono.core.text_area24934 = (function() {
var text_area24934 = null;
var text_area24934__1 = (function (name){return text_area24934.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area24934__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$160,sablono.core.make_name(name),cljs.core.constant$keyword$146,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area24934 = function(name,value){
switch(arguments.length){
case 1:
return text_area24934__1.call(this,name);
case 2:
return text_area24934__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24934.cljs$core$IFn$_invoke$arity$1 = text_area24934__1;
text_area24934.cljs$core$IFn$_invoke$arity$2 = text_area24934__2;
return text_area24934;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area24934);
/**
* Creates a file upload input.
*/
sablono.core.file_upload24935 = (function file_upload24935(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload24935);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24936 = (function label24936(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$163,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label24936);
/**
* Creates a submit button.
*/
sablono.core.submit_button24937 = (function submit_button24937(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$148,"submit",cljs.core.constant$keyword$120,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24937);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24938 = (function reset_button24938(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$148,"reset",cljs.core.constant$keyword$120,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24938);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24939 = (function() { 
var form_to24939__delegate = function (p__24940,body){var vec__24942 = p__24940;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24942,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24942,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$168,null,cljs.core.constant$keyword$169,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$171,method_str,cljs.core.constant$keyword$172,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$171,"POST",cljs.core.constant$keyword$172,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to24939 = function (p__24940,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to24939__delegate.call(this,p__24940,body);};
form_to24939.cljs$lang$maxFixedArity = 1;
form_to24939.cljs$lang$applyTo = (function (arglist__24943){
var p__24940 = cljs.core.first(arglist__24943);
var body = cljs.core.rest(arglist__24943);
return form_to24939__delegate(p__24940,body);
});
form_to24939.cljs$core$IFn$_invoke$arity$variadic = form_to24939__delegate;
return form_to24939;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24939);
