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
var G__25409__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__25408 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25408,0,null);var body = cljs.core.nthnext(vec__25408,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__25409 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25409__delegate.call(this,args);};
G__25409.cljs$lang$maxFixedArity = 0;
G__25409.cljs$lang$applyTo = (function (arglist__25410){
var args = cljs.core.seq(arglist__25410);
return G__25409__delegate(args);
});
G__25409.cljs$core$IFn$_invoke$arity$variadic = G__25409__delegate;
return G__25409;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__25415(s__25416){return (new cljs.core.LazySeq(null,(function (){var s__25416__$1 = s__25416;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25416__$1);if(temp__4092__auto__)
{var s__25416__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25416__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25416__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25418 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25417 = 0;while(true){
if((i__25417 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25417);cljs.core.chunk_append(b__25418,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__25419 = (i__25417 + 1);
i__25417 = G__25419;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25418),iter__25415(cljs.core.chunk_rest(s__25416__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25418),null);
}
} else
{var args = cljs.core.first(s__25416__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__25415(cljs.core.rest(s__25416__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__25424(s__25425){return (new cljs.core.LazySeq(null,(function (){var s__25425__$1 = s__25425;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25425__$1);if(temp__4092__auto__)
{var s__25425__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25425__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25425__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25427 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25426 = 0;while(true){
if((i__25426 < size__4116__auto__))
{var script = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25426);cljs.core.chunk_append(b__25427,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,"text/javascript",cljs.core.constant$keyword$172,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null));
{
var G__25428 = (i__25426 + 1);
i__25426 = G__25428;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25427),iter__25424(cljs.core.chunk_rest(s__25425__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25427),null);
}
} else
{var script = cljs.core.first(s__25425__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,"text/javascript",cljs.core.constant$keyword$172,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null),iter__25424(cljs.core.rest(s__25425__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__25429){
var scripts = cljs.core.seq(arglist__25429);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__25434(s__25435){return (new cljs.core.LazySeq(null,(function (){var s__25435__$1 = s__25435;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25435__$1);if(temp__4092__auto__)
{var s__25435__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25435__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25435__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25437 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25436 = 0;while(true){
if((i__25436 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25436);cljs.core.chunk_append(b__25437,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$153,"text/css",cljs.core.constant$keyword$174,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$175,"stylesheet"], null)], null));
{
var G__25438 = (i__25436 + 1);
i__25436 = G__25438;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25437),iter__25434(cljs.core.chunk_rest(s__25435__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25437),null);
}
} else
{var style = cljs.core.first(s__25435__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$153,"text/css",cljs.core.constant$keyword$174,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$175,"stylesheet"], null)], null),iter__25434(cljs.core.rest(s__25435__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__25439){
var styles = cljs.core.seq(arglist__25439);
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
sablono.core.link_to25440 = (function() { 
var link_to25440__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to25440 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to25440__delegate.call(this,url,content);};
link_to25440.cljs$lang$maxFixedArity = 1;
link_to25440.cljs$lang$applyTo = (function (arglist__25441){
var url = cljs.core.first(arglist__25441);
var content = cljs.core.rest(arglist__25441);
return link_to25440__delegate(url,content);
});
link_to25440.cljs$core$IFn$_invoke$arity$variadic = link_to25440__delegate;
return link_to25440;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to25440);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to25442 = (function() { 
var mail_to25442__delegate = function (e_mail,p__25443){var vec__25445 = p__25443;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25445,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to25442 = function (e_mail,var_args){
var p__25443 = null;if (arguments.length > 1) {
  p__25443 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to25442__delegate.call(this,e_mail,p__25443);};
mail_to25442.cljs$lang$maxFixedArity = 1;
mail_to25442.cljs$lang$applyTo = (function (arglist__25446){
var e_mail = cljs.core.first(arglist__25446);
var p__25443 = cljs.core.rest(arglist__25446);
return mail_to25442__delegate(e_mail,p__25443);
});
mail_to25442.cljs$core$IFn$_invoke$arity$variadic = mail_to25442__delegate;
return mail_to25442;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to25442);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list25447 = (function unordered_list25447(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,(function (){var iter__4117__auto__ = (function iter__25452(s__25453){return (new cljs.core.LazySeq(null,(function (){var s__25453__$1 = s__25453;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25453__$1);if(temp__4092__auto__)
{var s__25453__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25453__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25453__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25455 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25454 = 0;while(true){
if((i__25454 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25454);cljs.core.chunk_append(b__25455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,x], null));
{
var G__25456 = (i__25454 + 1);
i__25454 = G__25456;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25455),iter__25452(cljs.core.chunk_rest(s__25453__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25455),null);
}
} else
{var x = cljs.core.first(s__25453__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,x], null),iter__25452(cljs.core.rest(s__25453__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list25447);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list25457 = (function ordered_list25457(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$179,(function (){var iter__4117__auto__ = (function iter__25462(s__25463){return (new cljs.core.LazySeq(null,(function (){var s__25463__$1 = s__25463;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25463__$1);if(temp__4092__auto__)
{var s__25463__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25463__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25463__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25465 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25464 = 0;while(true){
if((i__25464 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25464);cljs.core.chunk_append(b__25465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,x], null));
{
var G__25466 = (i__25464 + 1);
i__25464 = G__25466;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25465),iter__25462(cljs.core.chunk_rest(s__25463__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25465),null);
}
} else
{var x = cljs.core.first(s__25463__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,x], null),iter__25462(cljs.core.rest(s__25463__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list25457);
/**
* Create an image element.
*/
sablono.core.image25467 = (function() {
var image25467 = null;
var image25467__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$180,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$172,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image25467__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$180,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$172,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$181,alt], null)], null);
});
image25467 = function(src,alt){
switch(arguments.length){
case 1:
return image25467__1.call(this,src);
case 2:
return image25467__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image25467.cljs$core$IFn$_invoke$arity$1 = image25467__1;
image25467.cljs$core$IFn$_invoke$arity$2 = image25467__2;
return image25467;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image25467);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25468_SHARP_,p2__25469_SHARP_){return [cljs.core.str(p1__25468_SHARP_),cljs.core.str("["),cljs.core.str(p2__25469_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25470_SHARP_,p2__25471_SHARP_){return [cljs.core.str(p1__25470_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25471_SHARP_)].join('');
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
sablono.core.hidden_field25472 = (function() {
var hidden_field25472 = null;
var hidden_field25472__1 = (function (name){return hidden_field25472.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field25472__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field25472 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field25472__1.call(this,name);
case 2:
return hidden_field25472__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field25472.cljs$core$IFn$_invoke$arity$1 = hidden_field25472__1;
hidden_field25472.cljs$core$IFn$_invoke$arity$2 = hidden_field25472__2;
return hidden_field25472;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field25472);
/**
* Creates a new text input field.
*/
sablono.core.text_field25473 = (function() {
var text_field25473 = null;
var text_field25473__1 = (function (name){return text_field25473.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field25473__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field25473 = function(name,value){
switch(arguments.length){
case 1:
return text_field25473__1.call(this,name);
case 2:
return text_field25473__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field25473.cljs$core$IFn$_invoke$arity$1 = text_field25473__1;
text_field25473.cljs$core$IFn$_invoke$arity$2 = text_field25473__2;
return text_field25473;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field25473);
/**
* Creates a new password field.
*/
sablono.core.password_field25474 = (function() {
var password_field25474 = null;
var password_field25474__1 = (function (name){return password_field25474.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field25474__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field25474 = function(name,value){
switch(arguments.length){
case 1:
return password_field25474__1.call(this,name);
case 2:
return password_field25474__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field25474.cljs$core$IFn$_invoke$arity$1 = password_field25474__1;
password_field25474.cljs$core$IFn$_invoke$arity$2 = password_field25474__2;
return password_field25474;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field25474);
/**
* Creates a new email input field.
*/
sablono.core.email_field25475 = (function() {
var email_field25475 = null;
var email_field25475__1 = (function (name){return email_field25475.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field25475__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field25475 = function(name,value){
switch(arguments.length){
case 1:
return email_field25475__1.call(this,name);
case 2:
return email_field25475__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field25475.cljs$core$IFn$_invoke$arity$1 = email_field25475__1;
email_field25475.cljs$core$IFn$_invoke$arity$2 = email_field25475__2;
return email_field25475;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field25475);
/**
* Creates a check box.
*/
sablono.core.check_box25476 = (function() {
var check_box25476 = null;
var check_box25476__1 = (function (name){return check_box25476.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box25476__2 = (function (name,checked_QMARK_){return check_box25476.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box25476__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$153,"checkbox",cljs.core.constant$keyword$183,sablono.core.make_name(name),cljs.core.constant$keyword$170,sablono.core.make_id(name),cljs.core.constant$keyword$120,value,cljs.core.constant$keyword$184,checked_QMARK_], null)], null);
});
check_box25476 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box25476__1.call(this,name);
case 2:
return check_box25476__2.call(this,name,checked_QMARK_);
case 3:
return check_box25476__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box25476.cljs$core$IFn$_invoke$arity$1 = check_box25476__1;
check_box25476.cljs$core$IFn$_invoke$arity$2 = check_box25476__2;
check_box25476.cljs$core$IFn$_invoke$arity$3 = check_box25476__3;
return check_box25476;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box25476);
/**
* Creates a radio button.
*/
sablono.core.radio_button25477 = (function() {
var radio_button25477 = null;
var radio_button25477__1 = (function (group){return radio_button25477.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button25477__2 = (function (group,checked_QMARK_){return radio_button25477.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button25477__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$153,"radio",cljs.core.constant$keyword$183,sablono.core.make_name(group),cljs.core.constant$keyword$170,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$120,value,cljs.core.constant$keyword$184,checked_QMARK_], null)], null);
});
radio_button25477 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button25477__1.call(this,group);
case 2:
return radio_button25477__2.call(this,group,checked_QMARK_);
case 3:
return radio_button25477__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button25477.cljs$core$IFn$_invoke$arity$1 = radio_button25477__1;
radio_button25477.cljs$core$IFn$_invoke$arity$2 = radio_button25477__2;
radio_button25477.cljs$core$IFn$_invoke$arity$3 = radio_button25477__3;
return radio_button25477;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button25477);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options25478 = (function() {
var select_options25478 = null;
var select_options25478__1 = (function (coll){return select_options25478.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options25478__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__25487(s__25488){return (new cljs.core.LazySeq(null,(function (){var s__25488__$1 = s__25488;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25488__$1);if(temp__4092__auto__)
{var s__25488__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25488__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25488__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25490 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25489 = 0;while(true){
if((i__25489 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25489);cljs.core.chunk_append(b__25490,((cljs.core.sequential_QMARK_(x))?(function (){var vec__25493 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25493,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25493,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$185,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$186,text], null),select_options25478.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$120,val,cljs.core.constant$keyword$188,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$188,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__25495 = (i__25489 + 1);
i__25489 = G__25495;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25490),iter__25487(cljs.core.chunk_rest(s__25488__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25490),null);
}
} else
{var x = cljs.core.first(s__25488__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__25494 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25494,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25494,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$185,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$186,text], null),select_options25478.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$120,val,cljs.core.constant$keyword$188,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$188,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__25487(cljs.core.rest(s__25488__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options25478 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options25478__1.call(this,coll);
case 2:
return select_options25478__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options25478.cljs$core$IFn$_invoke$arity$1 = select_options25478__1;
select_options25478.cljs$core$IFn$_invoke$arity$2 = select_options25478__2;
return select_options25478;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options25478);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down25496 = (function() {
var drop_down25496 = null;
var drop_down25496__2 = (function (name,options){return drop_down25496.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down25496__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$183,sablono.core.make_name(name),cljs.core.constant$keyword$170,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down25496 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down25496__2.call(this,name,options);
case 3:
return drop_down25496__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down25496.cljs$core$IFn$_invoke$arity$2 = drop_down25496__2;
drop_down25496.cljs$core$IFn$_invoke$arity$3 = drop_down25496__3;
return drop_down25496;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down25496);
/**
* Creates a text area element.
*/
sablono.core.text_area25497 = (function() {
var text_area25497 = null;
var text_area25497__1 = (function (name){return text_area25497.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area25497__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$189,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$183,sablono.core.make_name(name),cljs.core.constant$keyword$170,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area25497 = function(name,value){
switch(arguments.length){
case 1:
return text_area25497__1.call(this,name);
case 2:
return text_area25497__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area25497.cljs$core$IFn$_invoke$arity$1 = text_area25497__1;
text_area25497.cljs$core$IFn$_invoke$arity$2 = text_area25497__2;
return text_area25497;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area25497);
/**
* Creates a file upload input.
*/
sablono.core.file_upload25498 = (function file_upload25498(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload25498);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label25499 = (function label25499(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$168,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label25499);
/**
* Creates a submit button.
*/
sablono.core.submit_button25500 = (function submit_button25500(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,"submit",cljs.core.constant$keyword$120,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button25500);
/**
* Creates a form reset button.
*/
sablono.core.reset_button25501 = (function reset_button25501(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,"reset",cljs.core.constant$keyword$120,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button25501);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to25502 = (function() { 
var form_to25502__delegate = function (p__25503,body){var vec__25505 = p__25503;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25505,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25505,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$190,null,cljs.core.constant$keyword$191,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$193,method_str,cljs.core.constant$keyword$194,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$193,"POST",cljs.core.constant$keyword$194,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to25502 = function (p__25503,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to25502__delegate.call(this,p__25503,body);};
form_to25502.cljs$lang$maxFixedArity = 1;
form_to25502.cljs$lang$applyTo = (function (arglist__25506){
var p__25503 = cljs.core.first(arglist__25506);
var body = cljs.core.rest(arglist__25506);
return form_to25502__delegate(p__25503,body);
});
form_to25502.cljs$core$IFn$_invoke$arity$variadic = form_to25502__delegate;
return form_to25502;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to25502);
