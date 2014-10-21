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
var G__49726__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__49725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49725,(0),null);var body = cljs.core.nthnext(vec__49725,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__49726 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49726__delegate.call(this,args);};
G__49726.cljs$lang$maxFixedArity = 0;
G__49726.cljs$lang$applyTo = (function (arglist__49727){
var args = cljs.core.seq(arglist__49727);
return G__49726__delegate(args);
});
G__49726.cljs$core$IFn$_invoke$arity$variadic = G__49726__delegate;
return G__49726;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__49732(s__49733){return (new cljs.core.LazySeq(null,(function (){var s__49733__$1 = s__49733;while(true){
var temp__4126__auto__ = cljs.core.seq(s__49733__$1);if(temp__4126__auto__)
{var s__49733__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__49733__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__49733__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__49735 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__49734 = (0);while(true){
if((i__49734 < size__4282__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__49734);cljs.core.chunk_append(b__49735,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__49736 = (i__49734 + (1));
i__49734 = G__49736;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__49735),iter__49732(cljs.core.chunk_rest(s__49733__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__49735),null);
}
} else
{var args = cljs.core.first(s__49733__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__49732(cljs.core.rest(s__49733__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__49741(s__49742){return (new cljs.core.LazySeq(null,(function (){var s__49742__$1 = s__49742;while(true){
var temp__4126__auto__ = cljs.core.seq(s__49742__$1);if(temp__4126__auto__)
{var s__49742__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__49742__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__49742__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__49744 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__49743 = (0);while(true){
if((i__49743 < size__4282__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__49743);cljs.core.chunk_append(b__49744,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1234,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1138,"text/css",cljs.core.constant$keyword$1235,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$1236,"stylesheet"], null)], null));
{
var G__49745 = (i__49743 + (1));
i__49743 = G__49745;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__49744),iter__49741(cljs.core.chunk_rest(s__49742__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__49744),null);
}
} else
{var style = cljs.core.first(s__49742__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1234,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1138,"text/css",cljs.core.constant$keyword$1235,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$1236,"stylesheet"], null)], null),iter__49741(cljs.core.rest(s__49742__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__49746){
var styles = cljs.core.seq(arglist__49746);
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
sablono.core.link_to49747 = (function() { 
var link_to49747__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1237,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1235,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to49747 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to49747__delegate.call(this,url,content);};
link_to49747.cljs$lang$maxFixedArity = 1;
link_to49747.cljs$lang$applyTo = (function (arglist__49748){
var url = cljs.core.first(arglist__49748);
var content = cljs.core.rest(arglist__49748);
return link_to49747__delegate(url,content);
});
link_to49747.cljs$core$IFn$_invoke$arity$variadic = link_to49747__delegate;
return link_to49747;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to49747);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to49749 = (function() { 
var mail_to49749__delegate = function (e_mail,p__49750){var vec__49752 = p__49750;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49752,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1237,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1235,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to49749 = function (e_mail,var_args){
var p__49750 = null;if (arguments.length > 1) {
  p__49750 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to49749__delegate.call(this,e_mail,p__49750);};
mail_to49749.cljs$lang$maxFixedArity = 1;
mail_to49749.cljs$lang$applyTo = (function (arglist__49753){
var e_mail = cljs.core.first(arglist__49753);
var p__49750 = cljs.core.rest(arglist__49753);
return mail_to49749__delegate(e_mail,p__49750);
});
mail_to49749.cljs$core$IFn$_invoke$arity$variadic = mail_to49749__delegate;
return mail_to49749;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to49749);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list49754 = (function unordered_list49754(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1238,(function (){var iter__4283__auto__ = (function iter__49759(s__49760){return (new cljs.core.LazySeq(null,(function (){var s__49760__$1 = s__49760;while(true){
var temp__4126__auto__ = cljs.core.seq(s__49760__$1);if(temp__4126__auto__)
{var s__49760__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__49760__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__49760__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__49762 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__49761 = (0);while(true){
if((i__49761 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__49761);cljs.core.chunk_append(b__49762,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1239,x], null));
{
var G__49763 = (i__49761 + (1));
i__49761 = G__49763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__49762),iter__49759(cljs.core.chunk_rest(s__49760__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__49762),null);
}
} else
{var x = cljs.core.first(s__49760__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1239,x], null),iter__49759(cljs.core.rest(s__49760__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list49754);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list49764 = (function ordered_list49764(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1240,(function (){var iter__4283__auto__ = (function iter__49769(s__49770){return (new cljs.core.LazySeq(null,(function (){var s__49770__$1 = s__49770;while(true){
var temp__4126__auto__ = cljs.core.seq(s__49770__$1);if(temp__4126__auto__)
{var s__49770__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__49770__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__49770__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__49772 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__49771 = (0);while(true){
if((i__49771 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__49771);cljs.core.chunk_append(b__49772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1239,x], null));
{
var G__49773 = (i__49771 + (1));
i__49771 = G__49773;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__49772),iter__49769(cljs.core.chunk_rest(s__49770__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__49772),null);
}
} else
{var x = cljs.core.first(s__49770__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1239,x], null),iter__49769(cljs.core.rest(s__49770__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list49764);
/**
* Create an image element.
*/
sablono.core.image49774 = (function() {
var image49774 = null;
var image49774__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1241,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1242,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image49774__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1241,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1242,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$1243,alt], null)], null);
});
image49774 = function(src,alt){
switch(arguments.length){
case 1:
return image49774__1.call(this,src);
case 2:
return image49774__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image49774.cljs$core$IFn$_invoke$arity$1 = image49774__1;
image49774.cljs$core$IFn$_invoke$arity$2 = image49774__2;
return image49774;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image49774);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__49775_SHARP_,p2__49776_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49775_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__49776_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__49777_SHARP_,p2__49778_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49777_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__49778_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1233,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1138,type,cljs.core.constant$keyword$1244,sablono.core.make_name(name),cljs.core.constant$keyword$1140,sablono.core.make_id(name),cljs.core.constant$keyword$1245,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field49779 = (function() {
var color_field49779 = null;
var color_field49779__1 = (function (name__10441__auto__){return color_field49779.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var color_field49779__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10441__auto__,value__10442__auto__);
});
color_field49779 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return color_field49779__1.call(this,name__10441__auto__);
case 2:
return color_field49779__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field49779.cljs$core$IFn$_invoke$arity$1 = color_field49779__1;
color_field49779.cljs$core$IFn$_invoke$arity$2 = color_field49779__2;
return color_field49779;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field49779);
/**
* Creates a date input field.
*/
sablono.core.date_field49780 = (function() {
var date_field49780 = null;
var date_field49780__1 = (function (name__10441__auto__){return date_field49780.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var date_field49780__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10441__auto__,value__10442__auto__);
});
date_field49780 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return date_field49780__1.call(this,name__10441__auto__);
case 2:
return date_field49780__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field49780.cljs$core$IFn$_invoke$arity$1 = date_field49780__1;
date_field49780.cljs$core$IFn$_invoke$arity$2 = date_field49780__2;
return date_field49780;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field49780);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field49781 = (function() {
var datetime_field49781 = null;
var datetime_field49781__1 = (function (name__10441__auto__){return datetime_field49781.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var datetime_field49781__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10441__auto__,value__10442__auto__);
});
datetime_field49781 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return datetime_field49781__1.call(this,name__10441__auto__);
case 2:
return datetime_field49781__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field49781.cljs$core$IFn$_invoke$arity$1 = datetime_field49781__1;
datetime_field49781.cljs$core$IFn$_invoke$arity$2 = datetime_field49781__2;
return datetime_field49781;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field49781);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field49782 = (function() {
var datetime_local_field49782 = null;
var datetime_local_field49782__1 = (function (name__10441__auto__){return datetime_local_field49782.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var datetime_local_field49782__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10441__auto__,value__10442__auto__);
});
datetime_local_field49782 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return datetime_local_field49782__1.call(this,name__10441__auto__);
case 2:
return datetime_local_field49782__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field49782.cljs$core$IFn$_invoke$arity$1 = datetime_local_field49782__1;
datetime_local_field49782.cljs$core$IFn$_invoke$arity$2 = datetime_local_field49782__2;
return datetime_local_field49782;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field49782);
/**
* Creates a email input field.
*/
sablono.core.email_field49783 = (function() {
var email_field49783 = null;
var email_field49783__1 = (function (name__10441__auto__){return email_field49783.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var email_field49783__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10441__auto__,value__10442__auto__);
});
email_field49783 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return email_field49783__1.call(this,name__10441__auto__);
case 2:
return email_field49783__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field49783.cljs$core$IFn$_invoke$arity$1 = email_field49783__1;
email_field49783.cljs$core$IFn$_invoke$arity$2 = email_field49783__2;
return email_field49783;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field49783);
/**
* Creates a file input field.
*/
sablono.core.file_field49784 = (function() {
var file_field49784 = null;
var file_field49784__1 = (function (name__10441__auto__){return file_field49784.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var file_field49784__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10441__auto__,value__10442__auto__);
});
file_field49784 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return file_field49784__1.call(this,name__10441__auto__);
case 2:
return file_field49784__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field49784.cljs$core$IFn$_invoke$arity$1 = file_field49784__1;
file_field49784.cljs$core$IFn$_invoke$arity$2 = file_field49784__2;
return file_field49784;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field49784);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field49785 = (function() {
var hidden_field49785 = null;
var hidden_field49785__1 = (function (name__10441__auto__){return hidden_field49785.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var hidden_field49785__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10441__auto__,value__10442__auto__);
});
hidden_field49785 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return hidden_field49785__1.call(this,name__10441__auto__);
case 2:
return hidden_field49785__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field49785.cljs$core$IFn$_invoke$arity$1 = hidden_field49785__1;
hidden_field49785.cljs$core$IFn$_invoke$arity$2 = hidden_field49785__2;
return hidden_field49785;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field49785);
/**
* Creates a month input field.
*/
sablono.core.month_field49786 = (function() {
var month_field49786 = null;
var month_field49786__1 = (function (name__10441__auto__){return month_field49786.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var month_field49786__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10441__auto__,value__10442__auto__);
});
month_field49786 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return month_field49786__1.call(this,name__10441__auto__);
case 2:
return month_field49786__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field49786.cljs$core$IFn$_invoke$arity$1 = month_field49786__1;
month_field49786.cljs$core$IFn$_invoke$arity$2 = month_field49786__2;
return month_field49786;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field49786);
/**
* Creates a number input field.
*/
sablono.core.number_field49787 = (function() {
var number_field49787 = null;
var number_field49787__1 = (function (name__10441__auto__){return number_field49787.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var number_field49787__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10441__auto__,value__10442__auto__);
});
number_field49787 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return number_field49787__1.call(this,name__10441__auto__);
case 2:
return number_field49787__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field49787.cljs$core$IFn$_invoke$arity$1 = number_field49787__1;
number_field49787.cljs$core$IFn$_invoke$arity$2 = number_field49787__2;
return number_field49787;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field49787);
/**
* Creates a password input field.
*/
sablono.core.password_field49788 = (function() {
var password_field49788 = null;
var password_field49788__1 = (function (name__10441__auto__){return password_field49788.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var password_field49788__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10441__auto__,value__10442__auto__);
});
password_field49788 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return password_field49788__1.call(this,name__10441__auto__);
case 2:
return password_field49788__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field49788.cljs$core$IFn$_invoke$arity$1 = password_field49788__1;
password_field49788.cljs$core$IFn$_invoke$arity$2 = password_field49788__2;
return password_field49788;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field49788);
/**
* Creates a range input field.
*/
sablono.core.range_field49789 = (function() {
var range_field49789 = null;
var range_field49789__1 = (function (name__10441__auto__){return range_field49789.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var range_field49789__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10441__auto__,value__10442__auto__);
});
range_field49789 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return range_field49789__1.call(this,name__10441__auto__);
case 2:
return range_field49789__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field49789.cljs$core$IFn$_invoke$arity$1 = range_field49789__1;
range_field49789.cljs$core$IFn$_invoke$arity$2 = range_field49789__2;
return range_field49789;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field49789);
/**
* Creates a search input field.
*/
sablono.core.search_field49790 = (function() {
var search_field49790 = null;
var search_field49790__1 = (function (name__10441__auto__){return search_field49790.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var search_field49790__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10441__auto__,value__10442__auto__);
});
search_field49790 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return search_field49790__1.call(this,name__10441__auto__);
case 2:
return search_field49790__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field49790.cljs$core$IFn$_invoke$arity$1 = search_field49790__1;
search_field49790.cljs$core$IFn$_invoke$arity$2 = search_field49790__2;
return search_field49790;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field49790);
/**
* Creates a tel input field.
*/
sablono.core.tel_field49791 = (function() {
var tel_field49791 = null;
var tel_field49791__1 = (function (name__10441__auto__){return tel_field49791.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var tel_field49791__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10441__auto__,value__10442__auto__);
});
tel_field49791 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return tel_field49791__1.call(this,name__10441__auto__);
case 2:
return tel_field49791__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field49791.cljs$core$IFn$_invoke$arity$1 = tel_field49791__1;
tel_field49791.cljs$core$IFn$_invoke$arity$2 = tel_field49791__2;
return tel_field49791;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field49791);
/**
* Creates a text input field.
*/
sablono.core.text_field49792 = (function() {
var text_field49792 = null;
var text_field49792__1 = (function (name__10441__auto__){return text_field49792.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var text_field49792__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10441__auto__,value__10442__auto__);
});
text_field49792 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return text_field49792__1.call(this,name__10441__auto__);
case 2:
return text_field49792__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field49792.cljs$core$IFn$_invoke$arity$1 = text_field49792__1;
text_field49792.cljs$core$IFn$_invoke$arity$2 = text_field49792__2;
return text_field49792;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field49792);
/**
* Creates a time input field.
*/
sablono.core.time_field49793 = (function() {
var time_field49793 = null;
var time_field49793__1 = (function (name__10441__auto__){return time_field49793.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var time_field49793__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10441__auto__,value__10442__auto__);
});
time_field49793 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return time_field49793__1.call(this,name__10441__auto__);
case 2:
return time_field49793__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field49793.cljs$core$IFn$_invoke$arity$1 = time_field49793__1;
time_field49793.cljs$core$IFn$_invoke$arity$2 = time_field49793__2;
return time_field49793;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field49793);
/**
* Creates a url input field.
*/
sablono.core.url_field49794 = (function() {
var url_field49794 = null;
var url_field49794__1 = (function (name__10441__auto__){return url_field49794.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var url_field49794__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10441__auto__,value__10442__auto__);
});
url_field49794 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return url_field49794__1.call(this,name__10441__auto__);
case 2:
return url_field49794__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field49794.cljs$core$IFn$_invoke$arity$1 = url_field49794__1;
url_field49794.cljs$core$IFn$_invoke$arity$2 = url_field49794__2;
return url_field49794;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field49794);
/**
* Creates a week input field.
*/
sablono.core.week_field49795 = (function() {
var week_field49795 = null;
var week_field49795__1 = (function (name__10441__auto__){return week_field49795.cljs$core$IFn$_invoke$arity$2(name__10441__auto__,null);
});
var week_field49795__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10441__auto__,value__10442__auto__);
});
week_field49795 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return week_field49795__1.call(this,name__10441__auto__);
case 2:
return week_field49795__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field49795.cljs$core$IFn$_invoke$arity$1 = week_field49795__1;
week_field49795.cljs$core$IFn$_invoke$arity$2 = week_field49795__2;
return week_field49795;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field49795);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box49796 = (function() {
var check_box49796 = null;
var check_box49796__1 = (function (name){return check_box49796.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box49796__2 = (function (name,checked_QMARK_){return check_box49796.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box49796__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1233,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1138,"checkbox",cljs.core.constant$keyword$1244,sablono.core.make_name(name),cljs.core.constant$keyword$1140,sablono.core.make_id(name),cljs.core.constant$keyword$1245,value,cljs.core.constant$keyword$1246,checked_QMARK_], null)], null);
});
check_box49796 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box49796__1.call(this,name);
case 2:
return check_box49796__2.call(this,name,checked_QMARK_);
case 3:
return check_box49796__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box49796.cljs$core$IFn$_invoke$arity$1 = check_box49796__1;
check_box49796.cljs$core$IFn$_invoke$arity$2 = check_box49796__2;
check_box49796.cljs$core$IFn$_invoke$arity$3 = check_box49796__3;
return check_box49796;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box49796);
/**
* Creates a radio button.
*/
sablono.core.radio_button49797 = (function() {
var radio_button49797 = null;
var radio_button49797__1 = (function (group){return radio_button49797.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button49797__2 = (function (group,checked_QMARK_){return radio_button49797.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button49797__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1233,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1138,"radio",cljs.core.constant$keyword$1244,sablono.core.make_name(group),cljs.core.constant$keyword$1140,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$1245,value,cljs.core.constant$keyword$1246,checked_QMARK_], null)], null);
});
radio_button49797 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button49797__1.call(this,group);
case 2:
return radio_button49797__2.call(this,group,checked_QMARK_);
case 3:
return radio_button49797__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button49797.cljs$core$IFn$_invoke$arity$1 = radio_button49797__1;
radio_button49797.cljs$core$IFn$_invoke$arity$2 = radio_button49797__2;
radio_button49797.cljs$core$IFn$_invoke$arity$3 = radio_button49797__3;
return radio_button49797;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button49797);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options49798 = (function() {
var select_options49798 = null;
var select_options49798__1 = (function (coll){return select_options49798.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options49798__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__49807(s__49808){return (new cljs.core.LazySeq(null,(function (){var s__49808__$1 = s__49808;while(true){
var temp__4126__auto__ = cljs.core.seq(s__49808__$1);if(temp__4126__auto__)
{var s__49808__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__49808__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__49808__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__49810 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__49809 = (0);while(true){
if((i__49809 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__49809);cljs.core.chunk_append(b__49810,((cljs.core.sequential_QMARK_(x))?(function (){var vec__49813 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49813,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49813,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49813,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1248,text], null),select_options49798.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1232,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1245,val,cljs.core.constant$keyword$1249,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$1250,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1232,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1249,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__49815 = (i__49809 + (1));
i__49809 = G__49815;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__49810),iter__49807(cljs.core.chunk_rest(s__49808__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__49810),null);
}
} else
{var x = cljs.core.first(s__49808__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__49814 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49814,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49814,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49814,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1248,text], null),select_options49798.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1232,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1245,val,cljs.core.constant$keyword$1249,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$1250,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1232,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1249,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__49807(cljs.core.rest(s__49808__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(coll);
});
select_options49798 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options49798__1.call(this,coll);
case 2:
return select_options49798__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options49798.cljs$core$IFn$_invoke$arity$1 = select_options49798__1;
select_options49798.cljs$core$IFn$_invoke$arity$2 = select_options49798__2;
return select_options49798;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options49798);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down49816 = (function() {
var drop_down49816 = null;
var drop_down49816__2 = (function (name,options){return drop_down49816.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down49816__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1251,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,sablono.core.make_name(name),cljs.core.constant$keyword$1140,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down49816 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down49816__2.call(this,name,options);
case 3:
return drop_down49816__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down49816.cljs$core$IFn$_invoke$arity$2 = drop_down49816__2;
drop_down49816.cljs$core$IFn$_invoke$arity$3 = drop_down49816__3;
return drop_down49816;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down49816);
/**
* Creates a text area element.
*/
sablono.core.text_area49817 = (function() {
var text_area49817 = null;
var text_area49817__1 = (function (name){return text_area49817.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area49817__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1231,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1244,sablono.core.make_name(name),cljs.core.constant$keyword$1140,sablono.core.make_id(name),cljs.core.constant$keyword$1245,value], null)], null);
});
text_area49817 = function(name,value){
switch(arguments.length){
case 1:
return text_area49817__1.call(this,name);
case 2:
return text_area49817__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area49817.cljs$core$IFn$_invoke$arity$1 = text_area49817__1;
text_area49817.cljs$core$IFn$_invoke$arity$2 = text_area49817__2;
return text_area49817;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area49817);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label49818 = (function label49818(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1248,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1230,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label49818);
/**
* Creates a submit button.
*/
sablono.core.submit_button49819 = (function submit_button49819(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1138,"submit",cljs.core.constant$keyword$1245,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button49819);
/**
* Creates a form reset button.
*/
sablono.core.reset_button49820 = (function reset_button49820(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1138,"reset",cljs.core.constant$keyword$1245,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button49820);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to49821 = (function() { 
var form_to49821__delegate = function (p__49822,body){var vec__49824 = p__49822;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49824,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49824,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1252,null,cljs.core.constant$keyword$1253,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1254,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1115,method_str,cljs.core.constant$keyword$1255,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1254,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1115,"POST",cljs.core.constant$keyword$1255,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to49821 = function (p__49822,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to49821__delegate.call(this,p__49822,body);};
form_to49821.cljs$lang$maxFixedArity = 1;
form_to49821.cljs$lang$applyTo = (function (arglist__49825){
var p__49822 = cljs.core.first(arglist__49825);
var body = cljs.core.rest(arglist__49825);
return form_to49821__delegate(p__49822,body);
});
form_to49821.cljs$core$IFn$_invoke$arity$variadic = form_to49821__delegate;
return form_to49821;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to49821);
