// Compiled by ClojureScript 0.0-2227
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
var G__39639__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__39638 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39638,0,null);var body = cljs.core.nthnext(vec__39638,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__39639 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__39639__delegate.call(this,args);};
G__39639.cljs$lang$maxFixedArity = 0;
G__39639.cljs$lang$applyTo = (function (arglist__39640){
var args = cljs.core.seq(arglist__39640);
return G__39639__delegate(args);
});
G__39639.cljs$core$IFn$_invoke$arity$variadic = G__39639__delegate;
return G__39639;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4264__auto__ = (function iter__39645(s__39646){return (new cljs.core.LazySeq(null,(function (){var s__39646__$1 = s__39646;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39646__$1);if(temp__4126__auto__)
{var s__39646__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39646__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__39646__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__39648 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__39647 = 0;while(true){
if((i__39647 < size__4263__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__39647);cljs.core.chunk_append(b__39648,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__39649 = (i__39647 + 1);
i__39647 = G__39649;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39648),iter__39645(cljs.core.chunk_rest(s__39646__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39648),null);
}
} else
{var args = cljs.core.first(s__39646__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__39645(cljs.core.rest(s__39646__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__4264__auto__ = (function iter__39654(s__39655){return (new cljs.core.LazySeq(null,(function (){var s__39655__$1 = s__39655;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39655__$1);if(temp__4126__auto__)
{var s__39655__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39655__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__39655__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__39657 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__39656 = 0;while(true){
if((i__39656 < size__4263__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__39656);cljs.core.chunk_append(b__39657,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$633,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$612,"text/css",cljs.core.constant$keyword$634,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$635,"stylesheet"], null)], null));
{
var G__39658 = (i__39656 + 1);
i__39656 = G__39658;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39657),iter__39654(cljs.core.chunk_rest(s__39655__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39657),null);
}
} else
{var style = cljs.core.first(s__39655__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$633,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$612,"text/css",cljs.core.constant$keyword$634,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$635,"stylesheet"], null)], null),iter__39654(cljs.core.rest(s__39655__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__39659){
var styles = cljs.core.seq(arglist__39659);
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
sablono.core.link_to39660 = (function() { 
var link_to39660__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$636,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$634,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to39660 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to39660__delegate.call(this,url,content);};
link_to39660.cljs$lang$maxFixedArity = 1;
link_to39660.cljs$lang$applyTo = (function (arglist__39661){
var url = cljs.core.first(arglist__39661);
var content = cljs.core.rest(arglist__39661);
return link_to39660__delegate(url,content);
});
link_to39660.cljs$core$IFn$_invoke$arity$variadic = link_to39660__delegate;
return link_to39660;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to39660);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to39662 = (function() { 
var mail_to39662__delegate = function (e_mail,p__39663){var vec__39665 = p__39663;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39665,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$636,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$634,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3539__auto__ = content;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to39662 = function (e_mail,var_args){
var p__39663 = null;if (arguments.length > 1) {
  p__39663 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to39662__delegate.call(this,e_mail,p__39663);};
mail_to39662.cljs$lang$maxFixedArity = 1;
mail_to39662.cljs$lang$applyTo = (function (arglist__39666){
var e_mail = cljs.core.first(arglist__39666);
var p__39663 = cljs.core.rest(arglist__39666);
return mail_to39662__delegate(e_mail,p__39663);
});
mail_to39662.cljs$core$IFn$_invoke$arity$variadic = mail_to39662__delegate;
return mail_to39662;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to39662);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list39667 = (function unordered_list39667(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$637,(function (){var iter__4264__auto__ = (function iter__39672(s__39673){return (new cljs.core.LazySeq(null,(function (){var s__39673__$1 = s__39673;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39673__$1);if(temp__4126__auto__)
{var s__39673__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39673__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__39673__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__39675 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__39674 = 0;while(true){
if((i__39674 < size__4263__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__39674);cljs.core.chunk_append(b__39675,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,x], null));
{
var G__39676 = (i__39674 + 1);
i__39674 = G__39676;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39675),iter__39672(cljs.core.chunk_rest(s__39673__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39675),null);
}
} else
{var x = cljs.core.first(s__39673__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,x], null),iter__39672(cljs.core.rest(s__39673__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list39667);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list39677 = (function ordered_list39677(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$639,(function (){var iter__4264__auto__ = (function iter__39682(s__39683){return (new cljs.core.LazySeq(null,(function (){var s__39683__$1 = s__39683;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39683__$1);if(temp__4126__auto__)
{var s__39683__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39683__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__39683__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__39685 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__39684 = 0;while(true){
if((i__39684 < size__4263__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__39684);cljs.core.chunk_append(b__39685,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,x], null));
{
var G__39686 = (i__39684 + 1);
i__39684 = G__39686;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39685),iter__39682(cljs.core.chunk_rest(s__39683__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39685),null);
}
} else
{var x = cljs.core.first(s__39683__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,x], null),iter__39682(cljs.core.rest(s__39683__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list39677);
/**
* Create an image element.
*/
sablono.core.image39687 = (function() {
var image39687 = null;
var image39687__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$641,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image39687__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$641,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$642,alt], null)], null);
});
image39687 = function(src,alt){
switch(arguments.length){
case 1:
return image39687__1.call(this,src);
case 2:
return image39687__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image39687.cljs$core$IFn$_invoke$arity$1 = image39687__1;
image39687.cljs$core$IFn$_invoke$arity$2 = image39687__2;
return image39687;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image39687);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39688_SHARP_,p2__39689_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39688_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__39689_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39690_SHARP_,p2__39691_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39690_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__39691_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$632,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$612,type,cljs.core.constant$keyword$643,sablono.core.make_name(name),cljs.core.constant$keyword$614,sablono.core.make_id(name),cljs.core.constant$keyword$583,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field39692 = (function() {
var color_field39692 = null;
var color_field39692__1 = (function (name__10089__auto__){return color_field39692.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var color_field39692__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__10089__auto__,value__10090__auto__);
});
color_field39692 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return color_field39692__1.call(this,name__10089__auto__);
case 2:
return color_field39692__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field39692.cljs$core$IFn$_invoke$arity$1 = color_field39692__1;
color_field39692.cljs$core$IFn$_invoke$arity$2 = color_field39692__2;
return color_field39692;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field39692);
/**
* Creates a date input field.
*/
sablono.core.date_field39693 = (function() {
var date_field39693 = null;
var date_field39693__1 = (function (name__10089__auto__){return date_field39693.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var date_field39693__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__10089__auto__,value__10090__auto__);
});
date_field39693 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return date_field39693__1.call(this,name__10089__auto__);
case 2:
return date_field39693__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field39693.cljs$core$IFn$_invoke$arity$1 = date_field39693__1;
date_field39693.cljs$core$IFn$_invoke$arity$2 = date_field39693__2;
return date_field39693;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field39693);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field39694 = (function() {
var datetime_field39694 = null;
var datetime_field39694__1 = (function (name__10089__auto__){return datetime_field39694.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var datetime_field39694__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__10089__auto__,value__10090__auto__);
});
datetime_field39694 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_field39694__1.call(this,name__10089__auto__);
case 2:
return datetime_field39694__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field39694.cljs$core$IFn$_invoke$arity$1 = datetime_field39694__1;
datetime_field39694.cljs$core$IFn$_invoke$arity$2 = datetime_field39694__2;
return datetime_field39694;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field39694);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field39695 = (function() {
var datetime_local_field39695 = null;
var datetime_local_field39695__1 = (function (name__10089__auto__){return datetime_local_field39695.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var datetime_local_field39695__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__10089__auto__,value__10090__auto__);
});
datetime_local_field39695 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_local_field39695__1.call(this,name__10089__auto__);
case 2:
return datetime_local_field39695__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field39695.cljs$core$IFn$_invoke$arity$1 = datetime_local_field39695__1;
datetime_local_field39695.cljs$core$IFn$_invoke$arity$2 = datetime_local_field39695__2;
return datetime_local_field39695;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field39695);
/**
* Creates a email input field.
*/
sablono.core.email_field39696 = (function() {
var email_field39696 = null;
var email_field39696__1 = (function (name__10089__auto__){return email_field39696.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var email_field39696__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__10089__auto__,value__10090__auto__);
});
email_field39696 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return email_field39696__1.call(this,name__10089__auto__);
case 2:
return email_field39696__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field39696.cljs$core$IFn$_invoke$arity$1 = email_field39696__1;
email_field39696.cljs$core$IFn$_invoke$arity$2 = email_field39696__2;
return email_field39696;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field39696);
/**
* Creates a file input field.
*/
sablono.core.file_field39697 = (function() {
var file_field39697 = null;
var file_field39697__1 = (function (name__10089__auto__){return file_field39697.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var file_field39697__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__10089__auto__,value__10090__auto__);
});
file_field39697 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return file_field39697__1.call(this,name__10089__auto__);
case 2:
return file_field39697__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field39697.cljs$core$IFn$_invoke$arity$1 = file_field39697__1;
file_field39697.cljs$core$IFn$_invoke$arity$2 = file_field39697__2;
return file_field39697;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field39697);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field39698 = (function() {
var hidden_field39698 = null;
var hidden_field39698__1 = (function (name__10089__auto__){return hidden_field39698.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var hidden_field39698__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__10089__auto__,value__10090__auto__);
});
hidden_field39698 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return hidden_field39698__1.call(this,name__10089__auto__);
case 2:
return hidden_field39698__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field39698.cljs$core$IFn$_invoke$arity$1 = hidden_field39698__1;
hidden_field39698.cljs$core$IFn$_invoke$arity$2 = hidden_field39698__2;
return hidden_field39698;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field39698);
/**
* Creates a month input field.
*/
sablono.core.month_field39699 = (function() {
var month_field39699 = null;
var month_field39699__1 = (function (name__10089__auto__){return month_field39699.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var month_field39699__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__10089__auto__,value__10090__auto__);
});
month_field39699 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return month_field39699__1.call(this,name__10089__auto__);
case 2:
return month_field39699__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field39699.cljs$core$IFn$_invoke$arity$1 = month_field39699__1;
month_field39699.cljs$core$IFn$_invoke$arity$2 = month_field39699__2;
return month_field39699;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field39699);
/**
* Creates a number input field.
*/
sablono.core.number_field39700 = (function() {
var number_field39700 = null;
var number_field39700__1 = (function (name__10089__auto__){return number_field39700.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var number_field39700__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__10089__auto__,value__10090__auto__);
});
number_field39700 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return number_field39700__1.call(this,name__10089__auto__);
case 2:
return number_field39700__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field39700.cljs$core$IFn$_invoke$arity$1 = number_field39700__1;
number_field39700.cljs$core$IFn$_invoke$arity$2 = number_field39700__2;
return number_field39700;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field39700);
/**
* Creates a password input field.
*/
sablono.core.password_field39701 = (function() {
var password_field39701 = null;
var password_field39701__1 = (function (name__10089__auto__){return password_field39701.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var password_field39701__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__10089__auto__,value__10090__auto__);
});
password_field39701 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return password_field39701__1.call(this,name__10089__auto__);
case 2:
return password_field39701__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field39701.cljs$core$IFn$_invoke$arity$1 = password_field39701__1;
password_field39701.cljs$core$IFn$_invoke$arity$2 = password_field39701__2;
return password_field39701;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field39701);
/**
* Creates a range input field.
*/
sablono.core.range_field39702 = (function() {
var range_field39702 = null;
var range_field39702__1 = (function (name__10089__auto__){return range_field39702.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var range_field39702__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__10089__auto__,value__10090__auto__);
});
range_field39702 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return range_field39702__1.call(this,name__10089__auto__);
case 2:
return range_field39702__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field39702.cljs$core$IFn$_invoke$arity$1 = range_field39702__1;
range_field39702.cljs$core$IFn$_invoke$arity$2 = range_field39702__2;
return range_field39702;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field39702);
/**
* Creates a search input field.
*/
sablono.core.search_field39703 = (function() {
var search_field39703 = null;
var search_field39703__1 = (function (name__10089__auto__){return search_field39703.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var search_field39703__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__10089__auto__,value__10090__auto__);
});
search_field39703 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return search_field39703__1.call(this,name__10089__auto__);
case 2:
return search_field39703__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field39703.cljs$core$IFn$_invoke$arity$1 = search_field39703__1;
search_field39703.cljs$core$IFn$_invoke$arity$2 = search_field39703__2;
return search_field39703;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field39703);
/**
* Creates a tel input field.
*/
sablono.core.tel_field39704 = (function() {
var tel_field39704 = null;
var tel_field39704__1 = (function (name__10089__auto__){return tel_field39704.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var tel_field39704__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__10089__auto__,value__10090__auto__);
});
tel_field39704 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return tel_field39704__1.call(this,name__10089__auto__);
case 2:
return tel_field39704__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field39704.cljs$core$IFn$_invoke$arity$1 = tel_field39704__1;
tel_field39704.cljs$core$IFn$_invoke$arity$2 = tel_field39704__2;
return tel_field39704;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field39704);
/**
* Creates a text input field.
*/
sablono.core.text_field39705 = (function() {
var text_field39705 = null;
var text_field39705__1 = (function (name__10089__auto__){return text_field39705.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var text_field39705__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__10089__auto__,value__10090__auto__);
});
text_field39705 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return text_field39705__1.call(this,name__10089__auto__);
case 2:
return text_field39705__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field39705.cljs$core$IFn$_invoke$arity$1 = text_field39705__1;
text_field39705.cljs$core$IFn$_invoke$arity$2 = text_field39705__2;
return text_field39705;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field39705);
/**
* Creates a time input field.
*/
sablono.core.time_field39706 = (function() {
var time_field39706 = null;
var time_field39706__1 = (function (name__10089__auto__){return time_field39706.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var time_field39706__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__10089__auto__,value__10090__auto__);
});
time_field39706 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return time_field39706__1.call(this,name__10089__auto__);
case 2:
return time_field39706__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field39706.cljs$core$IFn$_invoke$arity$1 = time_field39706__1;
time_field39706.cljs$core$IFn$_invoke$arity$2 = time_field39706__2;
return time_field39706;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field39706);
/**
* Creates a url input field.
*/
sablono.core.url_field39707 = (function() {
var url_field39707 = null;
var url_field39707__1 = (function (name__10089__auto__){return url_field39707.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var url_field39707__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__10089__auto__,value__10090__auto__);
});
url_field39707 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return url_field39707__1.call(this,name__10089__auto__);
case 2:
return url_field39707__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field39707.cljs$core$IFn$_invoke$arity$1 = url_field39707__1;
url_field39707.cljs$core$IFn$_invoke$arity$2 = url_field39707__2;
return url_field39707;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field39707);
/**
* Creates a week input field.
*/
sablono.core.week_field39708 = (function() {
var week_field39708 = null;
var week_field39708__1 = (function (name__10089__auto__){return week_field39708.cljs$core$IFn$_invoke$arity$2(name__10089__auto__,null);
});
var week_field39708__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__10089__auto__,value__10090__auto__);
});
week_field39708 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return week_field39708__1.call(this,name__10089__auto__);
case 2:
return week_field39708__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field39708.cljs$core$IFn$_invoke$arity$1 = week_field39708__1;
week_field39708.cljs$core$IFn$_invoke$arity$2 = week_field39708__2;
return week_field39708;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field39708);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box39709 = (function() {
var check_box39709 = null;
var check_box39709__1 = (function (name){return check_box39709.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box39709__2 = (function (name,checked_QMARK_){return check_box39709.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box39709__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$632,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$612,"checkbox",cljs.core.constant$keyword$643,sablono.core.make_name(name),cljs.core.constant$keyword$614,sablono.core.make_id(name),cljs.core.constant$keyword$583,value,cljs.core.constant$keyword$644,checked_QMARK_], null)], null);
});
check_box39709 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box39709__1.call(this,name);
case 2:
return check_box39709__2.call(this,name,checked_QMARK_);
case 3:
return check_box39709__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box39709.cljs$core$IFn$_invoke$arity$1 = check_box39709__1;
check_box39709.cljs$core$IFn$_invoke$arity$2 = check_box39709__2;
check_box39709.cljs$core$IFn$_invoke$arity$3 = check_box39709__3;
return check_box39709;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box39709);
/**
* Creates a radio button.
*/
sablono.core.radio_button39710 = (function() {
var radio_button39710 = null;
var radio_button39710__1 = (function (group){return radio_button39710.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button39710__2 = (function (group,checked_QMARK_){return radio_button39710.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button39710__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$632,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$612,"radio",cljs.core.constant$keyword$643,sablono.core.make_name(group),cljs.core.constant$keyword$614,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$583,value,cljs.core.constant$keyword$644,checked_QMARK_], null)], null);
});
radio_button39710 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button39710__1.call(this,group);
case 2:
return radio_button39710__2.call(this,group,checked_QMARK_);
case 3:
return radio_button39710__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button39710.cljs$core$IFn$_invoke$arity$1 = radio_button39710__1;
radio_button39710.cljs$core$IFn$_invoke$arity$2 = radio_button39710__2;
radio_button39710.cljs$core$IFn$_invoke$arity$3 = radio_button39710__3;
return radio_button39710;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button39710);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options39711 = (function() {
var select_options39711 = null;
var select_options39711__1 = (function (coll){return select_options39711.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options39711__2 = (function (coll,selected){var iter__4264__auto__ = (function iter__39720(s__39721){return (new cljs.core.LazySeq(null,(function (){var s__39721__$1 = s__39721;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39721__$1);if(temp__4126__auto__)
{var s__39721__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39721__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__39721__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__39723 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__39722 = 0;while(true){
if((i__39722 < size__4263__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__39722);cljs.core.chunk_append(b__39723,((cljs.core.sequential_QMARK_(x))?(function (){var vec__39726 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39726,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39726,1,null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39726,2,null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$645,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$646,text], null),select_options39711.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$647,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$583,val,cljs.core.constant$keyword$648,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$649,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$647,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__39728 = (i__39722 + 1);
i__39722 = G__39728;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39723),iter__39720(cljs.core.chunk_rest(s__39721__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39723),null);
}
} else
{var x = cljs.core.first(s__39721__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__39727 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39727,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39727,1,null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39727,2,null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$645,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$646,text], null),select_options39711.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$647,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$583,val,cljs.core.constant$keyword$648,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$649,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$647,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__39720(cljs.core.rest(s__39721__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__(coll);
});
select_options39711 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options39711__1.call(this,coll);
case 2:
return select_options39711__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options39711.cljs$core$IFn$_invoke$arity$1 = select_options39711__1;
select_options39711.cljs$core$IFn$_invoke$arity$2 = select_options39711__2;
return select_options39711;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options39711);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down39729 = (function() {
var drop_down39729 = null;
var drop_down39729__2 = (function (name,options){return drop_down39729.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down39729__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$650,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$643,sablono.core.make_name(name),cljs.core.constant$keyword$614,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down39729 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down39729__2.call(this,name,options);
case 3:
return drop_down39729__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down39729.cljs$core$IFn$_invoke$arity$2 = drop_down39729__2;
drop_down39729.cljs$core$IFn$_invoke$arity$3 = drop_down39729__3;
return drop_down39729;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down39729);
/**
* Creates a text area element.
*/
sablono.core.text_area39730 = (function() {
var text_area39730 = null;
var text_area39730__1 = (function (name){return text_area39730.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area39730__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$631,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$643,sablono.core.make_name(name),cljs.core.constant$keyword$614,sablono.core.make_id(name),cljs.core.constant$keyword$583,value], null)], null);
});
text_area39730 = function(name,value){
switch(arguments.length){
case 1:
return text_area39730__1.call(this,name);
case 2:
return text_area39730__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area39730.cljs$core$IFn$_invoke$arity$1 = text_area39730__1;
text_area39730.cljs$core$IFn$_invoke$arity$2 = text_area39730__2;
return text_area39730;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area39730);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label39731 = (function label39731(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$646,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$628,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label39731);
/**
* Creates a submit button.
*/
sablono.core.submit_button39732 = (function submit_button39732(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$632,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$612,"submit",cljs.core.constant$keyword$583,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button39732);
/**
* Creates a form reset button.
*/
sablono.core.reset_button39733 = (function reset_button39733(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$632,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$612,"reset",cljs.core.constant$keyword$583,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button39733);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to39734 = (function() { 
var form_to39734__delegate = function (p__39735,body){var vec__39737 = p__39735;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39737,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39737,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$651,null,cljs.core.constant$keyword$652,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$653,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$654,method_str,cljs.core.constant$keyword$655,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$653,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$654,"POST",cljs.core.constant$keyword$655,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to39734 = function (p__39735,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to39734__delegate.call(this,p__39735,body);};
form_to39734.cljs$lang$maxFixedArity = 1;
form_to39734.cljs$lang$applyTo = (function (arglist__39738){
var p__39735 = cljs.core.first(arglist__39738);
var body = cljs.core.rest(arglist__39738);
return form_to39734__delegate(p__39735,body);
});
form_to39734.cljs$core$IFn$_invoke$arity$variadic = form_to39734__delegate;
return form_to39734;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to39734);
