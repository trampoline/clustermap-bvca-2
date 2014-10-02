// Compiled by ClojureScript 0.0-2322
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
var G__44985__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__44984 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44984,(0),null);var body = cljs.core.nthnext(vec__44984,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__44985 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__44985__delegate.call(this,args);};
G__44985.cljs$lang$maxFixedArity = 0;
G__44985.cljs$lang$applyTo = (function (arglist__44986){
var args = cljs.core.seq(arglist__44986);
return G__44985__delegate(args);
});
G__44985.cljs$core$IFn$_invoke$arity$variadic = G__44985__delegate;
return G__44985;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__44991(s__44992){return (new cljs.core.LazySeq(null,(function (){var s__44992__$1 = s__44992;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44992__$1);if(temp__4126__auto__)
{var s__44992__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44992__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44992__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44994 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44993 = (0);while(true){
if((i__44993 < size__4282__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44993);cljs.core.chunk_append(b__44994,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__44995 = (i__44993 + (1));
i__44993 = G__44995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44994),iter__44991(cljs.core.chunk_rest(s__44992__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44994),null);
}
} else
{var args = cljs.core.first(s__44992__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__44991(cljs.core.rest(s__44992__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__45000(s__45001){return (new cljs.core.LazySeq(null,(function (){var s__45001__$1 = s__45001;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45001__$1);if(temp__4126__auto__)
{var s__45001__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45001__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45001__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45003 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45002 = (0);while(true){
if((i__45002 < size__4282__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45002);cljs.core.chunk_append(b__45003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$931,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$912,"text/css",cljs.core.constant$keyword$932,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$933,"stylesheet"], null)], null));
{
var G__45004 = (i__45002 + (1));
i__45002 = G__45004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45003),iter__45000(cljs.core.chunk_rest(s__45001__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45003),null);
}
} else
{var style = cljs.core.first(s__45001__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$931,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$912,"text/css",cljs.core.constant$keyword$932,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$933,"stylesheet"], null)], null),iter__45000(cljs.core.rest(s__45001__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__45005){
var styles = cljs.core.seq(arglist__45005);
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
sablono.core.link_to45006 = (function() { 
var link_to45006__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$934,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$932,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to45006 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to45006__delegate.call(this,url,content);};
link_to45006.cljs$lang$maxFixedArity = 1;
link_to45006.cljs$lang$applyTo = (function (arglist__45007){
var url = cljs.core.first(arglist__45007);
var content = cljs.core.rest(arglist__45007);
return link_to45006__delegate(url,content);
});
link_to45006.cljs$core$IFn$_invoke$arity$variadic = link_to45006__delegate;
return link_to45006;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to45006);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to45008 = (function() { 
var mail_to45008__delegate = function (e_mail,p__45009){var vec__45011 = p__45009;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45011,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$934,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$932,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to45008 = function (e_mail,var_args){
var p__45009 = null;if (arguments.length > 1) {
  p__45009 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to45008__delegate.call(this,e_mail,p__45009);};
mail_to45008.cljs$lang$maxFixedArity = 1;
mail_to45008.cljs$lang$applyTo = (function (arglist__45012){
var e_mail = cljs.core.first(arglist__45012);
var p__45009 = cljs.core.rest(arglist__45012);
return mail_to45008__delegate(e_mail,p__45009);
});
mail_to45008.cljs$core$IFn$_invoke$arity$variadic = mail_to45008__delegate;
return mail_to45008;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to45008);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list45013 = (function unordered_list45013(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$935,(function (){var iter__4283__auto__ = (function iter__45018(s__45019){return (new cljs.core.LazySeq(null,(function (){var s__45019__$1 = s__45019;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45019__$1);if(temp__4126__auto__)
{var s__45019__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45019__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45019__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45021 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45020 = (0);while(true){
if((i__45020 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45020);cljs.core.chunk_append(b__45021,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$936,x], null));
{
var G__45022 = (i__45020 + (1));
i__45020 = G__45022;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45021),iter__45018(cljs.core.chunk_rest(s__45019__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45021),null);
}
} else
{var x = cljs.core.first(s__45019__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$936,x], null),iter__45018(cljs.core.rest(s__45019__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list45013);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list45023 = (function ordered_list45023(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$937,(function (){var iter__4283__auto__ = (function iter__45028(s__45029){return (new cljs.core.LazySeq(null,(function (){var s__45029__$1 = s__45029;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45029__$1);if(temp__4126__auto__)
{var s__45029__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45029__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45029__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45031 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45030 = (0);while(true){
if((i__45030 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45030);cljs.core.chunk_append(b__45031,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$936,x], null));
{
var G__45032 = (i__45030 + (1));
i__45030 = G__45032;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45031),iter__45028(cljs.core.chunk_rest(s__45029__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45031),null);
}
} else
{var x = cljs.core.first(s__45029__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$936,x], null),iter__45028(cljs.core.rest(s__45029__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list45023);
/**
* Create an image element.
*/
sablono.core.image45033 = (function() {
var image45033 = null;
var image45033__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$938,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$939,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image45033__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$938,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$939,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$940,alt], null)], null);
});
image45033 = function(src,alt){
switch(arguments.length){
case 1:
return image45033__1.call(this,src);
case 2:
return image45033__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image45033.cljs$core$IFn$_invoke$arity$1 = image45033__1;
image45033.cljs$core$IFn$_invoke$arity$2 = image45033__2;
return image45033;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image45033);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__45034_SHARP_,p2__45035_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45034_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__45035_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__45036_SHARP_,p2__45037_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45036_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__45037_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$930,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$912,type,cljs.core.constant$keyword$941,sablono.core.make_name(name),cljs.core.constant$keyword$914,sablono.core.make_id(name),cljs.core.constant$keyword$942,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field45038 = (function() {
var color_field45038 = null;
var color_field45038__1 = (function (name__10239__auto__){return color_field45038.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var color_field45038__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10239__auto__,value__10240__auto__);
});
color_field45038 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return color_field45038__1.call(this,name__10239__auto__);
case 2:
return color_field45038__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field45038.cljs$core$IFn$_invoke$arity$1 = color_field45038__1;
color_field45038.cljs$core$IFn$_invoke$arity$2 = color_field45038__2;
return color_field45038;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field45038);
/**
* Creates a date input field.
*/
sablono.core.date_field45039 = (function() {
var date_field45039 = null;
var date_field45039__1 = (function (name__10239__auto__){return date_field45039.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var date_field45039__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10239__auto__,value__10240__auto__);
});
date_field45039 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return date_field45039__1.call(this,name__10239__auto__);
case 2:
return date_field45039__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field45039.cljs$core$IFn$_invoke$arity$1 = date_field45039__1;
date_field45039.cljs$core$IFn$_invoke$arity$2 = date_field45039__2;
return date_field45039;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field45039);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field45040 = (function() {
var datetime_field45040 = null;
var datetime_field45040__1 = (function (name__10239__auto__){return datetime_field45040.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var datetime_field45040__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10239__auto__,value__10240__auto__);
});
datetime_field45040 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_field45040__1.call(this,name__10239__auto__);
case 2:
return datetime_field45040__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field45040.cljs$core$IFn$_invoke$arity$1 = datetime_field45040__1;
datetime_field45040.cljs$core$IFn$_invoke$arity$2 = datetime_field45040__2;
return datetime_field45040;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field45040);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field45041 = (function() {
var datetime_local_field45041 = null;
var datetime_local_field45041__1 = (function (name__10239__auto__){return datetime_local_field45041.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var datetime_local_field45041__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10239__auto__,value__10240__auto__);
});
datetime_local_field45041 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_local_field45041__1.call(this,name__10239__auto__);
case 2:
return datetime_local_field45041__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field45041.cljs$core$IFn$_invoke$arity$1 = datetime_local_field45041__1;
datetime_local_field45041.cljs$core$IFn$_invoke$arity$2 = datetime_local_field45041__2;
return datetime_local_field45041;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field45041);
/**
* Creates a email input field.
*/
sablono.core.email_field45042 = (function() {
var email_field45042 = null;
var email_field45042__1 = (function (name__10239__auto__){return email_field45042.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var email_field45042__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10239__auto__,value__10240__auto__);
});
email_field45042 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return email_field45042__1.call(this,name__10239__auto__);
case 2:
return email_field45042__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field45042.cljs$core$IFn$_invoke$arity$1 = email_field45042__1;
email_field45042.cljs$core$IFn$_invoke$arity$2 = email_field45042__2;
return email_field45042;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field45042);
/**
* Creates a file input field.
*/
sablono.core.file_field45043 = (function() {
var file_field45043 = null;
var file_field45043__1 = (function (name__10239__auto__){return file_field45043.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var file_field45043__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10239__auto__,value__10240__auto__);
});
file_field45043 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return file_field45043__1.call(this,name__10239__auto__);
case 2:
return file_field45043__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field45043.cljs$core$IFn$_invoke$arity$1 = file_field45043__1;
file_field45043.cljs$core$IFn$_invoke$arity$2 = file_field45043__2;
return file_field45043;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field45043);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field45044 = (function() {
var hidden_field45044 = null;
var hidden_field45044__1 = (function (name__10239__auto__){return hidden_field45044.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var hidden_field45044__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10239__auto__,value__10240__auto__);
});
hidden_field45044 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return hidden_field45044__1.call(this,name__10239__auto__);
case 2:
return hidden_field45044__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field45044.cljs$core$IFn$_invoke$arity$1 = hidden_field45044__1;
hidden_field45044.cljs$core$IFn$_invoke$arity$2 = hidden_field45044__2;
return hidden_field45044;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field45044);
/**
* Creates a month input field.
*/
sablono.core.month_field45045 = (function() {
var month_field45045 = null;
var month_field45045__1 = (function (name__10239__auto__){return month_field45045.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var month_field45045__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10239__auto__,value__10240__auto__);
});
month_field45045 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return month_field45045__1.call(this,name__10239__auto__);
case 2:
return month_field45045__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field45045.cljs$core$IFn$_invoke$arity$1 = month_field45045__1;
month_field45045.cljs$core$IFn$_invoke$arity$2 = month_field45045__2;
return month_field45045;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field45045);
/**
* Creates a number input field.
*/
sablono.core.number_field45046 = (function() {
var number_field45046 = null;
var number_field45046__1 = (function (name__10239__auto__){return number_field45046.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var number_field45046__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10239__auto__,value__10240__auto__);
});
number_field45046 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return number_field45046__1.call(this,name__10239__auto__);
case 2:
return number_field45046__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field45046.cljs$core$IFn$_invoke$arity$1 = number_field45046__1;
number_field45046.cljs$core$IFn$_invoke$arity$2 = number_field45046__2;
return number_field45046;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field45046);
/**
* Creates a password input field.
*/
sablono.core.password_field45047 = (function() {
var password_field45047 = null;
var password_field45047__1 = (function (name__10239__auto__){return password_field45047.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var password_field45047__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10239__auto__,value__10240__auto__);
});
password_field45047 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return password_field45047__1.call(this,name__10239__auto__);
case 2:
return password_field45047__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field45047.cljs$core$IFn$_invoke$arity$1 = password_field45047__1;
password_field45047.cljs$core$IFn$_invoke$arity$2 = password_field45047__2;
return password_field45047;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field45047);
/**
* Creates a range input field.
*/
sablono.core.range_field45048 = (function() {
var range_field45048 = null;
var range_field45048__1 = (function (name__10239__auto__){return range_field45048.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var range_field45048__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10239__auto__,value__10240__auto__);
});
range_field45048 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return range_field45048__1.call(this,name__10239__auto__);
case 2:
return range_field45048__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field45048.cljs$core$IFn$_invoke$arity$1 = range_field45048__1;
range_field45048.cljs$core$IFn$_invoke$arity$2 = range_field45048__2;
return range_field45048;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field45048);
/**
* Creates a search input field.
*/
sablono.core.search_field45049 = (function() {
var search_field45049 = null;
var search_field45049__1 = (function (name__10239__auto__){return search_field45049.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var search_field45049__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10239__auto__,value__10240__auto__);
});
search_field45049 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return search_field45049__1.call(this,name__10239__auto__);
case 2:
return search_field45049__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field45049.cljs$core$IFn$_invoke$arity$1 = search_field45049__1;
search_field45049.cljs$core$IFn$_invoke$arity$2 = search_field45049__2;
return search_field45049;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field45049);
/**
* Creates a tel input field.
*/
sablono.core.tel_field45050 = (function() {
var tel_field45050 = null;
var tel_field45050__1 = (function (name__10239__auto__){return tel_field45050.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var tel_field45050__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10239__auto__,value__10240__auto__);
});
tel_field45050 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return tel_field45050__1.call(this,name__10239__auto__);
case 2:
return tel_field45050__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field45050.cljs$core$IFn$_invoke$arity$1 = tel_field45050__1;
tel_field45050.cljs$core$IFn$_invoke$arity$2 = tel_field45050__2;
return tel_field45050;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field45050);
/**
* Creates a text input field.
*/
sablono.core.text_field45051 = (function() {
var text_field45051 = null;
var text_field45051__1 = (function (name__10239__auto__){return text_field45051.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var text_field45051__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10239__auto__,value__10240__auto__);
});
text_field45051 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return text_field45051__1.call(this,name__10239__auto__);
case 2:
return text_field45051__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field45051.cljs$core$IFn$_invoke$arity$1 = text_field45051__1;
text_field45051.cljs$core$IFn$_invoke$arity$2 = text_field45051__2;
return text_field45051;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field45051);
/**
* Creates a time input field.
*/
sablono.core.time_field45052 = (function() {
var time_field45052 = null;
var time_field45052__1 = (function (name__10239__auto__){return time_field45052.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var time_field45052__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10239__auto__,value__10240__auto__);
});
time_field45052 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return time_field45052__1.call(this,name__10239__auto__);
case 2:
return time_field45052__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field45052.cljs$core$IFn$_invoke$arity$1 = time_field45052__1;
time_field45052.cljs$core$IFn$_invoke$arity$2 = time_field45052__2;
return time_field45052;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field45052);
/**
* Creates a url input field.
*/
sablono.core.url_field45053 = (function() {
var url_field45053 = null;
var url_field45053__1 = (function (name__10239__auto__){return url_field45053.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var url_field45053__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10239__auto__,value__10240__auto__);
});
url_field45053 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return url_field45053__1.call(this,name__10239__auto__);
case 2:
return url_field45053__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field45053.cljs$core$IFn$_invoke$arity$1 = url_field45053__1;
url_field45053.cljs$core$IFn$_invoke$arity$2 = url_field45053__2;
return url_field45053;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field45053);
/**
* Creates a week input field.
*/
sablono.core.week_field45054 = (function() {
var week_field45054 = null;
var week_field45054__1 = (function (name__10239__auto__){return week_field45054.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var week_field45054__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10239__auto__,value__10240__auto__);
});
week_field45054 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return week_field45054__1.call(this,name__10239__auto__);
case 2:
return week_field45054__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field45054.cljs$core$IFn$_invoke$arity$1 = week_field45054__1;
week_field45054.cljs$core$IFn$_invoke$arity$2 = week_field45054__2;
return week_field45054;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field45054);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box45055 = (function() {
var check_box45055 = null;
var check_box45055__1 = (function (name){return check_box45055.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box45055__2 = (function (name,checked_QMARK_){return check_box45055.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box45055__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$930,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$912,"checkbox",cljs.core.constant$keyword$941,sablono.core.make_name(name),cljs.core.constant$keyword$914,sablono.core.make_id(name),cljs.core.constant$keyword$942,value,cljs.core.constant$keyword$943,checked_QMARK_], null)], null);
});
check_box45055 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box45055__1.call(this,name);
case 2:
return check_box45055__2.call(this,name,checked_QMARK_);
case 3:
return check_box45055__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box45055.cljs$core$IFn$_invoke$arity$1 = check_box45055__1;
check_box45055.cljs$core$IFn$_invoke$arity$2 = check_box45055__2;
check_box45055.cljs$core$IFn$_invoke$arity$3 = check_box45055__3;
return check_box45055;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box45055);
/**
* Creates a radio button.
*/
sablono.core.radio_button45056 = (function() {
var radio_button45056 = null;
var radio_button45056__1 = (function (group){return radio_button45056.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button45056__2 = (function (group,checked_QMARK_){return radio_button45056.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button45056__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$930,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$912,"radio",cljs.core.constant$keyword$941,sablono.core.make_name(group),cljs.core.constant$keyword$914,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$942,value,cljs.core.constant$keyword$943,checked_QMARK_], null)], null);
});
radio_button45056 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button45056__1.call(this,group);
case 2:
return radio_button45056__2.call(this,group,checked_QMARK_);
case 3:
return radio_button45056__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button45056.cljs$core$IFn$_invoke$arity$1 = radio_button45056__1;
radio_button45056.cljs$core$IFn$_invoke$arity$2 = radio_button45056__2;
radio_button45056.cljs$core$IFn$_invoke$arity$3 = radio_button45056__3;
return radio_button45056;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button45056);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options45057 = (function() {
var select_options45057 = null;
var select_options45057__1 = (function (coll){return select_options45057.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options45057__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__45066(s__45067){return (new cljs.core.LazySeq(null,(function (){var s__45067__$1 = s__45067;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45067__$1);if(temp__4126__auto__)
{var s__45067__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45067__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45067__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45069 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45068 = (0);while(true){
if((i__45068 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45068);cljs.core.chunk_append(b__45069,((cljs.core.sequential_QMARK_(x))?(function (){var vec__45072 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45072,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45072,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45072,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$944,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$945,text], null),select_options45057.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$929,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$942,val,cljs.core.constant$keyword$946,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$947,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$929,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$946,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__45074 = (i__45068 + (1));
i__45068 = G__45074;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45069),iter__45066(cljs.core.chunk_rest(s__45067__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45069),null);
}
} else
{var x = cljs.core.first(s__45067__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__45073 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45073,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45073,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45073,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$944,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$945,text], null),select_options45057.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$929,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$942,val,cljs.core.constant$keyword$946,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$947,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$929,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$946,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__45066(cljs.core.rest(s__45067__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(coll);
});
select_options45057 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options45057__1.call(this,coll);
case 2:
return select_options45057__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options45057.cljs$core$IFn$_invoke$arity$1 = select_options45057__1;
select_options45057.cljs$core$IFn$_invoke$arity$2 = select_options45057__2;
return select_options45057;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options45057);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down45075 = (function() {
var drop_down45075 = null;
var drop_down45075__2 = (function (name,options){return drop_down45075.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down45075__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$948,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$941,sablono.core.make_name(name),cljs.core.constant$keyword$914,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down45075 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down45075__2.call(this,name,options);
case 3:
return drop_down45075__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down45075.cljs$core$IFn$_invoke$arity$2 = drop_down45075__2;
drop_down45075.cljs$core$IFn$_invoke$arity$3 = drop_down45075__3;
return drop_down45075;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down45075);
/**
* Creates a text area element.
*/
sablono.core.text_area45076 = (function() {
var text_area45076 = null;
var text_area45076__1 = (function (name){return text_area45076.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area45076__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$928,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$941,sablono.core.make_name(name),cljs.core.constant$keyword$914,sablono.core.make_id(name),cljs.core.constant$keyword$942,value], null)], null);
});
text_area45076 = function(name,value){
switch(arguments.length){
case 1:
return text_area45076__1.call(this,name);
case 2:
return text_area45076__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area45076.cljs$core$IFn$_invoke$arity$1 = text_area45076__1;
text_area45076.cljs$core$IFn$_invoke$arity$2 = text_area45076__2;
return text_area45076;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area45076);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label45077 = (function label45077(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$945,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$926,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label45077);
/**
* Creates a submit button.
*/
sablono.core.submit_button45078 = (function submit_button45078(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$930,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$912,"submit",cljs.core.constant$keyword$942,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button45078);
/**
* Creates a form reset button.
*/
sablono.core.reset_button45079 = (function reset_button45079(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$930,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$912,"reset",cljs.core.constant$keyword$942,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button45079);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to45080 = (function() { 
var form_to45080__delegate = function (p__45081,body){var vec__45083 = p__45081;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45083,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45083,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$949,null,cljs.core.constant$keyword$950,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$951,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$895,method_str,cljs.core.constant$keyword$952,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$951,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$895,"POST",cljs.core.constant$keyword$952,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to45080 = function (p__45081,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to45080__delegate.call(this,p__45081,body);};
form_to45080.cljs$lang$maxFixedArity = 1;
form_to45080.cljs$lang$applyTo = (function (arglist__45084){
var p__45081 = cljs.core.first(arglist__45084);
var body = cljs.core.rest(arglist__45084);
return form_to45080__delegate(p__45081,body);
});
form_to45080.cljs$core$IFn$_invoke$arity$variadic = form_to45080__delegate;
return form_to45080;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to45080);
