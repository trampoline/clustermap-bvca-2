// Compiled by ClojureScript 0.0-2268
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
var G__44066__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__44065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44065,(0),null);var body = cljs.core.nthnext(vec__44065,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__44066 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__44066__delegate.call(this,args);};
G__44066.cljs$lang$maxFixedArity = 0;
G__44066.cljs$lang$applyTo = (function (arglist__44067){
var args = cljs.core.seq(arglist__44067);
return G__44066__delegate(args);
});
G__44066.cljs$core$IFn$_invoke$arity$variadic = G__44066__delegate;
return G__44066;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__44072(s__44073){return (new cljs.core.LazySeq(null,(function (){var s__44073__$1 = s__44073;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44073__$1);if(temp__4126__auto__)
{var s__44073__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44073__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44073__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44075 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44074 = (0);while(true){
if((i__44074 < size__4267__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44074);cljs.core.chunk_append(b__44075,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__44076 = (i__44074 + (1));
i__44074 = G__44076;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44075),iter__44072(cljs.core.chunk_rest(s__44073__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44075),null);
}
} else
{var args = cljs.core.first(s__44073__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__44072(cljs.core.rest(s__44073__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__44081(s__44082){return (new cljs.core.LazySeq(null,(function (){var s__44082__$1 = s__44082;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44082__$1);if(temp__4126__auto__)
{var s__44082__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44082__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44082__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44084 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44083 = (0);while(true){
if((i__44083 < size__4267__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44083);cljs.core.chunk_append(b__44084,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$825,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$805,"text/css",cljs.core.constant$keyword$826,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$827,"stylesheet"], null)], null));
{
var G__44085 = (i__44083 + (1));
i__44083 = G__44085;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44084),iter__44081(cljs.core.chunk_rest(s__44082__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44084),null);
}
} else
{var style = cljs.core.first(s__44082__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$825,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$805,"text/css",cljs.core.constant$keyword$826,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$827,"stylesheet"], null)], null),iter__44081(cljs.core.rest(s__44082__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__44086){
var styles = cljs.core.seq(arglist__44086);
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
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to44087 = (function() { 
var link_to44087__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$828,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$826,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to44087 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to44087__delegate.call(this,url,content);};
link_to44087.cljs$lang$maxFixedArity = 1;
link_to44087.cljs$lang$applyTo = (function (arglist__44088){
var url = cljs.core.first(arglist__44088);
var content = cljs.core.rest(arglist__44088);
return link_to44087__delegate(url,content);
});
link_to44087.cljs$core$IFn$_invoke$arity$variadic = link_to44087__delegate;
return link_to44087;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to44087);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to44089 = (function() { 
var mail_to44089__delegate = function (e_mail,p__44090){var vec__44092 = p__44090;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44092,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$828,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$826,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to44089 = function (e_mail,var_args){
var p__44090 = null;if (arguments.length > 1) {
  p__44090 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to44089__delegate.call(this,e_mail,p__44090);};
mail_to44089.cljs$lang$maxFixedArity = 1;
mail_to44089.cljs$lang$applyTo = (function (arglist__44093){
var e_mail = cljs.core.first(arglist__44093);
var p__44090 = cljs.core.rest(arglist__44093);
return mail_to44089__delegate(e_mail,p__44090);
});
mail_to44089.cljs$core$IFn$_invoke$arity$variadic = mail_to44089__delegate;
return mail_to44089;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to44089);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list44094 = (function unordered_list44094(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$829,(function (){var iter__4268__auto__ = (function iter__44099(s__44100){return (new cljs.core.LazySeq(null,(function (){var s__44100__$1 = s__44100;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44100__$1);if(temp__4126__auto__)
{var s__44100__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44100__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44100__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44102 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44101 = (0);while(true){
if((i__44101 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44101);cljs.core.chunk_append(b__44102,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,x], null));
{
var G__44103 = (i__44101 + (1));
i__44101 = G__44103;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44102),iter__44099(cljs.core.chunk_rest(s__44100__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44102),null);
}
} else
{var x = cljs.core.first(s__44100__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,x], null),iter__44099(cljs.core.rest(s__44100__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list44094);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list44104 = (function ordered_list44104(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$831,(function (){var iter__4268__auto__ = (function iter__44109(s__44110){return (new cljs.core.LazySeq(null,(function (){var s__44110__$1 = s__44110;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44110__$1);if(temp__4126__auto__)
{var s__44110__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44110__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44110__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44112 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44111 = (0);while(true){
if((i__44111 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44111);cljs.core.chunk_append(b__44112,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,x], null));
{
var G__44113 = (i__44111 + (1));
i__44111 = G__44113;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44112),iter__44109(cljs.core.chunk_rest(s__44110__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44112),null);
}
} else
{var x = cljs.core.first(s__44110__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,x], null),iter__44109(cljs.core.rest(s__44110__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list44104);
/**
* Create an image element.
*/
sablono.core.image44114 = (function() {
var image44114 = null;
var image44114__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$832,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$833,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image44114__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$832,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$833,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$834,alt], null)], null);
});
image44114 = function(src,alt){
switch(arguments.length){
case 1:
return image44114__1.call(this,src);
case 2:
return image44114__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image44114.cljs$core$IFn$_invoke$arity$1 = image44114__1;
image44114.cljs$core$IFn$_invoke$arity$2 = image44114__2;
return image44114;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image44114);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__44115_SHARP_,p2__44116_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44115_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__44116_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__44117_SHARP_,p2__44118_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44117_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__44118_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$824,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$805,type,cljs.core.constant$keyword$835,sablono.core.make_name(name),cljs.core.constant$keyword$807,sablono.core.make_id(name),cljs.core.constant$keyword$836,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field44119 = (function() {
var color_field44119 = null;
var color_field44119__1 = (function (name__10461__auto__){return color_field44119.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var color_field44119__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10461__auto__,value__10462__auto__);
});
color_field44119 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return color_field44119__1.call(this,name__10461__auto__);
case 2:
return color_field44119__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field44119.cljs$core$IFn$_invoke$arity$1 = color_field44119__1;
color_field44119.cljs$core$IFn$_invoke$arity$2 = color_field44119__2;
return color_field44119;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field44119);
/**
* Creates a date input field.
*/
sablono.core.date_field44120 = (function() {
var date_field44120 = null;
var date_field44120__1 = (function (name__10461__auto__){return date_field44120.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var date_field44120__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10461__auto__,value__10462__auto__);
});
date_field44120 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return date_field44120__1.call(this,name__10461__auto__);
case 2:
return date_field44120__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field44120.cljs$core$IFn$_invoke$arity$1 = date_field44120__1;
date_field44120.cljs$core$IFn$_invoke$arity$2 = date_field44120__2;
return date_field44120;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field44120);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field44121 = (function() {
var datetime_field44121 = null;
var datetime_field44121__1 = (function (name__10461__auto__){return datetime_field44121.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var datetime_field44121__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10461__auto__,value__10462__auto__);
});
datetime_field44121 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return datetime_field44121__1.call(this,name__10461__auto__);
case 2:
return datetime_field44121__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field44121.cljs$core$IFn$_invoke$arity$1 = datetime_field44121__1;
datetime_field44121.cljs$core$IFn$_invoke$arity$2 = datetime_field44121__2;
return datetime_field44121;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field44121);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field44122 = (function() {
var datetime_local_field44122 = null;
var datetime_local_field44122__1 = (function (name__10461__auto__){return datetime_local_field44122.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var datetime_local_field44122__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10461__auto__,value__10462__auto__);
});
datetime_local_field44122 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return datetime_local_field44122__1.call(this,name__10461__auto__);
case 2:
return datetime_local_field44122__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field44122.cljs$core$IFn$_invoke$arity$1 = datetime_local_field44122__1;
datetime_local_field44122.cljs$core$IFn$_invoke$arity$2 = datetime_local_field44122__2;
return datetime_local_field44122;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field44122);
/**
* Creates a email input field.
*/
sablono.core.email_field44123 = (function() {
var email_field44123 = null;
var email_field44123__1 = (function (name__10461__auto__){return email_field44123.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var email_field44123__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10461__auto__,value__10462__auto__);
});
email_field44123 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return email_field44123__1.call(this,name__10461__auto__);
case 2:
return email_field44123__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field44123.cljs$core$IFn$_invoke$arity$1 = email_field44123__1;
email_field44123.cljs$core$IFn$_invoke$arity$2 = email_field44123__2;
return email_field44123;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field44123);
/**
* Creates a file input field.
*/
sablono.core.file_field44124 = (function() {
var file_field44124 = null;
var file_field44124__1 = (function (name__10461__auto__){return file_field44124.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var file_field44124__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10461__auto__,value__10462__auto__);
});
file_field44124 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return file_field44124__1.call(this,name__10461__auto__);
case 2:
return file_field44124__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field44124.cljs$core$IFn$_invoke$arity$1 = file_field44124__1;
file_field44124.cljs$core$IFn$_invoke$arity$2 = file_field44124__2;
return file_field44124;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field44124);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field44125 = (function() {
var hidden_field44125 = null;
var hidden_field44125__1 = (function (name__10461__auto__){return hidden_field44125.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var hidden_field44125__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10461__auto__,value__10462__auto__);
});
hidden_field44125 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return hidden_field44125__1.call(this,name__10461__auto__);
case 2:
return hidden_field44125__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field44125.cljs$core$IFn$_invoke$arity$1 = hidden_field44125__1;
hidden_field44125.cljs$core$IFn$_invoke$arity$2 = hidden_field44125__2;
return hidden_field44125;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field44125);
/**
* Creates a month input field.
*/
sablono.core.month_field44126 = (function() {
var month_field44126 = null;
var month_field44126__1 = (function (name__10461__auto__){return month_field44126.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var month_field44126__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10461__auto__,value__10462__auto__);
});
month_field44126 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return month_field44126__1.call(this,name__10461__auto__);
case 2:
return month_field44126__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field44126.cljs$core$IFn$_invoke$arity$1 = month_field44126__1;
month_field44126.cljs$core$IFn$_invoke$arity$2 = month_field44126__2;
return month_field44126;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field44126);
/**
* Creates a number input field.
*/
sablono.core.number_field44127 = (function() {
var number_field44127 = null;
var number_field44127__1 = (function (name__10461__auto__){return number_field44127.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var number_field44127__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10461__auto__,value__10462__auto__);
});
number_field44127 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return number_field44127__1.call(this,name__10461__auto__);
case 2:
return number_field44127__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field44127.cljs$core$IFn$_invoke$arity$1 = number_field44127__1;
number_field44127.cljs$core$IFn$_invoke$arity$2 = number_field44127__2;
return number_field44127;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field44127);
/**
* Creates a password input field.
*/
sablono.core.password_field44128 = (function() {
var password_field44128 = null;
var password_field44128__1 = (function (name__10461__auto__){return password_field44128.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var password_field44128__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10461__auto__,value__10462__auto__);
});
password_field44128 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return password_field44128__1.call(this,name__10461__auto__);
case 2:
return password_field44128__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field44128.cljs$core$IFn$_invoke$arity$1 = password_field44128__1;
password_field44128.cljs$core$IFn$_invoke$arity$2 = password_field44128__2;
return password_field44128;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field44128);
/**
* Creates a range input field.
*/
sablono.core.range_field44129 = (function() {
var range_field44129 = null;
var range_field44129__1 = (function (name__10461__auto__){return range_field44129.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var range_field44129__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10461__auto__,value__10462__auto__);
});
range_field44129 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return range_field44129__1.call(this,name__10461__auto__);
case 2:
return range_field44129__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field44129.cljs$core$IFn$_invoke$arity$1 = range_field44129__1;
range_field44129.cljs$core$IFn$_invoke$arity$2 = range_field44129__2;
return range_field44129;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field44129);
/**
* Creates a search input field.
*/
sablono.core.search_field44130 = (function() {
var search_field44130 = null;
var search_field44130__1 = (function (name__10461__auto__){return search_field44130.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var search_field44130__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10461__auto__,value__10462__auto__);
});
search_field44130 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return search_field44130__1.call(this,name__10461__auto__);
case 2:
return search_field44130__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field44130.cljs$core$IFn$_invoke$arity$1 = search_field44130__1;
search_field44130.cljs$core$IFn$_invoke$arity$2 = search_field44130__2;
return search_field44130;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field44130);
/**
* Creates a tel input field.
*/
sablono.core.tel_field44131 = (function() {
var tel_field44131 = null;
var tel_field44131__1 = (function (name__10461__auto__){return tel_field44131.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var tel_field44131__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10461__auto__,value__10462__auto__);
});
tel_field44131 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return tel_field44131__1.call(this,name__10461__auto__);
case 2:
return tel_field44131__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field44131.cljs$core$IFn$_invoke$arity$1 = tel_field44131__1;
tel_field44131.cljs$core$IFn$_invoke$arity$2 = tel_field44131__2;
return tel_field44131;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field44131);
/**
* Creates a text input field.
*/
sablono.core.text_field44132 = (function() {
var text_field44132 = null;
var text_field44132__1 = (function (name__10461__auto__){return text_field44132.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var text_field44132__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10461__auto__,value__10462__auto__);
});
text_field44132 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return text_field44132__1.call(this,name__10461__auto__);
case 2:
return text_field44132__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field44132.cljs$core$IFn$_invoke$arity$1 = text_field44132__1;
text_field44132.cljs$core$IFn$_invoke$arity$2 = text_field44132__2;
return text_field44132;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field44132);
/**
* Creates a time input field.
*/
sablono.core.time_field44133 = (function() {
var time_field44133 = null;
var time_field44133__1 = (function (name__10461__auto__){return time_field44133.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var time_field44133__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10461__auto__,value__10462__auto__);
});
time_field44133 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return time_field44133__1.call(this,name__10461__auto__);
case 2:
return time_field44133__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field44133.cljs$core$IFn$_invoke$arity$1 = time_field44133__1;
time_field44133.cljs$core$IFn$_invoke$arity$2 = time_field44133__2;
return time_field44133;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field44133);
/**
* Creates a url input field.
*/
sablono.core.url_field44134 = (function() {
var url_field44134 = null;
var url_field44134__1 = (function (name__10461__auto__){return url_field44134.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var url_field44134__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10461__auto__,value__10462__auto__);
});
url_field44134 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return url_field44134__1.call(this,name__10461__auto__);
case 2:
return url_field44134__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field44134.cljs$core$IFn$_invoke$arity$1 = url_field44134__1;
url_field44134.cljs$core$IFn$_invoke$arity$2 = url_field44134__2;
return url_field44134;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field44134);
/**
* Creates a week input field.
*/
sablono.core.week_field44135 = (function() {
var week_field44135 = null;
var week_field44135__1 = (function (name__10461__auto__){return week_field44135.cljs$core$IFn$_invoke$arity$2(name__10461__auto__,null);
});
var week_field44135__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10461__auto__,value__10462__auto__);
});
week_field44135 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return week_field44135__1.call(this,name__10461__auto__);
case 2:
return week_field44135__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field44135.cljs$core$IFn$_invoke$arity$1 = week_field44135__1;
week_field44135.cljs$core$IFn$_invoke$arity$2 = week_field44135__2;
return week_field44135;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field44135);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box44136 = (function() {
var check_box44136 = null;
var check_box44136__1 = (function (name){return check_box44136.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box44136__2 = (function (name,checked_QMARK_){return check_box44136.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box44136__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$824,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$805,"checkbox",cljs.core.constant$keyword$835,sablono.core.make_name(name),cljs.core.constant$keyword$807,sablono.core.make_id(name),cljs.core.constant$keyword$836,value,cljs.core.constant$keyword$837,checked_QMARK_], null)], null);
});
check_box44136 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box44136__1.call(this,name);
case 2:
return check_box44136__2.call(this,name,checked_QMARK_);
case 3:
return check_box44136__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box44136.cljs$core$IFn$_invoke$arity$1 = check_box44136__1;
check_box44136.cljs$core$IFn$_invoke$arity$2 = check_box44136__2;
check_box44136.cljs$core$IFn$_invoke$arity$3 = check_box44136__3;
return check_box44136;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box44136);
/**
* Creates a radio button.
*/
sablono.core.radio_button44137 = (function() {
var radio_button44137 = null;
var radio_button44137__1 = (function (group){return radio_button44137.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button44137__2 = (function (group,checked_QMARK_){return radio_button44137.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button44137__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$824,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$805,"radio",cljs.core.constant$keyword$835,sablono.core.make_name(group),cljs.core.constant$keyword$807,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$836,value,cljs.core.constant$keyword$837,checked_QMARK_], null)], null);
});
radio_button44137 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button44137__1.call(this,group);
case 2:
return radio_button44137__2.call(this,group,checked_QMARK_);
case 3:
return radio_button44137__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button44137.cljs$core$IFn$_invoke$arity$1 = radio_button44137__1;
radio_button44137.cljs$core$IFn$_invoke$arity$2 = radio_button44137__2;
radio_button44137.cljs$core$IFn$_invoke$arity$3 = radio_button44137__3;
return radio_button44137;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button44137);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options44138 = (function() {
var select_options44138 = null;
var select_options44138__1 = (function (coll){return select_options44138.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options44138__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__44147(s__44148){return (new cljs.core.LazySeq(null,(function (){var s__44148__$1 = s__44148;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44148__$1);if(temp__4126__auto__)
{var s__44148__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44148__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44148__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44150 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44149 = (0);while(true){
if((i__44149 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44149);cljs.core.chunk_append(b__44150,((cljs.core.sequential_QMARK_(x))?(function (){var vec__44153 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44153,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44153,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44153,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$838,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$839,text], null),select_options44138.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$840,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$836,val,cljs.core.constant$keyword$841,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$842,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$840,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$841,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__44155 = (i__44149 + (1));
i__44149 = G__44155;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44150),iter__44147(cljs.core.chunk_rest(s__44148__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44150),null);
}
} else
{var x = cljs.core.first(s__44148__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__44154 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44154,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44154,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44154,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$838,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$839,text], null),select_options44138.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$840,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$836,val,cljs.core.constant$keyword$841,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$842,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$840,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$841,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__44147(cljs.core.rest(s__44148__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
});
select_options44138 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options44138__1.call(this,coll);
case 2:
return select_options44138__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options44138.cljs$core$IFn$_invoke$arity$1 = select_options44138__1;
select_options44138.cljs$core$IFn$_invoke$arity$2 = select_options44138__2;
return select_options44138;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options44138);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down44156 = (function() {
var drop_down44156 = null;
var drop_down44156__2 = (function (name,options){return drop_down44156.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down44156__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$843,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$835,sablono.core.make_name(name),cljs.core.constant$keyword$807,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down44156 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down44156__2.call(this,name,options);
case 3:
return drop_down44156__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down44156.cljs$core$IFn$_invoke$arity$2 = drop_down44156__2;
drop_down44156.cljs$core$IFn$_invoke$arity$3 = drop_down44156__3;
return drop_down44156;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down44156);
/**
* Creates a text area element.
*/
sablono.core.text_area44157 = (function() {
var text_area44157 = null;
var text_area44157__1 = (function (name){return text_area44157.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area44157__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$823,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$835,sablono.core.make_name(name),cljs.core.constant$keyword$807,sablono.core.make_id(name),cljs.core.constant$keyword$836,value], null)], null);
});
text_area44157 = function(name,value){
switch(arguments.length){
case 1:
return text_area44157__1.call(this,name);
case 2:
return text_area44157__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area44157.cljs$core$IFn$_invoke$arity$1 = text_area44157__1;
text_area44157.cljs$core$IFn$_invoke$arity$2 = text_area44157__2;
return text_area44157;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area44157);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label44158 = (function label44158(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$839,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$821,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label44158);
/**
* Creates a submit button.
*/
sablono.core.submit_button44159 = (function submit_button44159(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$824,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$805,"submit",cljs.core.constant$keyword$836,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button44159);
/**
* Creates a form reset button.
*/
sablono.core.reset_button44160 = (function reset_button44160(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$824,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$805,"reset",cljs.core.constant$keyword$836,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button44160);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to44161 = (function() { 
var form_to44161__delegate = function (p__44162,body){var vec__44164 = p__44162;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44164,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44164,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$844,null,cljs.core.constant$keyword$845,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$846,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$788,method_str,cljs.core.constant$keyword$847,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$846,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$788,"POST",cljs.core.constant$keyword$847,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to44161 = function (p__44162,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to44161__delegate.call(this,p__44162,body);};
form_to44161.cljs$lang$maxFixedArity = 1;
form_to44161.cljs$lang$applyTo = (function (arglist__44165){
var p__44162 = cljs.core.first(arglist__44165);
var body = cljs.core.rest(arglist__44165);
return form_to44161__delegate(p__44162,body);
});
form_to44161.cljs$core$IFn$_invoke$arity$variadic = form_to44161__delegate;
return form_to44161;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to44161);
