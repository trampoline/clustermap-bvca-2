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
var G__43206__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__43205 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43205,(0),null);var body = cljs.core.nthnext(vec__43205,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__43206 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__43206__delegate.call(this,args);};
G__43206.cljs$lang$maxFixedArity = 0;
G__43206.cljs$lang$applyTo = (function (arglist__43207){
var args = cljs.core.seq(arglist__43207);
return G__43206__delegate(args);
});
G__43206.cljs$core$IFn$_invoke$arity$variadic = G__43206__delegate;
return G__43206;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4266__auto__ = (function iter__43212(s__43213){return (new cljs.core.LazySeq(null,(function (){var s__43213__$1 = s__43213;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43213__$1);if(temp__4126__auto__)
{var s__43213__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43213__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__43213__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__43215 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__43214 = (0);while(true){
if((i__43214 < size__4265__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__43214);cljs.core.chunk_append(b__43215,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__43216 = (i__43214 + (1));
i__43214 = G__43216;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43215),iter__43212(cljs.core.chunk_rest(s__43213__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43215),null);
}
} else
{var args = cljs.core.first(s__43213__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__43212(cljs.core.rest(s__43213__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__4266__auto__ = (function iter__43221(s__43222){return (new cljs.core.LazySeq(null,(function (){var s__43222__$1 = s__43222;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43222__$1);if(temp__4126__auto__)
{var s__43222__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43222__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__43222__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__43224 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__43223 = (0);while(true){
if((i__43223 < size__4265__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__43223);cljs.core.chunk_append(b__43224,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$842,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$822,"text/css",cljs.core.constant$keyword$843,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$844,"stylesheet"], null)], null));
{
var G__43225 = (i__43223 + (1));
i__43223 = G__43225;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43224),iter__43221(cljs.core.chunk_rest(s__43222__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43224),null);
}
} else
{var style = cljs.core.first(s__43222__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$842,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$822,"text/css",cljs.core.constant$keyword$843,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$844,"stylesheet"], null)], null),iter__43221(cljs.core.rest(s__43222__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__43226){
var styles = cljs.core.seq(arglist__43226);
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
sablono.core.link_to43227 = (function() { 
var link_to43227__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$843,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to43227 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to43227__delegate.call(this,url,content);};
link_to43227.cljs$lang$maxFixedArity = 1;
link_to43227.cljs$lang$applyTo = (function (arglist__43228){
var url = cljs.core.first(arglist__43228);
var content = cljs.core.rest(arglist__43228);
return link_to43227__delegate(url,content);
});
link_to43227.cljs$core$IFn$_invoke$arity$variadic = link_to43227__delegate;
return link_to43227;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to43227);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to43229 = (function() { 
var mail_to43229__delegate = function (e_mail,p__43230){var vec__43232 = p__43230;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43232,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$843,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3541__auto__ = content;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to43229 = function (e_mail,var_args){
var p__43230 = null;if (arguments.length > 1) {
  p__43230 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to43229__delegate.call(this,e_mail,p__43230);};
mail_to43229.cljs$lang$maxFixedArity = 1;
mail_to43229.cljs$lang$applyTo = (function (arglist__43233){
var e_mail = cljs.core.first(arglist__43233);
var p__43230 = cljs.core.rest(arglist__43233);
return mail_to43229__delegate(e_mail,p__43230);
});
mail_to43229.cljs$core$IFn$_invoke$arity$variadic = mail_to43229__delegate;
return mail_to43229;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to43229);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list43234 = (function unordered_list43234(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$846,(function (){var iter__4266__auto__ = (function iter__43239(s__43240){return (new cljs.core.LazySeq(null,(function (){var s__43240__$1 = s__43240;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43240__$1);if(temp__4126__auto__)
{var s__43240__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43240__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__43240__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__43242 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__43241 = (0);while(true){
if((i__43241 < size__4265__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__43241);cljs.core.chunk_append(b__43242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$847,x], null));
{
var G__43243 = (i__43241 + (1));
i__43241 = G__43243;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43242),iter__43239(cljs.core.chunk_rest(s__43240__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43242),null);
}
} else
{var x = cljs.core.first(s__43240__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$847,x], null),iter__43239(cljs.core.rest(s__43240__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list43234);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list43244 = (function ordered_list43244(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,(function (){var iter__4266__auto__ = (function iter__43249(s__43250){return (new cljs.core.LazySeq(null,(function (){var s__43250__$1 = s__43250;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43250__$1);if(temp__4126__auto__)
{var s__43250__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43250__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__43250__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__43252 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__43251 = (0);while(true){
if((i__43251 < size__4265__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__43251);cljs.core.chunk_append(b__43252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$847,x], null));
{
var G__43253 = (i__43251 + (1));
i__43251 = G__43253;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43252),iter__43249(cljs.core.chunk_rest(s__43250__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43252),null);
}
} else
{var x = cljs.core.first(s__43250__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$847,x], null),iter__43249(cljs.core.rest(s__43250__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list43244);
/**
* Create an image element.
*/
sablono.core.image43254 = (function() {
var image43254 = null;
var image43254__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$850,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image43254__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$850,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$851,alt], null)], null);
});
image43254 = function(src,alt){
switch(arguments.length){
case 1:
return image43254__1.call(this,src);
case 2:
return image43254__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image43254.cljs$core$IFn$_invoke$arity$1 = image43254__1;
image43254.cljs$core$IFn$_invoke$arity$2 = image43254__2;
return image43254;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image43254);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__43255_SHARP_,p2__43256_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43255_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__43256_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__43257_SHARP_,p2__43258_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43257_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__43258_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$822,type,cljs.core.constant$keyword$852,sablono.core.make_name(name),cljs.core.constant$keyword$824,sablono.core.make_id(name),cljs.core.constant$keyword$853,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field43259 = (function() {
var color_field43259 = null;
var color_field43259__1 = (function (name__10244__auto__){return color_field43259.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var color_field43259__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10244__auto__,value__10245__auto__);
});
color_field43259 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return color_field43259__1.call(this,name__10244__auto__);
case 2:
return color_field43259__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field43259.cljs$core$IFn$_invoke$arity$1 = color_field43259__1;
color_field43259.cljs$core$IFn$_invoke$arity$2 = color_field43259__2;
return color_field43259;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field43259);
/**
* Creates a date input field.
*/
sablono.core.date_field43260 = (function() {
var date_field43260 = null;
var date_field43260__1 = (function (name__10244__auto__){return date_field43260.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var date_field43260__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10244__auto__,value__10245__auto__);
});
date_field43260 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return date_field43260__1.call(this,name__10244__auto__);
case 2:
return date_field43260__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field43260.cljs$core$IFn$_invoke$arity$1 = date_field43260__1;
date_field43260.cljs$core$IFn$_invoke$arity$2 = date_field43260__2;
return date_field43260;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field43260);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field43261 = (function() {
var datetime_field43261 = null;
var datetime_field43261__1 = (function (name__10244__auto__){return datetime_field43261.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var datetime_field43261__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10244__auto__,value__10245__auto__);
});
datetime_field43261 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return datetime_field43261__1.call(this,name__10244__auto__);
case 2:
return datetime_field43261__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field43261.cljs$core$IFn$_invoke$arity$1 = datetime_field43261__1;
datetime_field43261.cljs$core$IFn$_invoke$arity$2 = datetime_field43261__2;
return datetime_field43261;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field43261);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field43262 = (function() {
var datetime_local_field43262 = null;
var datetime_local_field43262__1 = (function (name__10244__auto__){return datetime_local_field43262.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var datetime_local_field43262__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10244__auto__,value__10245__auto__);
});
datetime_local_field43262 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return datetime_local_field43262__1.call(this,name__10244__auto__);
case 2:
return datetime_local_field43262__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field43262.cljs$core$IFn$_invoke$arity$1 = datetime_local_field43262__1;
datetime_local_field43262.cljs$core$IFn$_invoke$arity$2 = datetime_local_field43262__2;
return datetime_local_field43262;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field43262);
/**
* Creates a email input field.
*/
sablono.core.email_field43263 = (function() {
var email_field43263 = null;
var email_field43263__1 = (function (name__10244__auto__){return email_field43263.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var email_field43263__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10244__auto__,value__10245__auto__);
});
email_field43263 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return email_field43263__1.call(this,name__10244__auto__);
case 2:
return email_field43263__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field43263.cljs$core$IFn$_invoke$arity$1 = email_field43263__1;
email_field43263.cljs$core$IFn$_invoke$arity$2 = email_field43263__2;
return email_field43263;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field43263);
/**
* Creates a file input field.
*/
sablono.core.file_field43264 = (function() {
var file_field43264 = null;
var file_field43264__1 = (function (name__10244__auto__){return file_field43264.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var file_field43264__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10244__auto__,value__10245__auto__);
});
file_field43264 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return file_field43264__1.call(this,name__10244__auto__);
case 2:
return file_field43264__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field43264.cljs$core$IFn$_invoke$arity$1 = file_field43264__1;
file_field43264.cljs$core$IFn$_invoke$arity$2 = file_field43264__2;
return file_field43264;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field43264);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field43265 = (function() {
var hidden_field43265 = null;
var hidden_field43265__1 = (function (name__10244__auto__){return hidden_field43265.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var hidden_field43265__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10244__auto__,value__10245__auto__);
});
hidden_field43265 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return hidden_field43265__1.call(this,name__10244__auto__);
case 2:
return hidden_field43265__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field43265.cljs$core$IFn$_invoke$arity$1 = hidden_field43265__1;
hidden_field43265.cljs$core$IFn$_invoke$arity$2 = hidden_field43265__2;
return hidden_field43265;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field43265);
/**
* Creates a month input field.
*/
sablono.core.month_field43266 = (function() {
var month_field43266 = null;
var month_field43266__1 = (function (name__10244__auto__){return month_field43266.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var month_field43266__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10244__auto__,value__10245__auto__);
});
month_field43266 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return month_field43266__1.call(this,name__10244__auto__);
case 2:
return month_field43266__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field43266.cljs$core$IFn$_invoke$arity$1 = month_field43266__1;
month_field43266.cljs$core$IFn$_invoke$arity$2 = month_field43266__2;
return month_field43266;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field43266);
/**
* Creates a number input field.
*/
sablono.core.number_field43267 = (function() {
var number_field43267 = null;
var number_field43267__1 = (function (name__10244__auto__){return number_field43267.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var number_field43267__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10244__auto__,value__10245__auto__);
});
number_field43267 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return number_field43267__1.call(this,name__10244__auto__);
case 2:
return number_field43267__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field43267.cljs$core$IFn$_invoke$arity$1 = number_field43267__1;
number_field43267.cljs$core$IFn$_invoke$arity$2 = number_field43267__2;
return number_field43267;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field43267);
/**
* Creates a password input field.
*/
sablono.core.password_field43268 = (function() {
var password_field43268 = null;
var password_field43268__1 = (function (name__10244__auto__){return password_field43268.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var password_field43268__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10244__auto__,value__10245__auto__);
});
password_field43268 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return password_field43268__1.call(this,name__10244__auto__);
case 2:
return password_field43268__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field43268.cljs$core$IFn$_invoke$arity$1 = password_field43268__1;
password_field43268.cljs$core$IFn$_invoke$arity$2 = password_field43268__2;
return password_field43268;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field43268);
/**
* Creates a range input field.
*/
sablono.core.range_field43269 = (function() {
var range_field43269 = null;
var range_field43269__1 = (function (name__10244__auto__){return range_field43269.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var range_field43269__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10244__auto__,value__10245__auto__);
});
range_field43269 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return range_field43269__1.call(this,name__10244__auto__);
case 2:
return range_field43269__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field43269.cljs$core$IFn$_invoke$arity$1 = range_field43269__1;
range_field43269.cljs$core$IFn$_invoke$arity$2 = range_field43269__2;
return range_field43269;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field43269);
/**
* Creates a search input field.
*/
sablono.core.search_field43270 = (function() {
var search_field43270 = null;
var search_field43270__1 = (function (name__10244__auto__){return search_field43270.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var search_field43270__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10244__auto__,value__10245__auto__);
});
search_field43270 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return search_field43270__1.call(this,name__10244__auto__);
case 2:
return search_field43270__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field43270.cljs$core$IFn$_invoke$arity$1 = search_field43270__1;
search_field43270.cljs$core$IFn$_invoke$arity$2 = search_field43270__2;
return search_field43270;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field43270);
/**
* Creates a tel input field.
*/
sablono.core.tel_field43271 = (function() {
var tel_field43271 = null;
var tel_field43271__1 = (function (name__10244__auto__){return tel_field43271.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var tel_field43271__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10244__auto__,value__10245__auto__);
});
tel_field43271 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return tel_field43271__1.call(this,name__10244__auto__);
case 2:
return tel_field43271__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field43271.cljs$core$IFn$_invoke$arity$1 = tel_field43271__1;
tel_field43271.cljs$core$IFn$_invoke$arity$2 = tel_field43271__2;
return tel_field43271;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field43271);
/**
* Creates a text input field.
*/
sablono.core.text_field43272 = (function() {
var text_field43272 = null;
var text_field43272__1 = (function (name__10244__auto__){return text_field43272.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var text_field43272__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10244__auto__,value__10245__auto__);
});
text_field43272 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return text_field43272__1.call(this,name__10244__auto__);
case 2:
return text_field43272__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field43272.cljs$core$IFn$_invoke$arity$1 = text_field43272__1;
text_field43272.cljs$core$IFn$_invoke$arity$2 = text_field43272__2;
return text_field43272;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field43272);
/**
* Creates a time input field.
*/
sablono.core.time_field43273 = (function() {
var time_field43273 = null;
var time_field43273__1 = (function (name__10244__auto__){return time_field43273.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var time_field43273__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10244__auto__,value__10245__auto__);
});
time_field43273 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return time_field43273__1.call(this,name__10244__auto__);
case 2:
return time_field43273__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field43273.cljs$core$IFn$_invoke$arity$1 = time_field43273__1;
time_field43273.cljs$core$IFn$_invoke$arity$2 = time_field43273__2;
return time_field43273;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field43273);
/**
* Creates a url input field.
*/
sablono.core.url_field43274 = (function() {
var url_field43274 = null;
var url_field43274__1 = (function (name__10244__auto__){return url_field43274.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var url_field43274__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10244__auto__,value__10245__auto__);
});
url_field43274 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return url_field43274__1.call(this,name__10244__auto__);
case 2:
return url_field43274__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field43274.cljs$core$IFn$_invoke$arity$1 = url_field43274__1;
url_field43274.cljs$core$IFn$_invoke$arity$2 = url_field43274__2;
return url_field43274;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field43274);
/**
* Creates a week input field.
*/
sablono.core.week_field43275 = (function() {
var week_field43275 = null;
var week_field43275__1 = (function (name__10244__auto__){return week_field43275.cljs$core$IFn$_invoke$arity$2(name__10244__auto__,null);
});
var week_field43275__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10244__auto__,value__10245__auto__);
});
week_field43275 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return week_field43275__1.call(this,name__10244__auto__);
case 2:
return week_field43275__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field43275.cljs$core$IFn$_invoke$arity$1 = week_field43275__1;
week_field43275.cljs$core$IFn$_invoke$arity$2 = week_field43275__2;
return week_field43275;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field43275);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box43276 = (function() {
var check_box43276 = null;
var check_box43276__1 = (function (name){return check_box43276.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box43276__2 = (function (name,checked_QMARK_){return check_box43276.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box43276__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$822,"checkbox",cljs.core.constant$keyword$852,sablono.core.make_name(name),cljs.core.constant$keyword$824,sablono.core.make_id(name),cljs.core.constant$keyword$853,value,cljs.core.constant$keyword$854,checked_QMARK_], null)], null);
});
check_box43276 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box43276__1.call(this,name);
case 2:
return check_box43276__2.call(this,name,checked_QMARK_);
case 3:
return check_box43276__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box43276.cljs$core$IFn$_invoke$arity$1 = check_box43276__1;
check_box43276.cljs$core$IFn$_invoke$arity$2 = check_box43276__2;
check_box43276.cljs$core$IFn$_invoke$arity$3 = check_box43276__3;
return check_box43276;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box43276);
/**
* Creates a radio button.
*/
sablono.core.radio_button43277 = (function() {
var radio_button43277 = null;
var radio_button43277__1 = (function (group){return radio_button43277.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button43277__2 = (function (group,checked_QMARK_){return radio_button43277.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button43277__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$822,"radio",cljs.core.constant$keyword$852,sablono.core.make_name(group),cljs.core.constant$keyword$824,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$853,value,cljs.core.constant$keyword$854,checked_QMARK_], null)], null);
});
radio_button43277 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button43277__1.call(this,group);
case 2:
return radio_button43277__2.call(this,group,checked_QMARK_);
case 3:
return radio_button43277__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button43277.cljs$core$IFn$_invoke$arity$1 = radio_button43277__1;
radio_button43277.cljs$core$IFn$_invoke$arity$2 = radio_button43277__2;
radio_button43277.cljs$core$IFn$_invoke$arity$3 = radio_button43277__3;
return radio_button43277;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button43277);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options43278 = (function() {
var select_options43278 = null;
var select_options43278__1 = (function (coll){return select_options43278.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options43278__2 = (function (coll,selected){var iter__4266__auto__ = (function iter__43287(s__43288){return (new cljs.core.LazySeq(null,(function (){var s__43288__$1 = s__43288;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43288__$1);if(temp__4126__auto__)
{var s__43288__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43288__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__43288__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__43290 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__43289 = (0);while(true){
if((i__43289 < size__4265__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__43289);cljs.core.chunk_append(b__43290,((cljs.core.sequential_QMARK_(x))?(function (){var vec__43293 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43293,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43293,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43293,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$855,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$856,text], null),select_options43278.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$857,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$853,val,cljs.core.constant$keyword$858,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$859,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$857,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$858,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__43295 = (i__43289 + (1));
i__43289 = G__43295;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43290),iter__43287(cljs.core.chunk_rest(s__43288__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43290),null);
}
} else
{var x = cljs.core.first(s__43288__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__43294 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43294,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43294,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43294,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$855,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$856,text], null),select_options43278.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$857,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$853,val,cljs.core.constant$keyword$858,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$859,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$857,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$858,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__43287(cljs.core.rest(s__43288__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(coll);
});
select_options43278 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options43278__1.call(this,coll);
case 2:
return select_options43278__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options43278.cljs$core$IFn$_invoke$arity$1 = select_options43278__1;
select_options43278.cljs$core$IFn$_invoke$arity$2 = select_options43278__2;
return select_options43278;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options43278);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down43296 = (function() {
var drop_down43296 = null;
var drop_down43296__2 = (function (name,options){return drop_down43296.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down43296__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$860,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$852,sablono.core.make_name(name),cljs.core.constant$keyword$824,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down43296 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down43296__2.call(this,name,options);
case 3:
return drop_down43296__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down43296.cljs$core$IFn$_invoke$arity$2 = drop_down43296__2;
drop_down43296.cljs$core$IFn$_invoke$arity$3 = drop_down43296__3;
return drop_down43296;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down43296);
/**
* Creates a text area element.
*/
sablono.core.text_area43297 = (function() {
var text_area43297 = null;
var text_area43297__1 = (function (name){return text_area43297.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area43297__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$840,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$852,sablono.core.make_name(name),cljs.core.constant$keyword$824,sablono.core.make_id(name),cljs.core.constant$keyword$853,value], null)], null);
});
text_area43297 = function(name,value){
switch(arguments.length){
case 1:
return text_area43297__1.call(this,name);
case 2:
return text_area43297__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area43297.cljs$core$IFn$_invoke$arity$1 = text_area43297__1;
text_area43297.cljs$core$IFn$_invoke$arity$2 = text_area43297__2;
return text_area43297;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area43297);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label43298 = (function label43298(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$856,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$838,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label43298);
/**
* Creates a submit button.
*/
sablono.core.submit_button43299 = (function submit_button43299(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$822,"submit",cljs.core.constant$keyword$853,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button43299);
/**
* Creates a form reset button.
*/
sablono.core.reset_button43300 = (function reset_button43300(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$822,"reset",cljs.core.constant$keyword$853,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button43300);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to43301 = (function() { 
var form_to43301__delegate = function (p__43302,body){var vec__43304 = p__43302;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43304,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43304,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$861,null,cljs.core.constant$keyword$862,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$863,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$802,method_str,cljs.core.constant$keyword$864,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$863,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$802,"POST",cljs.core.constant$keyword$864,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to43301 = function (p__43302,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to43301__delegate.call(this,p__43302,body);};
form_to43301.cljs$lang$maxFixedArity = 1;
form_to43301.cljs$lang$applyTo = (function (arglist__43305){
var p__43302 = cljs.core.first(arglist__43305);
var body = cljs.core.rest(arglist__43305);
return form_to43301__delegate(p__43302,body);
});
form_to43301.cljs$core$IFn$_invoke$arity$variadic = form_to43301__delegate;
return form_to43301;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to43301);
