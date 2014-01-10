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
var G__24540__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__24539 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24539,0,null);var body = cljs.core.nthnext(vec__24539,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24540 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24540__delegate.call(this,args);};
G__24540.cljs$lang$maxFixedArity = 0;
G__24540.cljs$lang$applyTo = (function (arglist__24541){
var args = cljs.core.seq(arglist__24541);
return G__24540__delegate(args);
});
G__24540.cljs$core$IFn$_invoke$arity$variadic = G__24540__delegate;
return G__24540;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__24546(s__24547){return (new cljs.core.LazySeq(null,(function (){var s__24547__$1 = s__24547;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24547__$1);if(temp__4092__auto__)
{var s__24547__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24547__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24547__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24549 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24548 = 0;while(true){
if((i__24548 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24548);cljs.core.chunk_append(b__24549,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__24550 = (i__24548 + 1);
i__24548 = G__24550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24549),iter__24546(cljs.core.chunk_rest(s__24547__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24549),null);
}
} else
{var args = cljs.core.first(s__24547__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__24546(cljs.core.rest(s__24547__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__24555(s__24556){return (new cljs.core.LazySeq(null,(function (){var s__24556__$1 = s__24556;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24556__$1);if(temp__4092__auto__)
{var s__24556__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24556__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24556__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24558 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24557 = 0;while(true){
if((i__24557 < size__4116__auto__))
{var script = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24557);cljs.core.chunk_append(b__24558,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"text/javascript",cljs.core.constant$keyword$143,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null));
{
var G__24559 = (i__24557 + 1);
i__24557 = G__24559;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24558),iter__24555(cljs.core.chunk_rest(s__24556__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24558),null);
}
} else
{var script = cljs.core.first(s__24556__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"text/javascript",cljs.core.constant$keyword$143,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null),iter__24555(cljs.core.rest(s__24556__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__24560){
var scripts = cljs.core.seq(arglist__24560);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__24565(s__24566){return (new cljs.core.LazySeq(null,(function (){var s__24566__$1 = s__24566;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24566__$1);if(temp__4092__auto__)
{var s__24566__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24566__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24566__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24568 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24567 = 0;while(true){
if((i__24567 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24567);cljs.core.chunk_append(b__24568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$142,"text/css",cljs.core.constant$keyword$145,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$146,"stylesheet"], null)], null));
{
var G__24569 = (i__24567 + 1);
i__24567 = G__24569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24568),iter__24565(cljs.core.chunk_rest(s__24566__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24568),null);
}
} else
{var style = cljs.core.first(s__24566__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$142,"text/css",cljs.core.constant$keyword$145,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$146,"stylesheet"], null)], null),iter__24565(cljs.core.rest(s__24566__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__24570){
var styles = cljs.core.seq(arglist__24570);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$142,"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to24571 = (function() { 
var link_to24571__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24571 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to24571__delegate.call(this,url,content);};
link_to24571.cljs$lang$maxFixedArity = 1;
link_to24571.cljs$lang$applyTo = (function (arglist__24572){
var url = cljs.core.first(arglist__24572);
var content = cljs.core.rest(arglist__24572);
return link_to24571__delegate(url,content);
});
link_to24571.cljs$core$IFn$_invoke$arity$variadic = link_to24571__delegate;
return link_to24571;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24571);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24573 = (function() { 
var mail_to24573__delegate = function (e_mail,p__24574){var vec__24576 = p__24574;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24576,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to24573 = function (e_mail,var_args){
var p__24574 = null;if (arguments.length > 1) {
  p__24574 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to24573__delegate.call(this,e_mail,p__24574);};
mail_to24573.cljs$lang$maxFixedArity = 1;
mail_to24573.cljs$lang$applyTo = (function (arglist__24577){
var e_mail = cljs.core.first(arglist__24577);
var p__24574 = cljs.core.rest(arglist__24577);
return mail_to24573__delegate(e_mail,p__24574);
});
mail_to24573.cljs$core$IFn$_invoke$arity$variadic = mail_to24573__delegate;
return mail_to24573;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24573);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24578 = (function unordered_list24578(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$148,(function (){var iter__4117__auto__ = (function iter__24583(s__24584){return (new cljs.core.LazySeq(null,(function (){var s__24584__$1 = s__24584;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24584__$1);if(temp__4092__auto__)
{var s__24584__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24584__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24584__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24586 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24585 = 0;while(true){
if((i__24585 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24585);cljs.core.chunk_append(b__24586,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,x], null));
{
var G__24587 = (i__24585 + 1);
i__24585 = G__24587;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24586),iter__24583(cljs.core.chunk_rest(s__24584__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24586),null);
}
} else
{var x = cljs.core.first(s__24584__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,x], null),iter__24583(cljs.core.rest(s__24584__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24578);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24588 = (function ordered_list24588(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,(function (){var iter__4117__auto__ = (function iter__24593(s__24594){return (new cljs.core.LazySeq(null,(function (){var s__24594__$1 = s__24594;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24594__$1);if(temp__4092__auto__)
{var s__24594__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24594__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24594__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24596 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24595 = 0;while(true){
if((i__24595 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24595);cljs.core.chunk_append(b__24596,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,x], null));
{
var G__24597 = (i__24595 + 1);
i__24595 = G__24597;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24596),iter__24593(cljs.core.chunk_rest(s__24594__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24596),null);
}
} else
{var x = cljs.core.first(s__24594__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,x], null),iter__24593(cljs.core.rest(s__24594__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24588);
/**
* Create an image element.
*/
sablono.core.image24598 = (function() {
var image24598 = null;
var image24598__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image24598__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$143,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$152,alt], null)], null);
});
image24598 = function(src,alt){
switch(arguments.length){
case 1:
return image24598__1.call(this,src);
case 2:
return image24598__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24598.cljs$core$IFn$_invoke$arity$1 = image24598__1;
image24598.cljs$core$IFn$_invoke$arity$2 = image24598__2;
return image24598;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image24598);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24599_SHARP_,p2__24600_SHARP_){return [cljs.core.str(p1__24599_SHARP_),cljs.core.str("["),cljs.core.str(p2__24600_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24601_SHARP_,p2__24602_SHARP_){return [cljs.core.str(p1__24601_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24602_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$142,type,cljs.core.constant$keyword$154,sablono.core.make_name(name),cljs.core.constant$keyword$140,sablono.core.make_id(name),cljs.core.constant$keyword$117,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24603 = (function() {
var hidden_field24603 = null;
var hidden_field24603__1 = (function (name){return hidden_field24603.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field24603__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field24603 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field24603__1.call(this,name);
case 2:
return hidden_field24603__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24603.cljs$core$IFn$_invoke$arity$1 = hidden_field24603__1;
hidden_field24603.cljs$core$IFn$_invoke$arity$2 = hidden_field24603__2;
return hidden_field24603;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field24603);
/**
* Creates a new text input field.
*/
sablono.core.text_field24604 = (function() {
var text_field24604 = null;
var text_field24604__1 = (function (name){return text_field24604.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field24604__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field24604 = function(name,value){
switch(arguments.length){
case 1:
return text_field24604__1.call(this,name);
case 2:
return text_field24604__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24604.cljs$core$IFn$_invoke$arity$1 = text_field24604__1;
text_field24604.cljs$core$IFn$_invoke$arity$2 = text_field24604__2;
return text_field24604;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field24604);
/**
* Creates a new password field.
*/
sablono.core.password_field24605 = (function() {
var password_field24605 = null;
var password_field24605__1 = (function (name){return password_field24605.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field24605__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field24605 = function(name,value){
switch(arguments.length){
case 1:
return password_field24605__1.call(this,name);
case 2:
return password_field24605__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24605.cljs$core$IFn$_invoke$arity$1 = password_field24605__1;
password_field24605.cljs$core$IFn$_invoke$arity$2 = password_field24605__2;
return password_field24605;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field24605);
/**
* Creates a new email input field.
*/
sablono.core.email_field24606 = (function() {
var email_field24606 = null;
var email_field24606__1 = (function (name){return email_field24606.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field24606__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field24606 = function(name,value){
switch(arguments.length){
case 1:
return email_field24606__1.call(this,name);
case 2:
return email_field24606__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24606.cljs$core$IFn$_invoke$arity$1 = email_field24606__1;
email_field24606.cljs$core$IFn$_invoke$arity$2 = email_field24606__2;
return email_field24606;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field24606);
/**
* Creates a check box.
*/
sablono.core.check_box24607 = (function() {
var check_box24607 = null;
var check_box24607__1 = (function (name){return check_box24607.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box24607__2 = (function (name,checked_QMARK_){return check_box24607.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box24607__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$142,"checkbox",cljs.core.constant$keyword$154,sablono.core.make_name(name),cljs.core.constant$keyword$140,sablono.core.make_id(name),cljs.core.constant$keyword$117,value,cljs.core.constant$keyword$155,checked_QMARK_], null)], null);
});
check_box24607 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24607__1.call(this,name);
case 2:
return check_box24607__2.call(this,name,checked_QMARK_);
case 3:
return check_box24607__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24607.cljs$core$IFn$_invoke$arity$1 = check_box24607__1;
check_box24607.cljs$core$IFn$_invoke$arity$2 = check_box24607__2;
check_box24607.cljs$core$IFn$_invoke$arity$3 = check_box24607__3;
return check_box24607;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box24607);
/**
* Creates a radio button.
*/
sablono.core.radio_button24608 = (function() {
var radio_button24608 = null;
var radio_button24608__1 = (function (group){return radio_button24608.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button24608__2 = (function (group,checked_QMARK_){return radio_button24608.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button24608__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$142,"radio",cljs.core.constant$keyword$154,sablono.core.make_name(group),cljs.core.constant$keyword$140,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$117,value,cljs.core.constant$keyword$155,checked_QMARK_], null)], null);
});
radio_button24608 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24608__1.call(this,group);
case 2:
return radio_button24608__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24608__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24608.cljs$core$IFn$_invoke$arity$1 = radio_button24608__1;
radio_button24608.cljs$core$IFn$_invoke$arity$2 = radio_button24608__2;
radio_button24608.cljs$core$IFn$_invoke$arity$3 = radio_button24608__3;
return radio_button24608;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button24608);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24609 = (function() {
var select_options24609 = null;
var select_options24609__1 = (function (coll){return select_options24609.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options24609__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__24618(s__24619){return (new cljs.core.LazySeq(null,(function (){var s__24619__$1 = s__24619;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24619__$1);if(temp__4092__auto__)
{var s__24619__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24619__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24619__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24621 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24620 = 0;while(true){
if((i__24620 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24620);cljs.core.chunk_append(b__24621,((cljs.core.sequential_QMARK_(x))?(function (){var vec__24624 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24624,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24624,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$157,text], null),select_options24609.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$117,val,cljs.core.constant$keyword$159,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$159,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__24626 = (i__24620 + 1);
i__24620 = G__24626;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24621),iter__24618(cljs.core.chunk_rest(s__24619__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24621),null);
}
} else
{var x = cljs.core.first(s__24619__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__24625 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24625,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24625,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$157,text], null),select_options24609.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$117,val,cljs.core.constant$keyword$159,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$159,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__24618(cljs.core.rest(s__24619__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options24609 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24609__1.call(this,coll);
case 2:
return select_options24609__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24609.cljs$core$IFn$_invoke$arity$1 = select_options24609__1;
select_options24609.cljs$core$IFn$_invoke$arity$2 = select_options24609__2;
return select_options24609;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options24609);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24627 = (function() {
var drop_down24627 = null;
var drop_down24627__2 = (function (name,options){return drop_down24627.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down24627__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$154,sablono.core.make_name(name),cljs.core.constant$keyword$140,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down24627 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24627__2.call(this,name,options);
case 3:
return drop_down24627__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24627.cljs$core$IFn$_invoke$arity$2 = drop_down24627__2;
drop_down24627.cljs$core$IFn$_invoke$arity$3 = drop_down24627__3;
return drop_down24627;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down24627);
/**
* Creates a text area element.
*/
sablono.core.text_area24628 = (function() {
var text_area24628 = null;
var text_area24628__1 = (function (name){return text_area24628.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area24628__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$154,sablono.core.make_name(name),cljs.core.constant$keyword$140,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area24628 = function(name,value){
switch(arguments.length){
case 1:
return text_area24628__1.call(this,name);
case 2:
return text_area24628__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24628.cljs$core$IFn$_invoke$arity$1 = text_area24628__1;
text_area24628.cljs$core$IFn$_invoke$arity$2 = text_area24628__2;
return text_area24628;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area24628);
/**
* Creates a file upload input.
*/
sablono.core.file_upload24629 = (function file_upload24629(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload24629);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24630 = (function label24630(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$162,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label24630);
/**
* Creates a submit button.
*/
sablono.core.submit_button24631 = (function submit_button24631(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"submit",cljs.core.constant$keyword$117,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24631);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24632 = (function reset_button24632(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"reset",cljs.core.constant$keyword$117,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24632);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24633 = (function() { 
var form_to24633__delegate = function (p__24634,body){var vec__24636 = p__24634;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24636,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24636,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$163,null,cljs.core.constant$keyword$164,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$166,method_str,cljs.core.constant$keyword$167,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$166,"POST",cljs.core.constant$keyword$167,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to24633 = function (p__24634,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to24633__delegate.call(this,p__24634,body);};
form_to24633.cljs$lang$maxFixedArity = 1;
form_to24633.cljs$lang$applyTo = (function (arglist__24637){
var p__24634 = cljs.core.first(arglist__24637);
var body = cljs.core.rest(arglist__24637);
return form_to24633__delegate(p__24634,body);
});
form_to24633.cljs$core$IFn$_invoke$arity$variadic = form_to24633__delegate;
return form_to24633;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24633);
