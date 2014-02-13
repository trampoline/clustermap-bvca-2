// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__26303__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__26302 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26302,0,null);var body = cljs.core.nthnext(vec__26302,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__26303 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26303__delegate.call(this,args);};
G__26303.cljs$lang$maxFixedArity = 0;
G__26303.cljs$lang$applyTo = (function (arglist__26304){
var args = cljs.core.seq(arglist__26304);
return G__26303__delegate(args);
});
G__26303.cljs$core$IFn$_invoke$arity$variadic = G__26303__delegate;
return G__26303;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26309(s__26310){return (new cljs.core.LazySeq(null,(function (){var s__26310__$1 = s__26310;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26310__$1);if(temp__4092__auto__)
{var s__26310__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26310__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26310__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26312 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26311 = 0;while(true){
if((i__26311 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26311);cljs.core.chunk_append(b__26312,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26313 = (i__26311 + 1);
i__26311 = G__26313;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26312),iter__26309(cljs.core.chunk_rest(s__26310__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26312),null);
}
} else
{var args = cljs.core.first(s__26310__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26309(cljs.core.rest(s__26310__$2)));
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
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__26314_SHARP_){return cljs.core.reset_BANG_(html,p1__26314_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26319(s__26320){return (new cljs.core.LazySeq(null,(function (){var s__26320__$1 = s__26320;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26320__$1);if(temp__4092__auto__)
{var s__26320__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26320__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26320__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26322 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26321 = 0;while(true){
if((i__26321 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26321);cljs.core.chunk_append(b__26322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$247,"text/css",cljs.core.constant$keyword$248,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$249,"stylesheet"], null)], null));
{
var G__26323 = (i__26321 + 1);
i__26321 = G__26323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26322),iter__26319(cljs.core.chunk_rest(s__26320__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26322),null);
}
} else
{var style = cljs.core.first(s__26320__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$247,"text/css",cljs.core.constant$keyword$248,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$249,"stylesheet"], null)], null),iter__26319(cljs.core.rest(s__26320__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26324){
var styles = cljs.core.seq(arglist__26324);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to26325 = (function() { 
var link_to26325__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26325 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26325__delegate.call(this,url,content);};
link_to26325.cljs$lang$maxFixedArity = 1;
link_to26325.cljs$lang$applyTo = (function (arglist__26326){
var url = cljs.core.first(arglist__26326);
var content = cljs.core.rest(arglist__26326);
return link_to26325__delegate(url,content);
});
link_to26325.cljs$core$IFn$_invoke$arity$variadic = link_to26325__delegate;
return link_to26325;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26325);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26327 = (function() { 
var mail_to26327__delegate = function (e_mail,p__26328){var vec__26330 = p__26328;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26327 = function (e_mail,var_args){
var p__26328 = null;if (arguments.length > 1) {
  p__26328 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26327__delegate.call(this,e_mail,p__26328);};
mail_to26327.cljs$lang$maxFixedArity = 1;
mail_to26327.cljs$lang$applyTo = (function (arglist__26331){
var e_mail = cljs.core.first(arglist__26331);
var p__26328 = cljs.core.rest(arglist__26331);
return mail_to26327__delegate(e_mail,p__26328);
});
mail_to26327.cljs$core$IFn$_invoke$arity$variadic = mail_to26327__delegate;
return mail_to26327;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26327);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26332 = (function unordered_list26332(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,(function (){var iter__4117__auto__ = (function iter__26337(s__26338){return (new cljs.core.LazySeq(null,(function (){var s__26338__$1 = s__26338;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26338__$1);if(temp__4092__auto__)
{var s__26338__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26338__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26338__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26340 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26339 = 0;while(true){
if((i__26339 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26339);cljs.core.chunk_append(b__26340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,x], null));
{
var G__26341 = (i__26339 + 1);
i__26339 = G__26341;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26340),iter__26337(cljs.core.chunk_rest(s__26338__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26340),null);
}
} else
{var x = cljs.core.first(s__26338__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,x], null),iter__26337(cljs.core.rest(s__26338__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26332);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26342 = (function ordered_list26342(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$253,(function (){var iter__4117__auto__ = (function iter__26347(s__26348){return (new cljs.core.LazySeq(null,(function (){var s__26348__$1 = s__26348;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26348__$1);if(temp__4092__auto__)
{var s__26348__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26348__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26348__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26350 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26349 = 0;while(true){
if((i__26349 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26349);cljs.core.chunk_append(b__26350,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,x], null));
{
var G__26351 = (i__26349 + 1);
i__26349 = G__26351;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26350),iter__26347(cljs.core.chunk_rest(s__26348__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26350),null);
}
} else
{var x = cljs.core.first(s__26348__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,x], null),iter__26347(cljs.core.rest(s__26348__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26342);
/**
* Create an image element.
*/
sablono.core.image26352 = (function() {
var image26352 = null;
var image26352__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$255,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26352__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$256,alt], null)], null);
});
image26352 = function(src,alt){
switch(arguments.length){
case 1:
return image26352__1.call(this,src);
case 2:
return image26352__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26352.cljs$core$IFn$_invoke$arity$1 = image26352__1;
image26352.cljs$core$IFn$_invoke$arity$2 = image26352__2;
return image26352;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26352);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26353_SHARP_,p2__26354_SHARP_){return [cljs.core.str(p1__26353_SHARP_),cljs.core.str("["),cljs.core.str(p2__26354_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26355_SHARP_,p2__26356_SHARP_){return [cljs.core.str(p1__26355_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26356_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$247,type,cljs.core.constant$keyword$257,sablono.core.make_name(name),cljs.core.constant$keyword$243,sablono.core.make_id(name),cljs.core.constant$keyword$215,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26357 = (function() {
var hidden_field26357 = null;
var hidden_field26357__1 = (function (name){return hidden_field26357.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26357__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26357 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26357__1.call(this,name);
case 2:
return hidden_field26357__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26357.cljs$core$IFn$_invoke$arity$1 = hidden_field26357__1;
hidden_field26357.cljs$core$IFn$_invoke$arity$2 = hidden_field26357__2;
return hidden_field26357;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26357);
/**
* Creates a new text input field.
*/
sablono.core.text_field26358 = (function() {
var text_field26358 = null;
var text_field26358__1 = (function (name){return text_field26358.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26358__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26358 = function(name,value){
switch(arguments.length){
case 1:
return text_field26358__1.call(this,name);
case 2:
return text_field26358__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26358.cljs$core$IFn$_invoke$arity$1 = text_field26358__1;
text_field26358.cljs$core$IFn$_invoke$arity$2 = text_field26358__2;
return text_field26358;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26358);
/**
* Creates a new password field.
*/
sablono.core.password_field26359 = (function() {
var password_field26359 = null;
var password_field26359__1 = (function (name){return password_field26359.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26359__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26359 = function(name,value){
switch(arguments.length){
case 1:
return password_field26359__1.call(this,name);
case 2:
return password_field26359__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26359.cljs$core$IFn$_invoke$arity$1 = password_field26359__1;
password_field26359.cljs$core$IFn$_invoke$arity$2 = password_field26359__2;
return password_field26359;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26359);
/**
* Creates a new email input field.
*/
sablono.core.email_field26360 = (function() {
var email_field26360 = null;
var email_field26360__1 = (function (name){return email_field26360.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26360__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26360 = function(name,value){
switch(arguments.length){
case 1:
return email_field26360__1.call(this,name);
case 2:
return email_field26360__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26360.cljs$core$IFn$_invoke$arity$1 = email_field26360__1;
email_field26360.cljs$core$IFn$_invoke$arity$2 = email_field26360__2;
return email_field26360;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26360);
/**
* Creates a check box.
*/
sablono.core.check_box26361 = (function() {
var check_box26361 = null;
var check_box26361__1 = (function (name){return check_box26361.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26361__2 = (function (name,checked_QMARK_){return check_box26361.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26361__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$247,"checkbox",cljs.core.constant$keyword$257,sablono.core.make_name(name),cljs.core.constant$keyword$243,sablono.core.make_id(name),cljs.core.constant$keyword$215,value,cljs.core.constant$keyword$258,checked_QMARK_], null)], null);
});
check_box26361 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26361__1.call(this,name);
case 2:
return check_box26361__2.call(this,name,checked_QMARK_);
case 3:
return check_box26361__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26361.cljs$core$IFn$_invoke$arity$1 = check_box26361__1;
check_box26361.cljs$core$IFn$_invoke$arity$2 = check_box26361__2;
check_box26361.cljs$core$IFn$_invoke$arity$3 = check_box26361__3;
return check_box26361;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26361);
/**
* Creates a radio button.
*/
sablono.core.radio_button26362 = (function() {
var radio_button26362 = null;
var radio_button26362__1 = (function (group){return radio_button26362.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26362__2 = (function (group,checked_QMARK_){return radio_button26362.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26362__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$247,"radio",cljs.core.constant$keyword$257,sablono.core.make_name(group),cljs.core.constant$keyword$243,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$215,value,cljs.core.constant$keyword$258,checked_QMARK_], null)], null);
});
radio_button26362 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26362__1.call(this,group);
case 2:
return radio_button26362__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26362__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26362.cljs$core$IFn$_invoke$arity$1 = radio_button26362__1;
radio_button26362.cljs$core$IFn$_invoke$arity$2 = radio_button26362__2;
radio_button26362.cljs$core$IFn$_invoke$arity$3 = radio_button26362__3;
return radio_button26362;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26362);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26363 = (function() {
var select_options26363 = null;
var select_options26363__1 = (function (coll){return select_options26363.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26363__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26372(s__26373){return (new cljs.core.LazySeq(null,(function (){var s__26373__$1 = s__26373;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26373__$1);if(temp__4092__auto__)
{var s__26373__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26373__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26373__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26375 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26374 = 0;while(true){
if((i__26374 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26374);cljs.core.chunk_append(b__26375,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26378 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26378,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26378,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,text], null),select_options26363.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$215,val,cljs.core.constant$keyword$262,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26380 = (i__26374 + 1);
i__26374 = G__26380;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26375),iter__26372(cljs.core.chunk_rest(s__26373__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26375),null);
}
} else
{var x = cljs.core.first(s__26373__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26379 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26379,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26379,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,text], null),select_options26363.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$215,val,cljs.core.constant$keyword$262,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26372(cljs.core.rest(s__26373__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26363 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26363__1.call(this,coll);
case 2:
return select_options26363__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26363.cljs$core$IFn$_invoke$arity$1 = select_options26363__1;
select_options26363.cljs$core$IFn$_invoke$arity$2 = select_options26363__2;
return select_options26363;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26363);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26381 = (function() {
var drop_down26381 = null;
var drop_down26381__2 = (function (name,options){return drop_down26381.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26381__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,sablono.core.make_name(name),cljs.core.constant$keyword$243,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26381 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26381__2.call(this,name,options);
case 3:
return drop_down26381__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26381.cljs$core$IFn$_invoke$arity$2 = drop_down26381__2;
drop_down26381.cljs$core$IFn$_invoke$arity$3 = drop_down26381__3;
return drop_down26381;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26381);
/**
* Creates a text area element.
*/
sablono.core.text_area26382 = (function() {
var text_area26382 = null;
var text_area26382__1 = (function (name){return text_area26382.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26382__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$257,sablono.core.make_name(name),cljs.core.constant$keyword$243,sablono.core.make_id(name),cljs.core.constant$keyword$215,value], null)], null);
});
text_area26382 = function(name,value){
switch(arguments.length){
case 1:
return text_area26382__1.call(this,name);
case 2:
return text_area26382__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26382.cljs$core$IFn$_invoke$arity$1 = text_area26382__1;
text_area26382.cljs$core$IFn$_invoke$arity$2 = text_area26382__2;
return text_area26382;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26382);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26383 = (function file_upload26383(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26383);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26384 = (function label26384(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$240,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26384);
/**
* Creates a submit button.
*/
sablono.core.submit_button26385 = (function submit_button26385(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$247,"submit",cljs.core.constant$keyword$215,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26385);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26386 = (function reset_button26386(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$247,"reset",cljs.core.constant$keyword$215,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26386);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26387 = (function() { 
var form_to26387__delegate = function (p__26388,body){var vec__26390 = p__26388;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26390,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26390,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,null,cljs.core.constant$keyword$265,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$267,method_str,cljs.core.constant$keyword$268,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$267,"POST",cljs.core.constant$keyword$268,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26387 = function (p__26388,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26387__delegate.call(this,p__26388,body);};
form_to26387.cljs$lang$maxFixedArity = 1;
form_to26387.cljs$lang$applyTo = (function (arglist__26391){
var p__26388 = cljs.core.first(arglist__26391);
var body = cljs.core.rest(arglist__26391);
return form_to26387__delegate(p__26388,body);
});
form_to26387.cljs$core$IFn$_invoke$arity$variadic = form_to26387__delegate;
return form_to26387;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26387);
