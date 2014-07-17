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
var G__42029__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__42028 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42028,(0),null);var body = cljs.core.nthnext(vec__42028,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__42029 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42029__delegate.call(this,args);};
G__42029.cljs$lang$maxFixedArity = 0;
G__42029.cljs$lang$applyTo = (function (arglist__42030){
var args = cljs.core.seq(arglist__42030);
return G__42029__delegate(args);
});
G__42029.cljs$core$IFn$_invoke$arity$variadic = G__42029__delegate;
return G__42029;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__42035(s__42036){return (new cljs.core.LazySeq(null,(function (){var s__42036__$1 = s__42036;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42036__$1);if(temp__4126__auto__)
{var s__42036__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42036__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42036__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42038 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42037 = (0);while(true){
if((i__42037 < size__4267__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42037);cljs.core.chunk_append(b__42038,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__42039 = (i__42037 + (1));
i__42037 = G__42039;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42038),iter__42035(cljs.core.chunk_rest(s__42036__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42038),null);
}
} else
{var args = cljs.core.first(s__42036__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__42035(cljs.core.rest(s__42036__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__42044(s__42045){return (new cljs.core.LazySeq(null,(function (){var s__42045__$1 = s__42045;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42045__$1);if(temp__4126__auto__)
{var s__42045__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42045__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42045__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42047 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42046 = (0);while(true){
if((i__42046 < size__4267__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42046);cljs.core.chunk_append(b__42047,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$821,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$801,"text/css",cljs.core.constant$keyword$822,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$823,"stylesheet"], null)], null));
{
var G__42048 = (i__42046 + (1));
i__42046 = G__42048;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42047),iter__42044(cljs.core.chunk_rest(s__42045__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42047),null);
}
} else
{var style = cljs.core.first(s__42045__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$821,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$801,"text/css",cljs.core.constant$keyword$822,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$823,"stylesheet"], null)], null),iter__42044(cljs.core.rest(s__42045__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__42049){
var styles = cljs.core.seq(arglist__42049);
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
sablono.core.link_to42050 = (function() { 
var link_to42050__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$824,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$822,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to42050 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to42050__delegate.call(this,url,content);};
link_to42050.cljs$lang$maxFixedArity = 1;
link_to42050.cljs$lang$applyTo = (function (arglist__42051){
var url = cljs.core.first(arglist__42051);
var content = cljs.core.rest(arglist__42051);
return link_to42050__delegate(url,content);
});
link_to42050.cljs$core$IFn$_invoke$arity$variadic = link_to42050__delegate;
return link_to42050;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to42050);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to42052 = (function() { 
var mail_to42052__delegate = function (e_mail,p__42053){var vec__42055 = p__42053;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42055,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$824,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$822,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to42052 = function (e_mail,var_args){
var p__42053 = null;if (arguments.length > 1) {
  p__42053 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to42052__delegate.call(this,e_mail,p__42053);};
mail_to42052.cljs$lang$maxFixedArity = 1;
mail_to42052.cljs$lang$applyTo = (function (arglist__42056){
var e_mail = cljs.core.first(arglist__42056);
var p__42053 = cljs.core.rest(arglist__42056);
return mail_to42052__delegate(e_mail,p__42053);
});
mail_to42052.cljs$core$IFn$_invoke$arity$variadic = mail_to42052__delegate;
return mail_to42052;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to42052);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list42057 = (function unordered_list42057(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$825,(function (){var iter__4268__auto__ = (function iter__42062(s__42063){return (new cljs.core.LazySeq(null,(function (){var s__42063__$1 = s__42063;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42063__$1);if(temp__4126__auto__)
{var s__42063__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42063__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42063__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42065 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42064 = (0);while(true){
if((i__42064 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42064);cljs.core.chunk_append(b__42065,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$826,x], null));
{
var G__42066 = (i__42064 + (1));
i__42064 = G__42066;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42065),iter__42062(cljs.core.chunk_rest(s__42063__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42065),null);
}
} else
{var x = cljs.core.first(s__42063__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$826,x], null),iter__42062(cljs.core.rest(s__42063__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list42057);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list42067 = (function ordered_list42067(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$827,(function (){var iter__4268__auto__ = (function iter__42072(s__42073){return (new cljs.core.LazySeq(null,(function (){var s__42073__$1 = s__42073;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42073__$1);if(temp__4126__auto__)
{var s__42073__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42073__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42073__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42075 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42074 = (0);while(true){
if((i__42074 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42074);cljs.core.chunk_append(b__42075,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$826,x], null));
{
var G__42076 = (i__42074 + (1));
i__42074 = G__42076;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42075),iter__42072(cljs.core.chunk_rest(s__42073__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42075),null);
}
} else
{var x = cljs.core.first(s__42073__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$826,x], null),iter__42072(cljs.core.rest(s__42073__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list42067);
/**
* Create an image element.
*/
sablono.core.image42077 = (function() {
var image42077 = null;
var image42077__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$828,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$829,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image42077__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$828,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$829,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$830,alt], null)], null);
});
image42077 = function(src,alt){
switch(arguments.length){
case 1:
return image42077__1.call(this,src);
case 2:
return image42077__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image42077.cljs$core$IFn$_invoke$arity$1 = image42077__1;
image42077.cljs$core$IFn$_invoke$arity$2 = image42077__2;
return image42077;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image42077);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42078_SHARP_,p2__42079_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42078_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42079_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42080_SHARP_,p2__42081_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42080_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42081_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$801,type,cljs.core.constant$keyword$831,sablono.core.make_name(name),cljs.core.constant$keyword$803,sablono.core.make_id(name),cljs.core.constant$keyword$832,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field42082 = (function() {
var color_field42082 = null;
var color_field42082__1 = (function (name__10211__auto__){return color_field42082.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var color_field42082__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10211__auto__,value__10212__auto__);
});
color_field42082 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return color_field42082__1.call(this,name__10211__auto__);
case 2:
return color_field42082__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field42082.cljs$core$IFn$_invoke$arity$1 = color_field42082__1;
color_field42082.cljs$core$IFn$_invoke$arity$2 = color_field42082__2;
return color_field42082;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field42082);
/**
* Creates a date input field.
*/
sablono.core.date_field42083 = (function() {
var date_field42083 = null;
var date_field42083__1 = (function (name__10211__auto__){return date_field42083.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var date_field42083__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10211__auto__,value__10212__auto__);
});
date_field42083 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return date_field42083__1.call(this,name__10211__auto__);
case 2:
return date_field42083__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field42083.cljs$core$IFn$_invoke$arity$1 = date_field42083__1;
date_field42083.cljs$core$IFn$_invoke$arity$2 = date_field42083__2;
return date_field42083;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field42083);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field42084 = (function() {
var datetime_field42084 = null;
var datetime_field42084__1 = (function (name__10211__auto__){return datetime_field42084.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var datetime_field42084__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10211__auto__,value__10212__auto__);
});
datetime_field42084 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_field42084__1.call(this,name__10211__auto__);
case 2:
return datetime_field42084__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field42084.cljs$core$IFn$_invoke$arity$1 = datetime_field42084__1;
datetime_field42084.cljs$core$IFn$_invoke$arity$2 = datetime_field42084__2;
return datetime_field42084;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field42084);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field42085 = (function() {
var datetime_local_field42085 = null;
var datetime_local_field42085__1 = (function (name__10211__auto__){return datetime_local_field42085.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var datetime_local_field42085__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10211__auto__,value__10212__auto__);
});
datetime_local_field42085 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_local_field42085__1.call(this,name__10211__auto__);
case 2:
return datetime_local_field42085__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field42085.cljs$core$IFn$_invoke$arity$1 = datetime_local_field42085__1;
datetime_local_field42085.cljs$core$IFn$_invoke$arity$2 = datetime_local_field42085__2;
return datetime_local_field42085;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field42085);
/**
* Creates a email input field.
*/
sablono.core.email_field42086 = (function() {
var email_field42086 = null;
var email_field42086__1 = (function (name__10211__auto__){return email_field42086.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var email_field42086__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10211__auto__,value__10212__auto__);
});
email_field42086 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return email_field42086__1.call(this,name__10211__auto__);
case 2:
return email_field42086__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field42086.cljs$core$IFn$_invoke$arity$1 = email_field42086__1;
email_field42086.cljs$core$IFn$_invoke$arity$2 = email_field42086__2;
return email_field42086;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field42086);
/**
* Creates a file input field.
*/
sablono.core.file_field42087 = (function() {
var file_field42087 = null;
var file_field42087__1 = (function (name__10211__auto__){return file_field42087.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var file_field42087__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10211__auto__,value__10212__auto__);
});
file_field42087 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return file_field42087__1.call(this,name__10211__auto__);
case 2:
return file_field42087__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field42087.cljs$core$IFn$_invoke$arity$1 = file_field42087__1;
file_field42087.cljs$core$IFn$_invoke$arity$2 = file_field42087__2;
return file_field42087;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field42087);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field42088 = (function() {
var hidden_field42088 = null;
var hidden_field42088__1 = (function (name__10211__auto__){return hidden_field42088.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var hidden_field42088__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10211__auto__,value__10212__auto__);
});
hidden_field42088 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return hidden_field42088__1.call(this,name__10211__auto__);
case 2:
return hidden_field42088__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field42088.cljs$core$IFn$_invoke$arity$1 = hidden_field42088__1;
hidden_field42088.cljs$core$IFn$_invoke$arity$2 = hidden_field42088__2;
return hidden_field42088;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field42088);
/**
* Creates a month input field.
*/
sablono.core.month_field42089 = (function() {
var month_field42089 = null;
var month_field42089__1 = (function (name__10211__auto__){return month_field42089.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var month_field42089__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10211__auto__,value__10212__auto__);
});
month_field42089 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return month_field42089__1.call(this,name__10211__auto__);
case 2:
return month_field42089__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field42089.cljs$core$IFn$_invoke$arity$1 = month_field42089__1;
month_field42089.cljs$core$IFn$_invoke$arity$2 = month_field42089__2;
return month_field42089;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field42089);
/**
* Creates a number input field.
*/
sablono.core.number_field42090 = (function() {
var number_field42090 = null;
var number_field42090__1 = (function (name__10211__auto__){return number_field42090.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var number_field42090__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10211__auto__,value__10212__auto__);
});
number_field42090 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return number_field42090__1.call(this,name__10211__auto__);
case 2:
return number_field42090__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field42090.cljs$core$IFn$_invoke$arity$1 = number_field42090__1;
number_field42090.cljs$core$IFn$_invoke$arity$2 = number_field42090__2;
return number_field42090;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field42090);
/**
* Creates a password input field.
*/
sablono.core.password_field42091 = (function() {
var password_field42091 = null;
var password_field42091__1 = (function (name__10211__auto__){return password_field42091.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var password_field42091__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10211__auto__,value__10212__auto__);
});
password_field42091 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return password_field42091__1.call(this,name__10211__auto__);
case 2:
return password_field42091__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field42091.cljs$core$IFn$_invoke$arity$1 = password_field42091__1;
password_field42091.cljs$core$IFn$_invoke$arity$2 = password_field42091__2;
return password_field42091;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field42091);
/**
* Creates a range input field.
*/
sablono.core.range_field42092 = (function() {
var range_field42092 = null;
var range_field42092__1 = (function (name__10211__auto__){return range_field42092.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var range_field42092__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10211__auto__,value__10212__auto__);
});
range_field42092 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return range_field42092__1.call(this,name__10211__auto__);
case 2:
return range_field42092__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field42092.cljs$core$IFn$_invoke$arity$1 = range_field42092__1;
range_field42092.cljs$core$IFn$_invoke$arity$2 = range_field42092__2;
return range_field42092;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field42092);
/**
* Creates a search input field.
*/
sablono.core.search_field42093 = (function() {
var search_field42093 = null;
var search_field42093__1 = (function (name__10211__auto__){return search_field42093.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var search_field42093__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10211__auto__,value__10212__auto__);
});
search_field42093 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return search_field42093__1.call(this,name__10211__auto__);
case 2:
return search_field42093__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field42093.cljs$core$IFn$_invoke$arity$1 = search_field42093__1;
search_field42093.cljs$core$IFn$_invoke$arity$2 = search_field42093__2;
return search_field42093;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field42093);
/**
* Creates a tel input field.
*/
sablono.core.tel_field42094 = (function() {
var tel_field42094 = null;
var tel_field42094__1 = (function (name__10211__auto__){return tel_field42094.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var tel_field42094__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10211__auto__,value__10212__auto__);
});
tel_field42094 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return tel_field42094__1.call(this,name__10211__auto__);
case 2:
return tel_field42094__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field42094.cljs$core$IFn$_invoke$arity$1 = tel_field42094__1;
tel_field42094.cljs$core$IFn$_invoke$arity$2 = tel_field42094__2;
return tel_field42094;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field42094);
/**
* Creates a text input field.
*/
sablono.core.text_field42095 = (function() {
var text_field42095 = null;
var text_field42095__1 = (function (name__10211__auto__){return text_field42095.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var text_field42095__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10211__auto__,value__10212__auto__);
});
text_field42095 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return text_field42095__1.call(this,name__10211__auto__);
case 2:
return text_field42095__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field42095.cljs$core$IFn$_invoke$arity$1 = text_field42095__1;
text_field42095.cljs$core$IFn$_invoke$arity$2 = text_field42095__2;
return text_field42095;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field42095);
/**
* Creates a time input field.
*/
sablono.core.time_field42096 = (function() {
var time_field42096 = null;
var time_field42096__1 = (function (name__10211__auto__){return time_field42096.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var time_field42096__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10211__auto__,value__10212__auto__);
});
time_field42096 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return time_field42096__1.call(this,name__10211__auto__);
case 2:
return time_field42096__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field42096.cljs$core$IFn$_invoke$arity$1 = time_field42096__1;
time_field42096.cljs$core$IFn$_invoke$arity$2 = time_field42096__2;
return time_field42096;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field42096);
/**
* Creates a url input field.
*/
sablono.core.url_field42097 = (function() {
var url_field42097 = null;
var url_field42097__1 = (function (name__10211__auto__){return url_field42097.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var url_field42097__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10211__auto__,value__10212__auto__);
});
url_field42097 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return url_field42097__1.call(this,name__10211__auto__);
case 2:
return url_field42097__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field42097.cljs$core$IFn$_invoke$arity$1 = url_field42097__1;
url_field42097.cljs$core$IFn$_invoke$arity$2 = url_field42097__2;
return url_field42097;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field42097);
/**
* Creates a week input field.
*/
sablono.core.week_field42098 = (function() {
var week_field42098 = null;
var week_field42098__1 = (function (name__10211__auto__){return week_field42098.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var week_field42098__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10211__auto__,value__10212__auto__);
});
week_field42098 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return week_field42098__1.call(this,name__10211__auto__);
case 2:
return week_field42098__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field42098.cljs$core$IFn$_invoke$arity$1 = week_field42098__1;
week_field42098.cljs$core$IFn$_invoke$arity$2 = week_field42098__2;
return week_field42098;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field42098);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box42099 = (function() {
var check_box42099 = null;
var check_box42099__1 = (function (name){return check_box42099.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box42099__2 = (function (name,checked_QMARK_){return check_box42099.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box42099__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$801,"checkbox",cljs.core.constant$keyword$831,sablono.core.make_name(name),cljs.core.constant$keyword$803,sablono.core.make_id(name),cljs.core.constant$keyword$832,value,cljs.core.constant$keyword$833,checked_QMARK_], null)], null);
});
check_box42099 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box42099__1.call(this,name);
case 2:
return check_box42099__2.call(this,name,checked_QMARK_);
case 3:
return check_box42099__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box42099.cljs$core$IFn$_invoke$arity$1 = check_box42099__1;
check_box42099.cljs$core$IFn$_invoke$arity$2 = check_box42099__2;
check_box42099.cljs$core$IFn$_invoke$arity$3 = check_box42099__3;
return check_box42099;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box42099);
/**
* Creates a radio button.
*/
sablono.core.radio_button42100 = (function() {
var radio_button42100 = null;
var radio_button42100__1 = (function (group){return radio_button42100.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button42100__2 = (function (group,checked_QMARK_){return radio_button42100.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button42100__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$801,"radio",cljs.core.constant$keyword$831,sablono.core.make_name(group),cljs.core.constant$keyword$803,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$832,value,cljs.core.constant$keyword$833,checked_QMARK_], null)], null);
});
radio_button42100 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button42100__1.call(this,group);
case 2:
return radio_button42100__2.call(this,group,checked_QMARK_);
case 3:
return radio_button42100__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button42100.cljs$core$IFn$_invoke$arity$1 = radio_button42100__1;
radio_button42100.cljs$core$IFn$_invoke$arity$2 = radio_button42100__2;
radio_button42100.cljs$core$IFn$_invoke$arity$3 = radio_button42100__3;
return radio_button42100;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button42100);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options42101 = (function() {
var select_options42101 = null;
var select_options42101__1 = (function (coll){return select_options42101.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options42101__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__42110(s__42111){return (new cljs.core.LazySeq(null,(function (){var s__42111__$1 = s__42111;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42111__$1);if(temp__4126__auto__)
{var s__42111__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42111__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42111__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42113 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42112 = (0);while(true){
if((i__42112 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42112);cljs.core.chunk_append(b__42113,((cljs.core.sequential_QMARK_(x))?(function (){var vec__42116 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42116,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42116,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42116,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$834,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$835,text], null),select_options42101.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$836,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$832,val,cljs.core.constant$keyword$837,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$838,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$836,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$837,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__42118 = (i__42112 + (1));
i__42112 = G__42118;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42113),iter__42110(cljs.core.chunk_rest(s__42111__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42113),null);
}
} else
{var x = cljs.core.first(s__42111__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__42117 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42117,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42117,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42117,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$834,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$835,text], null),select_options42101.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$836,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$832,val,cljs.core.constant$keyword$837,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$838,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$836,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$837,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__42110(cljs.core.rest(s__42111__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
});
select_options42101 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options42101__1.call(this,coll);
case 2:
return select_options42101__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options42101.cljs$core$IFn$_invoke$arity$1 = select_options42101__1;
select_options42101.cljs$core$IFn$_invoke$arity$2 = select_options42101__2;
return select_options42101;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options42101);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down42119 = (function() {
var drop_down42119 = null;
var drop_down42119__2 = (function (name,options){return drop_down42119.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down42119__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$839,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$831,sablono.core.make_name(name),cljs.core.constant$keyword$803,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down42119 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down42119__2.call(this,name,options);
case 3:
return drop_down42119__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down42119.cljs$core$IFn$_invoke$arity$2 = drop_down42119__2;
drop_down42119.cljs$core$IFn$_invoke$arity$3 = drop_down42119__3;
return drop_down42119;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down42119);
/**
* Creates a text area element.
*/
sablono.core.text_area42120 = (function() {
var text_area42120 = null;
var text_area42120__1 = (function (name){return text_area42120.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area42120__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$819,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$831,sablono.core.make_name(name),cljs.core.constant$keyword$803,sablono.core.make_id(name),cljs.core.constant$keyword$832,value], null)], null);
});
text_area42120 = function(name,value){
switch(arguments.length){
case 1:
return text_area42120__1.call(this,name);
case 2:
return text_area42120__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area42120.cljs$core$IFn$_invoke$arity$1 = text_area42120__1;
text_area42120.cljs$core$IFn$_invoke$arity$2 = text_area42120__2;
return text_area42120;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area42120);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label42121 = (function label42121(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$817,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label42121);
/**
* Creates a submit button.
*/
sablono.core.submit_button42122 = (function submit_button42122(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$801,"submit",cljs.core.constant$keyword$832,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button42122);
/**
* Creates a form reset button.
*/
sablono.core.reset_button42123 = (function reset_button42123(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$801,"reset",cljs.core.constant$keyword$832,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button42123);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to42124 = (function() { 
var form_to42124__delegate = function (p__42125,body){var vec__42127 = p__42125;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42127,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42127,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$840,null,cljs.core.constant$keyword$841,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$842,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$786,method_str,cljs.core.constant$keyword$843,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$842,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$786,"POST",cljs.core.constant$keyword$843,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to42124 = function (p__42125,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to42124__delegate.call(this,p__42125,body);};
form_to42124.cljs$lang$maxFixedArity = 1;
form_to42124.cljs$lang$applyTo = (function (arglist__42128){
var p__42125 = cljs.core.first(arglist__42128);
var body = cljs.core.rest(arglist__42128);
return form_to42124__delegate(p__42125,body);
});
form_to42124.cljs$core$IFn$_invoke$arity$variadic = form_to42124__delegate;
return form_to42124;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to42124);
