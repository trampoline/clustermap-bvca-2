// Compiled by ClojureScript 0.0-2261
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
var G__41894__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__41893 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41893,(0),null);var body = cljs.core.nthnext(vec__41893,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41894 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__41894__delegate.call(this,args);};
G__41894.cljs$lang$maxFixedArity = 0;
G__41894.cljs$lang$applyTo = (function (arglist__41895){
var args = cljs.core.seq(arglist__41895);
return G__41894__delegate(args);
});
G__41894.cljs$core$IFn$_invoke$arity$variadic = G__41894__delegate;
return G__41894;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__41900(s__41901){return (new cljs.core.LazySeq(null,(function (){var s__41901__$1 = s__41901;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41901__$1);if(temp__4126__auto__)
{var s__41901__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41901__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__41901__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__41903 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__41902 = (0);while(true){
if((i__41902 < size__4267__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__41902);cljs.core.chunk_append(b__41903,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__41904 = (i__41902 + (1));
i__41902 = G__41904;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41903),iter__41900(cljs.core.chunk_rest(s__41901__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41903),null);
}
} else
{var args = cljs.core.first(s__41901__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__41900(cljs.core.rest(s__41901__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__41909(s__41910){return (new cljs.core.LazySeq(null,(function (){var s__41910__$1 = s__41910;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41910__$1);if(temp__4126__auto__)
{var s__41910__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41910__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__41910__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__41912 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__41911 = (0);while(true){
if((i__41911 < size__4267__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__41911);cljs.core.chunk_append(b__41912,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$817,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$797,"text/css",cljs.core.constant$keyword$818,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$819,"stylesheet"], null)], null));
{
var G__41913 = (i__41911 + (1));
i__41911 = G__41913;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41912),iter__41909(cljs.core.chunk_rest(s__41910__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41912),null);
}
} else
{var style = cljs.core.first(s__41910__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$817,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$797,"text/css",cljs.core.constant$keyword$818,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$819,"stylesheet"], null)], null),iter__41909(cljs.core.rest(s__41910__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__41914){
var styles = cljs.core.seq(arglist__41914);
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
sablono.core.link_to41915 = (function() { 
var link_to41915__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$818,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to41915 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to41915__delegate.call(this,url,content);};
link_to41915.cljs$lang$maxFixedArity = 1;
link_to41915.cljs$lang$applyTo = (function (arglist__41916){
var url = cljs.core.first(arglist__41916);
var content = cljs.core.rest(arglist__41916);
return link_to41915__delegate(url,content);
});
link_to41915.cljs$core$IFn$_invoke$arity$variadic = link_to41915__delegate;
return link_to41915;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41915);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to41917 = (function() { 
var mail_to41917__delegate = function (e_mail,p__41918){var vec__41920 = p__41918;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41920,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$818,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to41917 = function (e_mail,var_args){
var p__41918 = null;if (arguments.length > 1) {
  p__41918 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to41917__delegate.call(this,e_mail,p__41918);};
mail_to41917.cljs$lang$maxFixedArity = 1;
mail_to41917.cljs$lang$applyTo = (function (arglist__41921){
var e_mail = cljs.core.first(arglist__41921);
var p__41918 = cljs.core.rest(arglist__41921);
return mail_to41917__delegate(e_mail,p__41918);
});
mail_to41917.cljs$core$IFn$_invoke$arity$variadic = mail_to41917__delegate;
return mail_to41917;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41917);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list41922 = (function unordered_list41922(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$821,(function (){var iter__4268__auto__ = (function iter__41927(s__41928){return (new cljs.core.LazySeq(null,(function (){var s__41928__$1 = s__41928;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41928__$1);if(temp__4126__auto__)
{var s__41928__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41928__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__41928__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__41930 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__41929 = (0);while(true){
if((i__41929 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__41929);cljs.core.chunk_append(b__41930,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$822,x], null));
{
var G__41931 = (i__41929 + (1));
i__41929 = G__41931;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41930),iter__41927(cljs.core.chunk_rest(s__41928__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41930),null);
}
} else
{var x = cljs.core.first(s__41928__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$822,x], null),iter__41927(cljs.core.rest(s__41928__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41922);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list41932 = (function ordered_list41932(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$823,(function (){var iter__4268__auto__ = (function iter__41937(s__41938){return (new cljs.core.LazySeq(null,(function (){var s__41938__$1 = s__41938;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41938__$1);if(temp__4126__auto__)
{var s__41938__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41938__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__41938__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__41940 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__41939 = (0);while(true){
if((i__41939 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__41939);cljs.core.chunk_append(b__41940,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$822,x], null));
{
var G__41941 = (i__41939 + (1));
i__41939 = G__41941;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41940),iter__41937(cljs.core.chunk_rest(s__41938__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41940),null);
}
} else
{var x = cljs.core.first(s__41938__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$822,x], null),iter__41937(cljs.core.rest(s__41938__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41932);
/**
* Create an image element.
*/
sablono.core.image41942 = (function() {
var image41942 = null;
var image41942__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$824,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$825,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image41942__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$824,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$825,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$826,alt], null)], null);
});
image41942 = function(src,alt){
switch(arguments.length){
case 1:
return image41942__1.call(this,src);
case 2:
return image41942__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image41942.cljs$core$IFn$_invoke$arity$1 = image41942__1;
image41942.cljs$core$IFn$_invoke$arity$2 = image41942__2;
return image41942;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41942);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41943_SHARP_,p2__41944_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41943_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41944_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41945_SHARP_,p2__41946_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41945_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41946_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$816,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$797,type,cljs.core.constant$keyword$827,sablono.core.make_name(name),cljs.core.constant$keyword$799,sablono.core.make_id(name),cljs.core.constant$keyword$828,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field41947 = (function() {
var color_field41947 = null;
var color_field41947__1 = (function (name__10211__auto__){return color_field41947.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var color_field41947__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10211__auto__,value__10212__auto__);
});
color_field41947 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return color_field41947__1.call(this,name__10211__auto__);
case 2:
return color_field41947__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field41947.cljs$core$IFn$_invoke$arity$1 = color_field41947__1;
color_field41947.cljs$core$IFn$_invoke$arity$2 = color_field41947__2;
return color_field41947;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41947);
/**
* Creates a date input field.
*/
sablono.core.date_field41948 = (function() {
var date_field41948 = null;
var date_field41948__1 = (function (name__10211__auto__){return date_field41948.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var date_field41948__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10211__auto__,value__10212__auto__);
});
date_field41948 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return date_field41948__1.call(this,name__10211__auto__);
case 2:
return date_field41948__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field41948.cljs$core$IFn$_invoke$arity$1 = date_field41948__1;
date_field41948.cljs$core$IFn$_invoke$arity$2 = date_field41948__2;
return date_field41948;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41948);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field41949 = (function() {
var datetime_field41949 = null;
var datetime_field41949__1 = (function (name__10211__auto__){return datetime_field41949.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var datetime_field41949__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10211__auto__,value__10212__auto__);
});
datetime_field41949 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_field41949__1.call(this,name__10211__auto__);
case 2:
return datetime_field41949__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field41949.cljs$core$IFn$_invoke$arity$1 = datetime_field41949__1;
datetime_field41949.cljs$core$IFn$_invoke$arity$2 = datetime_field41949__2;
return datetime_field41949;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41949);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field41950 = (function() {
var datetime_local_field41950 = null;
var datetime_local_field41950__1 = (function (name__10211__auto__){return datetime_local_field41950.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var datetime_local_field41950__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10211__auto__,value__10212__auto__);
});
datetime_local_field41950 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_local_field41950__1.call(this,name__10211__auto__);
case 2:
return datetime_local_field41950__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field41950.cljs$core$IFn$_invoke$arity$1 = datetime_local_field41950__1;
datetime_local_field41950.cljs$core$IFn$_invoke$arity$2 = datetime_local_field41950__2;
return datetime_local_field41950;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41950);
/**
* Creates a email input field.
*/
sablono.core.email_field41951 = (function() {
var email_field41951 = null;
var email_field41951__1 = (function (name__10211__auto__){return email_field41951.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var email_field41951__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10211__auto__,value__10212__auto__);
});
email_field41951 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return email_field41951__1.call(this,name__10211__auto__);
case 2:
return email_field41951__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field41951.cljs$core$IFn$_invoke$arity$1 = email_field41951__1;
email_field41951.cljs$core$IFn$_invoke$arity$2 = email_field41951__2;
return email_field41951;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41951);
/**
* Creates a file input field.
*/
sablono.core.file_field41952 = (function() {
var file_field41952 = null;
var file_field41952__1 = (function (name__10211__auto__){return file_field41952.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var file_field41952__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10211__auto__,value__10212__auto__);
});
file_field41952 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return file_field41952__1.call(this,name__10211__auto__);
case 2:
return file_field41952__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field41952.cljs$core$IFn$_invoke$arity$1 = file_field41952__1;
file_field41952.cljs$core$IFn$_invoke$arity$2 = file_field41952__2;
return file_field41952;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41952);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field41953 = (function() {
var hidden_field41953 = null;
var hidden_field41953__1 = (function (name__10211__auto__){return hidden_field41953.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var hidden_field41953__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10211__auto__,value__10212__auto__);
});
hidden_field41953 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return hidden_field41953__1.call(this,name__10211__auto__);
case 2:
return hidden_field41953__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field41953.cljs$core$IFn$_invoke$arity$1 = hidden_field41953__1;
hidden_field41953.cljs$core$IFn$_invoke$arity$2 = hidden_field41953__2;
return hidden_field41953;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41953);
/**
* Creates a month input field.
*/
sablono.core.month_field41954 = (function() {
var month_field41954 = null;
var month_field41954__1 = (function (name__10211__auto__){return month_field41954.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var month_field41954__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10211__auto__,value__10212__auto__);
});
month_field41954 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return month_field41954__1.call(this,name__10211__auto__);
case 2:
return month_field41954__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field41954.cljs$core$IFn$_invoke$arity$1 = month_field41954__1;
month_field41954.cljs$core$IFn$_invoke$arity$2 = month_field41954__2;
return month_field41954;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41954);
/**
* Creates a number input field.
*/
sablono.core.number_field41955 = (function() {
var number_field41955 = null;
var number_field41955__1 = (function (name__10211__auto__){return number_field41955.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var number_field41955__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10211__auto__,value__10212__auto__);
});
number_field41955 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return number_field41955__1.call(this,name__10211__auto__);
case 2:
return number_field41955__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field41955.cljs$core$IFn$_invoke$arity$1 = number_field41955__1;
number_field41955.cljs$core$IFn$_invoke$arity$2 = number_field41955__2;
return number_field41955;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41955);
/**
* Creates a password input field.
*/
sablono.core.password_field41956 = (function() {
var password_field41956 = null;
var password_field41956__1 = (function (name__10211__auto__){return password_field41956.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var password_field41956__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10211__auto__,value__10212__auto__);
});
password_field41956 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return password_field41956__1.call(this,name__10211__auto__);
case 2:
return password_field41956__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field41956.cljs$core$IFn$_invoke$arity$1 = password_field41956__1;
password_field41956.cljs$core$IFn$_invoke$arity$2 = password_field41956__2;
return password_field41956;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41956);
/**
* Creates a range input field.
*/
sablono.core.range_field41957 = (function() {
var range_field41957 = null;
var range_field41957__1 = (function (name__10211__auto__){return range_field41957.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var range_field41957__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10211__auto__,value__10212__auto__);
});
range_field41957 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return range_field41957__1.call(this,name__10211__auto__);
case 2:
return range_field41957__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field41957.cljs$core$IFn$_invoke$arity$1 = range_field41957__1;
range_field41957.cljs$core$IFn$_invoke$arity$2 = range_field41957__2;
return range_field41957;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41957);
/**
* Creates a search input field.
*/
sablono.core.search_field41958 = (function() {
var search_field41958 = null;
var search_field41958__1 = (function (name__10211__auto__){return search_field41958.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var search_field41958__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10211__auto__,value__10212__auto__);
});
search_field41958 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return search_field41958__1.call(this,name__10211__auto__);
case 2:
return search_field41958__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field41958.cljs$core$IFn$_invoke$arity$1 = search_field41958__1;
search_field41958.cljs$core$IFn$_invoke$arity$2 = search_field41958__2;
return search_field41958;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41958);
/**
* Creates a tel input field.
*/
sablono.core.tel_field41959 = (function() {
var tel_field41959 = null;
var tel_field41959__1 = (function (name__10211__auto__){return tel_field41959.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var tel_field41959__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10211__auto__,value__10212__auto__);
});
tel_field41959 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return tel_field41959__1.call(this,name__10211__auto__);
case 2:
return tel_field41959__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field41959.cljs$core$IFn$_invoke$arity$1 = tel_field41959__1;
tel_field41959.cljs$core$IFn$_invoke$arity$2 = tel_field41959__2;
return tel_field41959;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41959);
/**
* Creates a text input field.
*/
sablono.core.text_field41960 = (function() {
var text_field41960 = null;
var text_field41960__1 = (function (name__10211__auto__){return text_field41960.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var text_field41960__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10211__auto__,value__10212__auto__);
});
text_field41960 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return text_field41960__1.call(this,name__10211__auto__);
case 2:
return text_field41960__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field41960.cljs$core$IFn$_invoke$arity$1 = text_field41960__1;
text_field41960.cljs$core$IFn$_invoke$arity$2 = text_field41960__2;
return text_field41960;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41960);
/**
* Creates a time input field.
*/
sablono.core.time_field41961 = (function() {
var time_field41961 = null;
var time_field41961__1 = (function (name__10211__auto__){return time_field41961.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var time_field41961__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10211__auto__,value__10212__auto__);
});
time_field41961 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return time_field41961__1.call(this,name__10211__auto__);
case 2:
return time_field41961__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field41961.cljs$core$IFn$_invoke$arity$1 = time_field41961__1;
time_field41961.cljs$core$IFn$_invoke$arity$2 = time_field41961__2;
return time_field41961;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41961);
/**
* Creates a url input field.
*/
sablono.core.url_field41962 = (function() {
var url_field41962 = null;
var url_field41962__1 = (function (name__10211__auto__){return url_field41962.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var url_field41962__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10211__auto__,value__10212__auto__);
});
url_field41962 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return url_field41962__1.call(this,name__10211__auto__);
case 2:
return url_field41962__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field41962.cljs$core$IFn$_invoke$arity$1 = url_field41962__1;
url_field41962.cljs$core$IFn$_invoke$arity$2 = url_field41962__2;
return url_field41962;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41962);
/**
* Creates a week input field.
*/
sablono.core.week_field41963 = (function() {
var week_field41963 = null;
var week_field41963__1 = (function (name__10211__auto__){return week_field41963.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var week_field41963__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10211__auto__,value__10212__auto__);
});
week_field41963 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return week_field41963__1.call(this,name__10211__auto__);
case 2:
return week_field41963__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field41963.cljs$core$IFn$_invoke$arity$1 = week_field41963__1;
week_field41963.cljs$core$IFn$_invoke$arity$2 = week_field41963__2;
return week_field41963;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41963);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box41964 = (function() {
var check_box41964 = null;
var check_box41964__1 = (function (name){return check_box41964.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box41964__2 = (function (name,checked_QMARK_){return check_box41964.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box41964__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$816,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$797,"checkbox",cljs.core.constant$keyword$827,sablono.core.make_name(name),cljs.core.constant$keyword$799,sablono.core.make_id(name),cljs.core.constant$keyword$828,value,cljs.core.constant$keyword$829,checked_QMARK_], null)], null);
});
check_box41964 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box41964__1.call(this,name);
case 2:
return check_box41964__2.call(this,name,checked_QMARK_);
case 3:
return check_box41964__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box41964.cljs$core$IFn$_invoke$arity$1 = check_box41964__1;
check_box41964.cljs$core$IFn$_invoke$arity$2 = check_box41964__2;
check_box41964.cljs$core$IFn$_invoke$arity$3 = check_box41964__3;
return check_box41964;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41964);
/**
* Creates a radio button.
*/
sablono.core.radio_button41965 = (function() {
var radio_button41965 = null;
var radio_button41965__1 = (function (group){return radio_button41965.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button41965__2 = (function (group,checked_QMARK_){return radio_button41965.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button41965__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$816,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$797,"radio",cljs.core.constant$keyword$827,sablono.core.make_name(group),cljs.core.constant$keyword$799,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$828,value,cljs.core.constant$keyword$829,checked_QMARK_], null)], null);
});
radio_button41965 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button41965__1.call(this,group);
case 2:
return radio_button41965__2.call(this,group,checked_QMARK_);
case 3:
return radio_button41965__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button41965.cljs$core$IFn$_invoke$arity$1 = radio_button41965__1;
radio_button41965.cljs$core$IFn$_invoke$arity$2 = radio_button41965__2;
radio_button41965.cljs$core$IFn$_invoke$arity$3 = radio_button41965__3;
return radio_button41965;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41965);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options41966 = (function() {
var select_options41966 = null;
var select_options41966__1 = (function (coll){return select_options41966.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options41966__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__41975(s__41976){return (new cljs.core.LazySeq(null,(function (){var s__41976__$1 = s__41976;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41976__$1);if(temp__4126__auto__)
{var s__41976__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41976__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__41976__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__41978 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__41977 = (0);while(true){
if((i__41977 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__41977);cljs.core.chunk_append(b__41978,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41981 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41981,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41981,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41981,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,text], null),select_options41966.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$832,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$828,val,cljs.core.constant$keyword$833,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$834,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$832,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$833,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__41983 = (i__41977 + (1));
i__41977 = G__41983;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41978),iter__41975(cljs.core.chunk_rest(s__41976__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41978),null);
}
} else
{var x = cljs.core.first(s__41976__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41982 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41982,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41982,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41982,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,text], null),select_options41966.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$832,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$828,val,cljs.core.constant$keyword$833,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$834,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$832,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$833,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__41975(cljs.core.rest(s__41976__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
});
select_options41966 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options41966__1.call(this,coll);
case 2:
return select_options41966__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options41966.cljs$core$IFn$_invoke$arity$1 = select_options41966__1;
select_options41966.cljs$core$IFn$_invoke$arity$2 = select_options41966__2;
return select_options41966;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41966);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down41984 = (function() {
var drop_down41984 = null;
var drop_down41984__2 = (function (name,options){return drop_down41984.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down41984__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$827,sablono.core.make_name(name),cljs.core.constant$keyword$799,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down41984 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down41984__2.call(this,name,options);
case 3:
return drop_down41984__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down41984.cljs$core$IFn$_invoke$arity$2 = drop_down41984__2;
drop_down41984.cljs$core$IFn$_invoke$arity$3 = drop_down41984__3;
return drop_down41984;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41984);
/**
* Creates a text area element.
*/
sablono.core.text_area41985 = (function() {
var text_area41985 = null;
var text_area41985__1 = (function (name){return text_area41985.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area41985__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$815,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$827,sablono.core.make_name(name),cljs.core.constant$keyword$799,sablono.core.make_id(name),cljs.core.constant$keyword$828,value], null)], null);
});
text_area41985 = function(name,value){
switch(arguments.length){
case 1:
return text_area41985__1.call(this,name);
case 2:
return text_area41985__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area41985.cljs$core$IFn$_invoke$arity$1 = text_area41985__1;
text_area41985.cljs$core$IFn$_invoke$arity$2 = text_area41985__2;
return text_area41985;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41985);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label41986 = (function label41986(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$831,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$813,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41986);
/**
* Creates a submit button.
*/
sablono.core.submit_button41987 = (function submit_button41987(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$816,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,"submit",cljs.core.constant$keyword$828,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41987);
/**
* Creates a form reset button.
*/
sablono.core.reset_button41988 = (function reset_button41988(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$816,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,"reset",cljs.core.constant$keyword$828,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41988);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to41989 = (function() { 
var form_to41989__delegate = function (p__41990,body){var vec__41992 = p__41990;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41992,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41992,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$836,null,cljs.core.constant$keyword$837,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$838,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$782,method_str,cljs.core.constant$keyword$839,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$838,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$782,"POST",cljs.core.constant$keyword$839,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to41989 = function (p__41990,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to41989__delegate.call(this,p__41990,body);};
form_to41989.cljs$lang$maxFixedArity = 1;
form_to41989.cljs$lang$applyTo = (function (arglist__41993){
var p__41990 = cljs.core.first(arglist__41993);
var body = cljs.core.rest(arglist__41993);
return form_to41989__delegate(p__41990,body);
});
form_to41989.cljs$core$IFn$_invoke$arity$variadic = form_to41989__delegate;
return form_to41989;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41989);
