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
var G__43692__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__43691 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43691,(0),null);var body = cljs.core.nthnext(vec__43691,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__43692 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__43692__delegate.call(this,args);};
G__43692.cljs$lang$maxFixedArity = 0;
G__43692.cljs$lang$applyTo = (function (arglist__43693){
var args = cljs.core.seq(arglist__43693);
return G__43692__delegate(args);
});
G__43692.cljs$core$IFn$_invoke$arity$variadic = G__43692__delegate;
return G__43692;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__43698(s__43699){return (new cljs.core.LazySeq(null,(function (){var s__43699__$1 = s__43699;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43699__$1);if(temp__4126__auto__)
{var s__43699__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43699__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__43699__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__43701 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__43700 = (0);while(true){
if((i__43700 < size__4282__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__43700);cljs.core.chunk_append(b__43701,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__43702 = (i__43700 + (1));
i__43700 = G__43702;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43701),iter__43698(cljs.core.chunk_rest(s__43699__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43701),null);
}
} else
{var args = cljs.core.first(s__43699__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__43698(cljs.core.rest(s__43699__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__43707(s__43708){return (new cljs.core.LazySeq(null,(function (){var s__43708__$1 = s__43708;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43708__$1);if(temp__4126__auto__)
{var s__43708__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43708__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__43708__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__43710 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__43709 = (0);while(true){
if((i__43709 < size__4282__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__43709);cljs.core.chunk_append(b__43710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$893,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$871,"text/css",cljs.core.constant$keyword$894,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$895,"stylesheet"], null)], null));
{
var G__43711 = (i__43709 + (1));
i__43709 = G__43711;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43710),iter__43707(cljs.core.chunk_rest(s__43708__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43710),null);
}
} else
{var style = cljs.core.first(s__43708__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$893,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$871,"text/css",cljs.core.constant$keyword$894,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$895,"stylesheet"], null)], null),iter__43707(cljs.core.rest(s__43708__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__43712){
var styles = cljs.core.seq(arglist__43712);
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
sablono.core.link_to43713 = (function() { 
var link_to43713__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$896,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$894,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to43713 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to43713__delegate.call(this,url,content);};
link_to43713.cljs$lang$maxFixedArity = 1;
link_to43713.cljs$lang$applyTo = (function (arglist__43714){
var url = cljs.core.first(arglist__43714);
var content = cljs.core.rest(arglist__43714);
return link_to43713__delegate(url,content);
});
link_to43713.cljs$core$IFn$_invoke$arity$variadic = link_to43713__delegate;
return link_to43713;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to43713);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to43715 = (function() { 
var mail_to43715__delegate = function (e_mail,p__43716){var vec__43718 = p__43716;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43718,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$896,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$894,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to43715 = function (e_mail,var_args){
var p__43716 = null;if (arguments.length > 1) {
  p__43716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to43715__delegate.call(this,e_mail,p__43716);};
mail_to43715.cljs$lang$maxFixedArity = 1;
mail_to43715.cljs$lang$applyTo = (function (arglist__43719){
var e_mail = cljs.core.first(arglist__43719);
var p__43716 = cljs.core.rest(arglist__43719);
return mail_to43715__delegate(e_mail,p__43716);
});
mail_to43715.cljs$core$IFn$_invoke$arity$variadic = mail_to43715__delegate;
return mail_to43715;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to43715);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list43720 = (function unordered_list43720(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$897,(function (){var iter__4283__auto__ = (function iter__43725(s__43726){return (new cljs.core.LazySeq(null,(function (){var s__43726__$1 = s__43726;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43726__$1);if(temp__4126__auto__)
{var s__43726__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43726__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__43726__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__43728 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__43727 = (0);while(true){
if((i__43727 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__43727);cljs.core.chunk_append(b__43728,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$898,x], null));
{
var G__43729 = (i__43727 + (1));
i__43727 = G__43729;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43728),iter__43725(cljs.core.chunk_rest(s__43726__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43728),null);
}
} else
{var x = cljs.core.first(s__43726__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$898,x], null),iter__43725(cljs.core.rest(s__43726__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list43720);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list43730 = (function ordered_list43730(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$899,(function (){var iter__4283__auto__ = (function iter__43735(s__43736){return (new cljs.core.LazySeq(null,(function (){var s__43736__$1 = s__43736;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43736__$1);if(temp__4126__auto__)
{var s__43736__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43736__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__43736__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__43738 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__43737 = (0);while(true){
if((i__43737 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__43737);cljs.core.chunk_append(b__43738,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$898,x], null));
{
var G__43739 = (i__43737 + (1));
i__43737 = G__43739;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43738),iter__43735(cljs.core.chunk_rest(s__43736__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43738),null);
}
} else
{var x = cljs.core.first(s__43736__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$898,x], null),iter__43735(cljs.core.rest(s__43736__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list43730);
/**
* Create an image element.
*/
sablono.core.image43740 = (function() {
var image43740 = null;
var image43740__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$900,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$901,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image43740__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$900,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$901,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$902,alt], null)], null);
});
image43740 = function(src,alt){
switch(arguments.length){
case 1:
return image43740__1.call(this,src);
case 2:
return image43740__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image43740.cljs$core$IFn$_invoke$arity$1 = image43740__1;
image43740.cljs$core$IFn$_invoke$arity$2 = image43740__2;
return image43740;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image43740);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__43741_SHARP_,p2__43742_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43741_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__43742_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__43743_SHARP_,p2__43744_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43743_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__43744_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$871,type,cljs.core.constant$keyword$903,sablono.core.make_name(name),cljs.core.constant$keyword$873,sablono.core.make_id(name),cljs.core.constant$keyword$904,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field43745 = (function() {
var color_field43745 = null;
var color_field43745__1 = (function (name__10286__auto__){return color_field43745.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var color_field43745__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10286__auto__,value__10287__auto__);
});
color_field43745 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return color_field43745__1.call(this,name__10286__auto__);
case 2:
return color_field43745__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field43745.cljs$core$IFn$_invoke$arity$1 = color_field43745__1;
color_field43745.cljs$core$IFn$_invoke$arity$2 = color_field43745__2;
return color_field43745;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field43745);
/**
* Creates a date input field.
*/
sablono.core.date_field43746 = (function() {
var date_field43746 = null;
var date_field43746__1 = (function (name__10286__auto__){return date_field43746.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var date_field43746__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10286__auto__,value__10287__auto__);
});
date_field43746 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return date_field43746__1.call(this,name__10286__auto__);
case 2:
return date_field43746__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field43746.cljs$core$IFn$_invoke$arity$1 = date_field43746__1;
date_field43746.cljs$core$IFn$_invoke$arity$2 = date_field43746__2;
return date_field43746;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field43746);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field43747 = (function() {
var datetime_field43747 = null;
var datetime_field43747__1 = (function (name__10286__auto__){return datetime_field43747.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var datetime_field43747__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10286__auto__,value__10287__auto__);
});
datetime_field43747 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_field43747__1.call(this,name__10286__auto__);
case 2:
return datetime_field43747__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field43747.cljs$core$IFn$_invoke$arity$1 = datetime_field43747__1;
datetime_field43747.cljs$core$IFn$_invoke$arity$2 = datetime_field43747__2;
return datetime_field43747;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field43747);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field43748 = (function() {
var datetime_local_field43748 = null;
var datetime_local_field43748__1 = (function (name__10286__auto__){return datetime_local_field43748.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var datetime_local_field43748__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10286__auto__,value__10287__auto__);
});
datetime_local_field43748 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_local_field43748__1.call(this,name__10286__auto__);
case 2:
return datetime_local_field43748__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field43748.cljs$core$IFn$_invoke$arity$1 = datetime_local_field43748__1;
datetime_local_field43748.cljs$core$IFn$_invoke$arity$2 = datetime_local_field43748__2;
return datetime_local_field43748;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field43748);
/**
* Creates a email input field.
*/
sablono.core.email_field43749 = (function() {
var email_field43749 = null;
var email_field43749__1 = (function (name__10286__auto__){return email_field43749.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var email_field43749__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10286__auto__,value__10287__auto__);
});
email_field43749 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return email_field43749__1.call(this,name__10286__auto__);
case 2:
return email_field43749__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field43749.cljs$core$IFn$_invoke$arity$1 = email_field43749__1;
email_field43749.cljs$core$IFn$_invoke$arity$2 = email_field43749__2;
return email_field43749;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field43749);
/**
* Creates a file input field.
*/
sablono.core.file_field43750 = (function() {
var file_field43750 = null;
var file_field43750__1 = (function (name__10286__auto__){return file_field43750.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var file_field43750__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10286__auto__,value__10287__auto__);
});
file_field43750 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return file_field43750__1.call(this,name__10286__auto__);
case 2:
return file_field43750__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field43750.cljs$core$IFn$_invoke$arity$1 = file_field43750__1;
file_field43750.cljs$core$IFn$_invoke$arity$2 = file_field43750__2;
return file_field43750;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field43750);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field43751 = (function() {
var hidden_field43751 = null;
var hidden_field43751__1 = (function (name__10286__auto__){return hidden_field43751.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var hidden_field43751__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10286__auto__,value__10287__auto__);
});
hidden_field43751 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return hidden_field43751__1.call(this,name__10286__auto__);
case 2:
return hidden_field43751__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field43751.cljs$core$IFn$_invoke$arity$1 = hidden_field43751__1;
hidden_field43751.cljs$core$IFn$_invoke$arity$2 = hidden_field43751__2;
return hidden_field43751;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field43751);
/**
* Creates a month input field.
*/
sablono.core.month_field43752 = (function() {
var month_field43752 = null;
var month_field43752__1 = (function (name__10286__auto__){return month_field43752.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var month_field43752__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10286__auto__,value__10287__auto__);
});
month_field43752 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return month_field43752__1.call(this,name__10286__auto__);
case 2:
return month_field43752__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field43752.cljs$core$IFn$_invoke$arity$1 = month_field43752__1;
month_field43752.cljs$core$IFn$_invoke$arity$2 = month_field43752__2;
return month_field43752;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field43752);
/**
* Creates a number input field.
*/
sablono.core.number_field43753 = (function() {
var number_field43753 = null;
var number_field43753__1 = (function (name__10286__auto__){return number_field43753.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var number_field43753__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10286__auto__,value__10287__auto__);
});
number_field43753 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return number_field43753__1.call(this,name__10286__auto__);
case 2:
return number_field43753__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field43753.cljs$core$IFn$_invoke$arity$1 = number_field43753__1;
number_field43753.cljs$core$IFn$_invoke$arity$2 = number_field43753__2;
return number_field43753;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field43753);
/**
* Creates a password input field.
*/
sablono.core.password_field43754 = (function() {
var password_field43754 = null;
var password_field43754__1 = (function (name__10286__auto__){return password_field43754.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var password_field43754__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10286__auto__,value__10287__auto__);
});
password_field43754 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return password_field43754__1.call(this,name__10286__auto__);
case 2:
return password_field43754__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field43754.cljs$core$IFn$_invoke$arity$1 = password_field43754__1;
password_field43754.cljs$core$IFn$_invoke$arity$2 = password_field43754__2;
return password_field43754;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field43754);
/**
* Creates a range input field.
*/
sablono.core.range_field43755 = (function() {
var range_field43755 = null;
var range_field43755__1 = (function (name__10286__auto__){return range_field43755.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var range_field43755__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10286__auto__,value__10287__auto__);
});
range_field43755 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return range_field43755__1.call(this,name__10286__auto__);
case 2:
return range_field43755__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field43755.cljs$core$IFn$_invoke$arity$1 = range_field43755__1;
range_field43755.cljs$core$IFn$_invoke$arity$2 = range_field43755__2;
return range_field43755;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field43755);
/**
* Creates a search input field.
*/
sablono.core.search_field43756 = (function() {
var search_field43756 = null;
var search_field43756__1 = (function (name__10286__auto__){return search_field43756.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var search_field43756__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10286__auto__,value__10287__auto__);
});
search_field43756 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return search_field43756__1.call(this,name__10286__auto__);
case 2:
return search_field43756__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field43756.cljs$core$IFn$_invoke$arity$1 = search_field43756__1;
search_field43756.cljs$core$IFn$_invoke$arity$2 = search_field43756__2;
return search_field43756;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field43756);
/**
* Creates a tel input field.
*/
sablono.core.tel_field43757 = (function() {
var tel_field43757 = null;
var tel_field43757__1 = (function (name__10286__auto__){return tel_field43757.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var tel_field43757__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10286__auto__,value__10287__auto__);
});
tel_field43757 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return tel_field43757__1.call(this,name__10286__auto__);
case 2:
return tel_field43757__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field43757.cljs$core$IFn$_invoke$arity$1 = tel_field43757__1;
tel_field43757.cljs$core$IFn$_invoke$arity$2 = tel_field43757__2;
return tel_field43757;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field43757);
/**
* Creates a text input field.
*/
sablono.core.text_field43758 = (function() {
var text_field43758 = null;
var text_field43758__1 = (function (name__10286__auto__){return text_field43758.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var text_field43758__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10286__auto__,value__10287__auto__);
});
text_field43758 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return text_field43758__1.call(this,name__10286__auto__);
case 2:
return text_field43758__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field43758.cljs$core$IFn$_invoke$arity$1 = text_field43758__1;
text_field43758.cljs$core$IFn$_invoke$arity$2 = text_field43758__2;
return text_field43758;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field43758);
/**
* Creates a time input field.
*/
sablono.core.time_field43759 = (function() {
var time_field43759 = null;
var time_field43759__1 = (function (name__10286__auto__){return time_field43759.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var time_field43759__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10286__auto__,value__10287__auto__);
});
time_field43759 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return time_field43759__1.call(this,name__10286__auto__);
case 2:
return time_field43759__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field43759.cljs$core$IFn$_invoke$arity$1 = time_field43759__1;
time_field43759.cljs$core$IFn$_invoke$arity$2 = time_field43759__2;
return time_field43759;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field43759);
/**
* Creates a url input field.
*/
sablono.core.url_field43760 = (function() {
var url_field43760 = null;
var url_field43760__1 = (function (name__10286__auto__){return url_field43760.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var url_field43760__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10286__auto__,value__10287__auto__);
});
url_field43760 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return url_field43760__1.call(this,name__10286__auto__);
case 2:
return url_field43760__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field43760.cljs$core$IFn$_invoke$arity$1 = url_field43760__1;
url_field43760.cljs$core$IFn$_invoke$arity$2 = url_field43760__2;
return url_field43760;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field43760);
/**
* Creates a week input field.
*/
sablono.core.week_field43761 = (function() {
var week_field43761 = null;
var week_field43761__1 = (function (name__10286__auto__){return week_field43761.cljs$core$IFn$_invoke$arity$2(name__10286__auto__,null);
});
var week_field43761__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10286__auto__,value__10287__auto__);
});
week_field43761 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return week_field43761__1.call(this,name__10286__auto__);
case 2:
return week_field43761__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field43761.cljs$core$IFn$_invoke$arity$1 = week_field43761__1;
week_field43761.cljs$core$IFn$_invoke$arity$2 = week_field43761__2;
return week_field43761;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field43761);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box43762 = (function() {
var check_box43762 = null;
var check_box43762__1 = (function (name){return check_box43762.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box43762__2 = (function (name,checked_QMARK_){return check_box43762.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box43762__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$871,"checkbox",cljs.core.constant$keyword$903,sablono.core.make_name(name),cljs.core.constant$keyword$873,sablono.core.make_id(name),cljs.core.constant$keyword$904,value,cljs.core.constant$keyword$905,checked_QMARK_], null)], null);
});
check_box43762 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box43762__1.call(this,name);
case 2:
return check_box43762__2.call(this,name,checked_QMARK_);
case 3:
return check_box43762__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box43762.cljs$core$IFn$_invoke$arity$1 = check_box43762__1;
check_box43762.cljs$core$IFn$_invoke$arity$2 = check_box43762__2;
check_box43762.cljs$core$IFn$_invoke$arity$3 = check_box43762__3;
return check_box43762;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box43762);
/**
* Creates a radio button.
*/
sablono.core.radio_button43763 = (function() {
var radio_button43763 = null;
var radio_button43763__1 = (function (group){return radio_button43763.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button43763__2 = (function (group,checked_QMARK_){return radio_button43763.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button43763__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$871,"radio",cljs.core.constant$keyword$903,sablono.core.make_name(group),cljs.core.constant$keyword$873,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$904,value,cljs.core.constant$keyword$905,checked_QMARK_], null)], null);
});
radio_button43763 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button43763__1.call(this,group);
case 2:
return radio_button43763__2.call(this,group,checked_QMARK_);
case 3:
return radio_button43763__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button43763.cljs$core$IFn$_invoke$arity$1 = radio_button43763__1;
radio_button43763.cljs$core$IFn$_invoke$arity$2 = radio_button43763__2;
radio_button43763.cljs$core$IFn$_invoke$arity$3 = radio_button43763__3;
return radio_button43763;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button43763);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options43764 = (function() {
var select_options43764 = null;
var select_options43764__1 = (function (coll){return select_options43764.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options43764__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__43773(s__43774){return (new cljs.core.LazySeq(null,(function (){var s__43774__$1 = s__43774;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43774__$1);if(temp__4126__auto__)
{var s__43774__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43774__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__43774__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__43776 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__43775 = (0);while(true){
if((i__43775 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__43775);cljs.core.chunk_append(b__43776,((cljs.core.sequential_QMARK_(x))?(function (){var vec__43779 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43779,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43779,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43779,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$906,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$907,text], null),select_options43764.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$904,val,cljs.core.constant$keyword$908,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$909,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$908,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__43781 = (i__43775 + (1));
i__43775 = G__43781;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43776),iter__43773(cljs.core.chunk_rest(s__43774__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43776),null);
}
} else
{var x = cljs.core.first(s__43774__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__43780 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43780,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43780,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43780,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$906,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$907,text], null),select_options43764.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$904,val,cljs.core.constant$keyword$908,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$909,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$908,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__43773(cljs.core.rest(s__43774__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(coll);
});
select_options43764 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options43764__1.call(this,coll);
case 2:
return select_options43764__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options43764.cljs$core$IFn$_invoke$arity$1 = select_options43764__1;
select_options43764.cljs$core$IFn$_invoke$arity$2 = select_options43764__2;
return select_options43764;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options43764);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down43782 = (function() {
var drop_down43782 = null;
var drop_down43782__2 = (function (name,options){return drop_down43782.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down43782__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$910,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,sablono.core.make_name(name),cljs.core.constant$keyword$873,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down43782 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down43782__2.call(this,name,options);
case 3:
return drop_down43782__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down43782.cljs$core$IFn$_invoke$arity$2 = drop_down43782__2;
drop_down43782.cljs$core$IFn$_invoke$arity$3 = drop_down43782__3;
return drop_down43782;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down43782);
/**
* Creates a text area element.
*/
sablono.core.text_area43783 = (function() {
var text_area43783 = null;
var text_area43783__1 = (function (name){return text_area43783.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area43783__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$890,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$903,sablono.core.make_name(name),cljs.core.constant$keyword$873,sablono.core.make_id(name),cljs.core.constant$keyword$904,value], null)], null);
});
text_area43783 = function(name,value){
switch(arguments.length){
case 1:
return text_area43783__1.call(this,name);
case 2:
return text_area43783__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area43783.cljs$core$IFn$_invoke$arity$1 = text_area43783__1;
text_area43783.cljs$core$IFn$_invoke$arity$2 = text_area43783__2;
return text_area43783;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area43783);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label43784 = (function label43784(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$907,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$888,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label43784);
/**
* Creates a submit button.
*/
sablono.core.submit_button43785 = (function submit_button43785(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$871,"submit",cljs.core.constant$keyword$904,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button43785);
/**
* Creates a form reset button.
*/
sablono.core.reset_button43786 = (function reset_button43786(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$871,"reset",cljs.core.constant$keyword$904,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button43786);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to43787 = (function() { 
var form_to43787__delegate = function (p__43788,body){var vec__43790 = p__43788;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43790,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43790,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$911,null,cljs.core.constant$keyword$912,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$913,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$851,method_str,cljs.core.constant$keyword$914,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$913,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$851,"POST",cljs.core.constant$keyword$914,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to43787 = function (p__43788,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to43787__delegate.call(this,p__43788,body);};
form_to43787.cljs$lang$maxFixedArity = 1;
form_to43787.cljs$lang$applyTo = (function (arglist__43791){
var p__43788 = cljs.core.first(arglist__43791);
var body = cljs.core.rest(arglist__43791);
return form_to43787__delegate(p__43788,body);
});
form_to43787.cljs$core$IFn$_invoke$arity$variadic = form_to43787__delegate;
return form_to43787;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to43787);
