// Compiled by ClojureScript 0.0-2356
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
var G__75863__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__75862 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75862,(0),null);var body = cljs.core.nthnext(vec__75862,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__75863 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__75863__delegate.call(this,args);};
G__75863.cljs$lang$maxFixedArity = 0;
G__75863.cljs$lang$applyTo = (function (arglist__75864){
var args = cljs.core.seq(arglist__75864);
return G__75863__delegate(args);
});
G__75863.cljs$core$IFn$_invoke$arity$variadic = G__75863__delegate;
return G__75863;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4375__auto__ = (function iter__75871(s__75872){return (new cljs.core.LazySeq(null,(function (){var s__75872__$1 = s__75872;while(true){
var temp__4126__auto__ = cljs.core.seq(s__75872__$1);if(temp__4126__auto__)
{var s__75872__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__75872__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__75872__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__75874 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__75873 = (0);while(true){
if((i__75873 < size__4374__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__75873);cljs.core.chunk_append(b__75874,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__75877 = (i__75873 + (1));
i__75873 = G__75877;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__75874),iter__75871(cljs.core.chunk_rest(s__75872__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__75874),null);
}
} else
{var args = cljs.core.first(s__75872__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__75871(cljs.core.rest(s__75872__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__4375__auto__ = (function iter__75884(s__75885){return (new cljs.core.LazySeq(null,(function (){var s__75885__$1 = s__75885;while(true){
var temp__4126__auto__ = cljs.core.seq(s__75885__$1);if(temp__4126__auto__)
{var s__75885__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__75885__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__75885__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__75887 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__75886 = (0);while(true){
if((i__75886 < size__4374__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__75886);cljs.core.chunk_append(b__75887,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1264,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1160,"text/css",cljs.core.constant$keyword$1265,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$1266,"stylesheet"], null)], null));
{
var G__75890 = (i__75886 + (1));
i__75886 = G__75890;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__75887),iter__75884(cljs.core.chunk_rest(s__75885__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__75887),null);
}
} else
{var style = cljs.core.first(s__75885__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1264,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1160,"text/css",cljs.core.constant$keyword$1265,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$1266,"stylesheet"], null)], null),iter__75884(cljs.core.rest(s__75885__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__75891){
var styles = cljs.core.seq(arglist__75891);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){var G__75896 = (function (){return goog.dom.getDocument();
})().body;var G__75897 = (function (){var G__75898 = "script";var G__75899 = {"src": src};return goog.dom.createDom(G__75898,G__75899);
})();return goog.dom.appendChild(G__75896,G__75897);
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
sablono.core.link_to75900 = (function() { 
var link_to75900__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1265,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to75900 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to75900__delegate.call(this,url,content);};
link_to75900.cljs$lang$maxFixedArity = 1;
link_to75900.cljs$lang$applyTo = (function (arglist__75901){
var url = cljs.core.first(arglist__75901);
var content = cljs.core.rest(arglist__75901);
return link_to75900__delegate(url,content);
});
link_to75900.cljs$core$IFn$_invoke$arity$variadic = link_to75900__delegate;
return link_to75900;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to75900);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to75902 = (function() { 
var mail_to75902__delegate = function (e_mail,p__75903){var vec__75905 = p__75903;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75905,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1265,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3637__auto__ = content;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to75902 = function (e_mail,var_args){
var p__75903 = null;if (arguments.length > 1) {
  p__75903 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to75902__delegate.call(this,e_mail,p__75903);};
mail_to75902.cljs$lang$maxFixedArity = 1;
mail_to75902.cljs$lang$applyTo = (function (arglist__75906){
var e_mail = cljs.core.first(arglist__75906);
var p__75903 = cljs.core.rest(arglist__75906);
return mail_to75902__delegate(e_mail,p__75903);
});
mail_to75902.cljs$core$IFn$_invoke$arity$variadic = mail_to75902__delegate;
return mail_to75902;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to75902);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list75907 = (function unordered_list75907(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1268,(function (){var iter__4375__auto__ = (function iter__75914(s__75915){return (new cljs.core.LazySeq(null,(function (){var s__75915__$1 = s__75915;while(true){
var temp__4126__auto__ = cljs.core.seq(s__75915__$1);if(temp__4126__auto__)
{var s__75915__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__75915__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__75915__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__75917 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__75916 = (0);while(true){
if((i__75916 < size__4374__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__75916);cljs.core.chunk_append(b__75917,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,x], null));
{
var G__75920 = (i__75916 + (1));
i__75916 = G__75920;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__75917),iter__75914(cljs.core.chunk_rest(s__75915__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__75917),null);
}
} else
{var x = cljs.core.first(s__75915__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,x], null),iter__75914(cljs.core.rest(s__75915__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list75907);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list75921 = (function ordered_list75921(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1270,(function (){var iter__4375__auto__ = (function iter__75928(s__75929){return (new cljs.core.LazySeq(null,(function (){var s__75929__$1 = s__75929;while(true){
var temp__4126__auto__ = cljs.core.seq(s__75929__$1);if(temp__4126__auto__)
{var s__75929__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__75929__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__75929__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__75931 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__75930 = (0);while(true){
if((i__75930 < size__4374__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__75930);cljs.core.chunk_append(b__75931,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,x], null));
{
var G__75934 = (i__75930 + (1));
i__75930 = G__75934;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__75931),iter__75928(cljs.core.chunk_rest(s__75929__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__75931),null);
}
} else
{var x = cljs.core.first(s__75929__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,x], null),iter__75928(cljs.core.rest(s__75929__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list75921);
/**
* Create an image element.
*/
sablono.core.image75935 = (function() {
var image75935 = null;
var image75935__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1271,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1272,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image75935__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1271,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1272,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$1273,alt], null)], null);
});
image75935 = function(src,alt){
switch(arguments.length){
case 1:
return image75935__1.call(this,src);
case 2:
return image75935__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image75935.cljs$core$IFn$_invoke$arity$1 = image75935__1;
image75935.cljs$core$IFn$_invoke$arity$2 = image75935__2;
return image75935;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image75935);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__75936_SHARP_,p2__75937_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__75936_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__75937_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__75938_SHARP_,p2__75939_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__75938_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__75939_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1263,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1160,type,cljs.core.constant$keyword$1274,sablono.core.make_name(name),cljs.core.constant$keyword$1162,sablono.core.make_id(name),cljs.core.constant$keyword$1275,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field75940 = (function() {
var color_field75940 = null;
var color_field75940__1 = (function (name__11139__auto__){return color_field75940.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var color_field75940__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__11139__auto__,value__11140__auto__);
});
color_field75940 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return color_field75940__1.call(this,name__11139__auto__);
case 2:
return color_field75940__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field75940.cljs$core$IFn$_invoke$arity$1 = color_field75940__1;
color_field75940.cljs$core$IFn$_invoke$arity$2 = color_field75940__2;
return color_field75940;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field75940);
/**
* Creates a date input field.
*/
sablono.core.date_field75943 = (function() {
var date_field75943 = null;
var date_field75943__1 = (function (name__11139__auto__){return date_field75943.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var date_field75943__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__11139__auto__,value__11140__auto__);
});
date_field75943 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return date_field75943__1.call(this,name__11139__auto__);
case 2:
return date_field75943__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field75943.cljs$core$IFn$_invoke$arity$1 = date_field75943__1;
date_field75943.cljs$core$IFn$_invoke$arity$2 = date_field75943__2;
return date_field75943;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field75943);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field75946 = (function() {
var datetime_field75946 = null;
var datetime_field75946__1 = (function (name__11139__auto__){return datetime_field75946.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var datetime_field75946__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__11139__auto__,value__11140__auto__);
});
datetime_field75946 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_field75946__1.call(this,name__11139__auto__);
case 2:
return datetime_field75946__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field75946.cljs$core$IFn$_invoke$arity$1 = datetime_field75946__1;
datetime_field75946.cljs$core$IFn$_invoke$arity$2 = datetime_field75946__2;
return datetime_field75946;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field75946);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field75949 = (function() {
var datetime_local_field75949 = null;
var datetime_local_field75949__1 = (function (name__11139__auto__){return datetime_local_field75949.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var datetime_local_field75949__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__11139__auto__,value__11140__auto__);
});
datetime_local_field75949 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_local_field75949__1.call(this,name__11139__auto__);
case 2:
return datetime_local_field75949__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field75949.cljs$core$IFn$_invoke$arity$1 = datetime_local_field75949__1;
datetime_local_field75949.cljs$core$IFn$_invoke$arity$2 = datetime_local_field75949__2;
return datetime_local_field75949;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field75949);
/**
* Creates a email input field.
*/
sablono.core.email_field75952 = (function() {
var email_field75952 = null;
var email_field75952__1 = (function (name__11139__auto__){return email_field75952.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var email_field75952__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__11139__auto__,value__11140__auto__);
});
email_field75952 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return email_field75952__1.call(this,name__11139__auto__);
case 2:
return email_field75952__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field75952.cljs$core$IFn$_invoke$arity$1 = email_field75952__1;
email_field75952.cljs$core$IFn$_invoke$arity$2 = email_field75952__2;
return email_field75952;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field75952);
/**
* Creates a file input field.
*/
sablono.core.file_field75955 = (function() {
var file_field75955 = null;
var file_field75955__1 = (function (name__11139__auto__){return file_field75955.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var file_field75955__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__11139__auto__,value__11140__auto__);
});
file_field75955 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return file_field75955__1.call(this,name__11139__auto__);
case 2:
return file_field75955__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field75955.cljs$core$IFn$_invoke$arity$1 = file_field75955__1;
file_field75955.cljs$core$IFn$_invoke$arity$2 = file_field75955__2;
return file_field75955;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field75955);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field75958 = (function() {
var hidden_field75958 = null;
var hidden_field75958__1 = (function (name__11139__auto__){return hidden_field75958.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var hidden_field75958__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__11139__auto__,value__11140__auto__);
});
hidden_field75958 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return hidden_field75958__1.call(this,name__11139__auto__);
case 2:
return hidden_field75958__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field75958.cljs$core$IFn$_invoke$arity$1 = hidden_field75958__1;
hidden_field75958.cljs$core$IFn$_invoke$arity$2 = hidden_field75958__2;
return hidden_field75958;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field75958);
/**
* Creates a month input field.
*/
sablono.core.month_field75961 = (function() {
var month_field75961 = null;
var month_field75961__1 = (function (name__11139__auto__){return month_field75961.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var month_field75961__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__11139__auto__,value__11140__auto__);
});
month_field75961 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return month_field75961__1.call(this,name__11139__auto__);
case 2:
return month_field75961__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field75961.cljs$core$IFn$_invoke$arity$1 = month_field75961__1;
month_field75961.cljs$core$IFn$_invoke$arity$2 = month_field75961__2;
return month_field75961;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field75961);
/**
* Creates a number input field.
*/
sablono.core.number_field75964 = (function() {
var number_field75964 = null;
var number_field75964__1 = (function (name__11139__auto__){return number_field75964.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var number_field75964__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__11139__auto__,value__11140__auto__);
});
number_field75964 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return number_field75964__1.call(this,name__11139__auto__);
case 2:
return number_field75964__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field75964.cljs$core$IFn$_invoke$arity$1 = number_field75964__1;
number_field75964.cljs$core$IFn$_invoke$arity$2 = number_field75964__2;
return number_field75964;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field75964);
/**
* Creates a password input field.
*/
sablono.core.password_field75967 = (function() {
var password_field75967 = null;
var password_field75967__1 = (function (name__11139__auto__){return password_field75967.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var password_field75967__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__11139__auto__,value__11140__auto__);
});
password_field75967 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return password_field75967__1.call(this,name__11139__auto__);
case 2:
return password_field75967__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field75967.cljs$core$IFn$_invoke$arity$1 = password_field75967__1;
password_field75967.cljs$core$IFn$_invoke$arity$2 = password_field75967__2;
return password_field75967;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field75967);
/**
* Creates a range input field.
*/
sablono.core.range_field75970 = (function() {
var range_field75970 = null;
var range_field75970__1 = (function (name__11139__auto__){return range_field75970.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var range_field75970__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__11139__auto__,value__11140__auto__);
});
range_field75970 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return range_field75970__1.call(this,name__11139__auto__);
case 2:
return range_field75970__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field75970.cljs$core$IFn$_invoke$arity$1 = range_field75970__1;
range_field75970.cljs$core$IFn$_invoke$arity$2 = range_field75970__2;
return range_field75970;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field75970);
/**
* Creates a search input field.
*/
sablono.core.search_field75973 = (function() {
var search_field75973 = null;
var search_field75973__1 = (function (name__11139__auto__){return search_field75973.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var search_field75973__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__11139__auto__,value__11140__auto__);
});
search_field75973 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return search_field75973__1.call(this,name__11139__auto__);
case 2:
return search_field75973__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field75973.cljs$core$IFn$_invoke$arity$1 = search_field75973__1;
search_field75973.cljs$core$IFn$_invoke$arity$2 = search_field75973__2;
return search_field75973;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field75973);
/**
* Creates a tel input field.
*/
sablono.core.tel_field75976 = (function() {
var tel_field75976 = null;
var tel_field75976__1 = (function (name__11139__auto__){return tel_field75976.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var tel_field75976__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__11139__auto__,value__11140__auto__);
});
tel_field75976 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return tel_field75976__1.call(this,name__11139__auto__);
case 2:
return tel_field75976__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field75976.cljs$core$IFn$_invoke$arity$1 = tel_field75976__1;
tel_field75976.cljs$core$IFn$_invoke$arity$2 = tel_field75976__2;
return tel_field75976;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field75976);
/**
* Creates a text input field.
*/
sablono.core.text_field75979 = (function() {
var text_field75979 = null;
var text_field75979__1 = (function (name__11139__auto__){return text_field75979.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var text_field75979__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__11139__auto__,value__11140__auto__);
});
text_field75979 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return text_field75979__1.call(this,name__11139__auto__);
case 2:
return text_field75979__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field75979.cljs$core$IFn$_invoke$arity$1 = text_field75979__1;
text_field75979.cljs$core$IFn$_invoke$arity$2 = text_field75979__2;
return text_field75979;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field75979);
/**
* Creates a time input field.
*/
sablono.core.time_field75982 = (function() {
var time_field75982 = null;
var time_field75982__1 = (function (name__11139__auto__){return time_field75982.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var time_field75982__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__11139__auto__,value__11140__auto__);
});
time_field75982 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return time_field75982__1.call(this,name__11139__auto__);
case 2:
return time_field75982__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field75982.cljs$core$IFn$_invoke$arity$1 = time_field75982__1;
time_field75982.cljs$core$IFn$_invoke$arity$2 = time_field75982__2;
return time_field75982;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field75982);
/**
* Creates a url input field.
*/
sablono.core.url_field75985 = (function() {
var url_field75985 = null;
var url_field75985__1 = (function (name__11139__auto__){return url_field75985.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var url_field75985__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__11139__auto__,value__11140__auto__);
});
url_field75985 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return url_field75985__1.call(this,name__11139__auto__);
case 2:
return url_field75985__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field75985.cljs$core$IFn$_invoke$arity$1 = url_field75985__1;
url_field75985.cljs$core$IFn$_invoke$arity$2 = url_field75985__2;
return url_field75985;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field75985);
/**
* Creates a week input field.
*/
sablono.core.week_field75988 = (function() {
var week_field75988 = null;
var week_field75988__1 = (function (name__11139__auto__){return week_field75988.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var week_field75988__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__11139__auto__,value__11140__auto__);
});
week_field75988 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return week_field75988__1.call(this,name__11139__auto__);
case 2:
return week_field75988__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field75988.cljs$core$IFn$_invoke$arity$1 = week_field75988__1;
week_field75988.cljs$core$IFn$_invoke$arity$2 = week_field75988__2;
return week_field75988;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field75988);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box75991 = (function() {
var check_box75991 = null;
var check_box75991__1 = (function (name){return check_box75991.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box75991__2 = (function (name,checked_QMARK_){return check_box75991.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box75991__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1263,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1160,"checkbox",cljs.core.constant$keyword$1274,sablono.core.make_name(name),cljs.core.constant$keyword$1162,sablono.core.make_id(name),cljs.core.constant$keyword$1275,value,cljs.core.constant$keyword$1276,checked_QMARK_], null)], null);
});
check_box75991 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box75991__1.call(this,name);
case 2:
return check_box75991__2.call(this,name,checked_QMARK_);
case 3:
return check_box75991__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box75991.cljs$core$IFn$_invoke$arity$1 = check_box75991__1;
check_box75991.cljs$core$IFn$_invoke$arity$2 = check_box75991__2;
check_box75991.cljs$core$IFn$_invoke$arity$3 = check_box75991__3;
return check_box75991;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box75991);
/**
* Creates a radio button.
*/
sablono.core.radio_button75997 = (function() {
var radio_button75997 = null;
var radio_button75997__1 = (function (group){return radio_button75997.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button75997__2 = (function (group,checked_QMARK_){return radio_button75997.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button75997__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1263,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1160,"radio",cljs.core.constant$keyword$1274,sablono.core.make_name(group),cljs.core.constant$keyword$1162,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$1275,value,cljs.core.constant$keyword$1276,checked_QMARK_], null)], null);
});
radio_button75997 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button75997__1.call(this,group);
case 2:
return radio_button75997__2.call(this,group,checked_QMARK_);
case 3:
return radio_button75997__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button75997.cljs$core$IFn$_invoke$arity$1 = radio_button75997__1;
radio_button75997.cljs$core$IFn$_invoke$arity$2 = radio_button75997__2;
radio_button75997.cljs$core$IFn$_invoke$arity$3 = radio_button75997__3;
return radio_button75997;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button75997);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options76003 = (function() {
var select_options76003 = null;
var select_options76003__1 = (function (coll){return select_options76003.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options76003__2 = (function (coll,selected){var iter__4375__auto__ = (function iter__76024(s__76025){return (new cljs.core.LazySeq(null,(function (){var s__76025__$1 = s__76025;while(true){
var temp__4126__auto__ = cljs.core.seq(s__76025__$1);if(temp__4126__auto__)
{var s__76025__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__76025__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__76025__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__76027 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__76026 = (0);while(true){
if((i__76026 < size__4374__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__76026);cljs.core.chunk_append(b__76027,((cljs.core.sequential_QMARK_(x))?(function (){var vec__76032 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76032,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76032,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76032,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1277,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1278,text], null),select_options76003.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1262,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1275,val,cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$1280,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__76034 = (i__76026 + (1));
i__76026 = G__76034;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__76027),iter__76024(cljs.core.chunk_rest(s__76025__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__76027),null);
}
} else
{var x = cljs.core.first(s__76025__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__76033 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76033,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76033,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76033,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1277,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1278,text], null),select_options76003.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1262,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1275,val,cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$1280,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__76024(cljs.core.rest(s__76025__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(coll);
});
select_options76003 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options76003__1.call(this,coll);
case 2:
return select_options76003__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options76003.cljs$core$IFn$_invoke$arity$1 = select_options76003__1;
select_options76003.cljs$core$IFn$_invoke$arity$2 = select_options76003__2;
return select_options76003;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options76003);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down76035 = (function() {
var drop_down76035 = null;
var drop_down76035__2 = (function (name,options){return drop_down76035.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down76035__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1274,sablono.core.make_name(name),cljs.core.constant$keyword$1162,sablono.core.make_id(name)], null),(function (){var G__76041 = options;var G__76042 = selected;return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__76041,G__76042) : sablono.core.select_options.call(null,G__76041,G__76042));
})()], null);
});
drop_down76035 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down76035__2.call(this,name,options);
case 3:
return drop_down76035__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down76035.cljs$core$IFn$_invoke$arity$2 = drop_down76035__2;
drop_down76035.cljs$core$IFn$_invoke$arity$3 = drop_down76035__3;
return drop_down76035;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down76035);
/**
* Creates a text area element.
*/
sablono.core.text_area76043 = (function() {
var text_area76043 = null;
var text_area76043__1 = (function (name){return text_area76043.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area76043__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1261,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1274,sablono.core.make_name(name),cljs.core.constant$keyword$1162,sablono.core.make_id(name),cljs.core.constant$keyword$1275,value], null)], null);
});
text_area76043 = function(name,value){
switch(arguments.length){
case 1:
return text_area76043__1.call(this,name);
case 2:
return text_area76043__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area76043.cljs$core$IFn$_invoke$arity$1 = text_area76043__1;
text_area76043.cljs$core$IFn$_invoke$arity$2 = text_area76043__2;
return text_area76043;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area76043);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label76046 = (function label76046(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1278,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1260,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label76046);
/**
* Creates a submit button.
*/
sablono.core.submit_button76047 = (function submit_button76047(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1160,"submit",cljs.core.constant$keyword$1275,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button76047);
/**
* Creates a form reset button.
*/
sablono.core.reset_button76048 = (function reset_button76048(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1160,"reset",cljs.core.constant$keyword$1275,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button76048);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to76049 = (function() { 
var form_to76049__delegate = function (p__76050,body){var vec__76054 = p__76050;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76054,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76054,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1282,null,cljs.core.constant$keyword$1283,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1284,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1137,method_str,cljs.core.constant$keyword$1285,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1284,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1137,"POST",cljs.core.constant$keyword$1285,action_uri], null),(function (){var G__76055 = "_method";var G__76056 = method_str;return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__76055,G__76056) : sablono.core.hidden_field.call(null,G__76055,G__76056));
})()], null)),body));
};
var form_to76049 = function (p__76050,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to76049__delegate.call(this,p__76050,body);};
form_to76049.cljs$lang$maxFixedArity = 1;
form_to76049.cljs$lang$applyTo = (function (arglist__76057){
var p__76050 = cljs.core.first(arglist__76057);
var body = cljs.core.rest(arglist__76057);
return form_to76049__delegate(p__76050,body);
});
form_to76049.cljs$core$IFn$_invoke$arity$variadic = form_to76049__delegate;
return form_to76049;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to76049);
