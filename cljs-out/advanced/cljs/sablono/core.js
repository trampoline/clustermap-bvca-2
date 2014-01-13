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
var G__24905__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__24904 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24904,0,null);var body = cljs.core.nthnext(vec__24904,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24905 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24905__delegate.call(this,args);};
G__24905.cljs$lang$maxFixedArity = 0;
G__24905.cljs$lang$applyTo = (function (arglist__24906){
var args = cljs.core.seq(arglist__24906);
return G__24905__delegate(args);
});
G__24905.cljs$core$IFn$_invoke$arity$variadic = G__24905__delegate;
return G__24905;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__24911(s__24912){return (new cljs.core.LazySeq(null,(function (){var s__24912__$1 = s__24912;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24912__$1);if(temp__4092__auto__)
{var s__24912__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24912__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24912__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24914 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24913 = 0;while(true){
if((i__24913 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24913);cljs.core.chunk_append(b__24914,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__24915 = (i__24913 + 1);
i__24913 = G__24915;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24914),iter__24911(cljs.core.chunk_rest(s__24912__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24914),null);
}
} else
{var args = cljs.core.first(s__24912__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__24911(cljs.core.rest(s__24912__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__24920(s__24921){return (new cljs.core.LazySeq(null,(function (){var s__24921__$1 = s__24921;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24921__$1);if(temp__4092__auto__)
{var s__24921__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24921__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24921__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24923 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24922 = 0;while(true){
if((i__24922 < size__4116__auto__))
{var script = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24922);cljs.core.chunk_append(b__24923,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,"text/javascript",cljs.core.constant$keyword$172,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null));
{
var G__24924 = (i__24922 + 1);
i__24922 = G__24924;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24923),iter__24920(cljs.core.chunk_rest(s__24921__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24923),null);
}
} else
{var script = cljs.core.first(s__24921__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,"text/javascript",cljs.core.constant$keyword$172,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null),iter__24920(cljs.core.rest(s__24921__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__24925){
var scripts = cljs.core.seq(arglist__24925);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__24930(s__24931){return (new cljs.core.LazySeq(null,(function (){var s__24931__$1 = s__24931;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24931__$1);if(temp__4092__auto__)
{var s__24931__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24931__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24931__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24933 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24932 = 0;while(true){
if((i__24932 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24932);cljs.core.chunk_append(b__24933,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$153,"text/css",cljs.core.constant$keyword$174,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$175,"stylesheet"], null)], null));
{
var G__24934 = (i__24932 + 1);
i__24932 = G__24934;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24933),iter__24930(cljs.core.chunk_rest(s__24931__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24933),null);
}
} else
{var style = cljs.core.first(s__24931__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$153,"text/css",cljs.core.constant$keyword$174,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$175,"stylesheet"], null)], null),iter__24930(cljs.core.rest(s__24931__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__24935){
var styles = cljs.core.seq(arglist__24935);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$153,"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to24936 = (function() { 
var link_to24936__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24936 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to24936__delegate.call(this,url,content);};
link_to24936.cljs$lang$maxFixedArity = 1;
link_to24936.cljs$lang$applyTo = (function (arglist__24937){
var url = cljs.core.first(arglist__24937);
var content = cljs.core.rest(arglist__24937);
return link_to24936__delegate(url,content);
});
link_to24936.cljs$core$IFn$_invoke$arity$variadic = link_to24936__delegate;
return link_to24936;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24936);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24938 = (function() { 
var mail_to24938__delegate = function (e_mail,p__24939){var vec__24941 = p__24939;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24941,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to24938 = function (e_mail,var_args){
var p__24939 = null;if (arguments.length > 1) {
  p__24939 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to24938__delegate.call(this,e_mail,p__24939);};
mail_to24938.cljs$lang$maxFixedArity = 1;
mail_to24938.cljs$lang$applyTo = (function (arglist__24942){
var e_mail = cljs.core.first(arglist__24942);
var p__24939 = cljs.core.rest(arglist__24942);
return mail_to24938__delegate(e_mail,p__24939);
});
mail_to24938.cljs$core$IFn$_invoke$arity$variadic = mail_to24938__delegate;
return mail_to24938;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24938);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24943 = (function unordered_list24943(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,(function (){var iter__4117__auto__ = (function iter__24948(s__24949){return (new cljs.core.LazySeq(null,(function (){var s__24949__$1 = s__24949;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24949__$1);if(temp__4092__auto__)
{var s__24949__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24949__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24949__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24951 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24950 = 0;while(true){
if((i__24950 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24950);cljs.core.chunk_append(b__24951,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,x], null));
{
var G__24952 = (i__24950 + 1);
i__24950 = G__24952;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24951),iter__24948(cljs.core.chunk_rest(s__24949__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24951),null);
}
} else
{var x = cljs.core.first(s__24949__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,x], null),iter__24948(cljs.core.rest(s__24949__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24943);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24953 = (function ordered_list24953(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$179,(function (){var iter__4117__auto__ = (function iter__24958(s__24959){return (new cljs.core.LazySeq(null,(function (){var s__24959__$1 = s__24959;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24959__$1);if(temp__4092__auto__)
{var s__24959__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24959__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24959__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24961 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24960 = 0;while(true){
if((i__24960 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24960);cljs.core.chunk_append(b__24961,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,x], null));
{
var G__24962 = (i__24960 + 1);
i__24960 = G__24962;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24961),iter__24958(cljs.core.chunk_rest(s__24959__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24961),null);
}
} else
{var x = cljs.core.first(s__24959__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,x], null),iter__24958(cljs.core.rest(s__24959__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24953);
/**
* Create an image element.
*/
sablono.core.image24963 = (function() {
var image24963 = null;
var image24963__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$180,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$172,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image24963__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$180,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$172,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$181,alt], null)], null);
});
image24963 = function(src,alt){
switch(arguments.length){
case 1:
return image24963__1.call(this,src);
case 2:
return image24963__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24963.cljs$core$IFn$_invoke$arity$1 = image24963__1;
image24963.cljs$core$IFn$_invoke$arity$2 = image24963__2;
return image24963;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image24963);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24964_SHARP_,p2__24965_SHARP_){return [cljs.core.str(p1__24964_SHARP_),cljs.core.str("["),cljs.core.str(p2__24965_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24966_SHARP_,p2__24967_SHARP_){return [cljs.core.str(p1__24966_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24967_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$153,type,cljs.core.constant$keyword$183,sablono.core.make_name(name),cljs.core.constant$keyword$170,sablono.core.make_id(name),cljs.core.constant$keyword$120,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24968 = (function() {
var hidden_field24968 = null;
var hidden_field24968__1 = (function (name){return hidden_field24968.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field24968__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field24968 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field24968__1.call(this,name);
case 2:
return hidden_field24968__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24968.cljs$core$IFn$_invoke$arity$1 = hidden_field24968__1;
hidden_field24968.cljs$core$IFn$_invoke$arity$2 = hidden_field24968__2;
return hidden_field24968;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field24968);
/**
* Creates a new text input field.
*/
sablono.core.text_field24969 = (function() {
var text_field24969 = null;
var text_field24969__1 = (function (name){return text_field24969.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field24969__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field24969 = function(name,value){
switch(arguments.length){
case 1:
return text_field24969__1.call(this,name);
case 2:
return text_field24969__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24969.cljs$core$IFn$_invoke$arity$1 = text_field24969__1;
text_field24969.cljs$core$IFn$_invoke$arity$2 = text_field24969__2;
return text_field24969;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field24969);
/**
* Creates a new password field.
*/
sablono.core.password_field24970 = (function() {
var password_field24970 = null;
var password_field24970__1 = (function (name){return password_field24970.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field24970__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field24970 = function(name,value){
switch(arguments.length){
case 1:
return password_field24970__1.call(this,name);
case 2:
return password_field24970__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24970.cljs$core$IFn$_invoke$arity$1 = password_field24970__1;
password_field24970.cljs$core$IFn$_invoke$arity$2 = password_field24970__2;
return password_field24970;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field24970);
/**
* Creates a new email input field.
*/
sablono.core.email_field24971 = (function() {
var email_field24971 = null;
var email_field24971__1 = (function (name){return email_field24971.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field24971__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field24971 = function(name,value){
switch(arguments.length){
case 1:
return email_field24971__1.call(this,name);
case 2:
return email_field24971__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24971.cljs$core$IFn$_invoke$arity$1 = email_field24971__1;
email_field24971.cljs$core$IFn$_invoke$arity$2 = email_field24971__2;
return email_field24971;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field24971);
/**
* Creates a check box.
*/
sablono.core.check_box24972 = (function() {
var check_box24972 = null;
var check_box24972__1 = (function (name){return check_box24972.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box24972__2 = (function (name,checked_QMARK_){return check_box24972.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box24972__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$153,"checkbox",cljs.core.constant$keyword$183,sablono.core.make_name(name),cljs.core.constant$keyword$170,sablono.core.make_id(name),cljs.core.constant$keyword$120,value,cljs.core.constant$keyword$184,checked_QMARK_], null)], null);
});
check_box24972 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24972__1.call(this,name);
case 2:
return check_box24972__2.call(this,name,checked_QMARK_);
case 3:
return check_box24972__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24972.cljs$core$IFn$_invoke$arity$1 = check_box24972__1;
check_box24972.cljs$core$IFn$_invoke$arity$2 = check_box24972__2;
check_box24972.cljs$core$IFn$_invoke$arity$3 = check_box24972__3;
return check_box24972;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box24972);
/**
* Creates a radio button.
*/
sablono.core.radio_button24973 = (function() {
var radio_button24973 = null;
var radio_button24973__1 = (function (group){return radio_button24973.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button24973__2 = (function (group,checked_QMARK_){return radio_button24973.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button24973__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$153,"radio",cljs.core.constant$keyword$183,sablono.core.make_name(group),cljs.core.constant$keyword$170,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$120,value,cljs.core.constant$keyword$184,checked_QMARK_], null)], null);
});
radio_button24973 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24973__1.call(this,group);
case 2:
return radio_button24973__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24973__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24973.cljs$core$IFn$_invoke$arity$1 = radio_button24973__1;
radio_button24973.cljs$core$IFn$_invoke$arity$2 = radio_button24973__2;
radio_button24973.cljs$core$IFn$_invoke$arity$3 = radio_button24973__3;
return radio_button24973;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button24973);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24974 = (function() {
var select_options24974 = null;
var select_options24974__1 = (function (coll){return select_options24974.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options24974__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__24983(s__24984){return (new cljs.core.LazySeq(null,(function (){var s__24984__$1 = s__24984;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24984__$1);if(temp__4092__auto__)
{var s__24984__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24984__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24984__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24986 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24985 = 0;while(true){
if((i__24985 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24985);cljs.core.chunk_append(b__24986,((cljs.core.sequential_QMARK_(x))?(function (){var vec__24989 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24989,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24989,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$185,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$186,text], null),select_options24974.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$120,val,cljs.core.constant$keyword$188,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$188,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__24991 = (i__24985 + 1);
i__24985 = G__24991;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24986),iter__24983(cljs.core.chunk_rest(s__24984__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24986),null);
}
} else
{var x = cljs.core.first(s__24984__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__24990 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24990,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24990,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$185,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$186,text], null),select_options24974.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$120,val,cljs.core.constant$keyword$188,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$188,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__24983(cljs.core.rest(s__24984__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options24974 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24974__1.call(this,coll);
case 2:
return select_options24974__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24974.cljs$core$IFn$_invoke$arity$1 = select_options24974__1;
select_options24974.cljs$core$IFn$_invoke$arity$2 = select_options24974__2;
return select_options24974;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options24974);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24992 = (function() {
var drop_down24992 = null;
var drop_down24992__2 = (function (name,options){return drop_down24992.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down24992__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$183,sablono.core.make_name(name),cljs.core.constant$keyword$170,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down24992 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24992__2.call(this,name,options);
case 3:
return drop_down24992__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24992.cljs$core$IFn$_invoke$arity$2 = drop_down24992__2;
drop_down24992.cljs$core$IFn$_invoke$arity$3 = drop_down24992__3;
return drop_down24992;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down24992);
/**
* Creates a text area element.
*/
sablono.core.text_area24993 = (function() {
var text_area24993 = null;
var text_area24993__1 = (function (name){return text_area24993.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area24993__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$189,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$183,sablono.core.make_name(name),cljs.core.constant$keyword$170,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area24993 = function(name,value){
switch(arguments.length){
case 1:
return text_area24993__1.call(this,name);
case 2:
return text_area24993__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24993.cljs$core$IFn$_invoke$arity$1 = text_area24993__1;
text_area24993.cljs$core$IFn$_invoke$arity$2 = text_area24993__2;
return text_area24993;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area24993);
/**
* Creates a file upload input.
*/
sablono.core.file_upload24994 = (function file_upload24994(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload24994);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24995 = (function label24995(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$168,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label24995);
/**
* Creates a submit button.
*/
sablono.core.submit_button24996 = (function submit_button24996(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,"submit",cljs.core.constant$keyword$120,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24996);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24997 = (function reset_button24997(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,"reset",cljs.core.constant$keyword$120,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24997);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24998 = (function() { 
var form_to24998__delegate = function (p__24999,body){var vec__25001 = p__24999;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25001,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25001,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$190,null,cljs.core.constant$keyword$191,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$193,method_str,cljs.core.constant$keyword$194,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$193,"POST",cljs.core.constant$keyword$194,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to24998 = function (p__24999,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to24998__delegate.call(this,p__24999,body);};
form_to24998.cljs$lang$maxFixedArity = 1;
form_to24998.cljs$lang$applyTo = (function (arglist__25002){
var p__24999 = cljs.core.first(arglist__25002);
var body = cljs.core.rest(arglist__25002);
return form_to24998__delegate(p__24999,body);
});
form_to24998.cljs$core$IFn$_invoke$arity$variadic = form_to24998__delegate;
return form_to24998;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24998);
