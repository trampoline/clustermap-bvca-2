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
var G__41717__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__41716 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41716,(0),null);var body = cljs.core.nthnext(vec__41716,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41717 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__41717__delegate.call(this,args);};
G__41717.cljs$lang$maxFixedArity = 0;
G__41717.cljs$lang$applyTo = (function (arglist__41718){
var args = cljs.core.seq(arglist__41718);
return G__41717__delegate(args);
});
G__41717.cljs$core$IFn$_invoke$arity$variadic = G__41717__delegate;
return G__41717;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__41723(s__41724){return (new cljs.core.LazySeq(null,(function (){var s__41724__$1 = s__41724;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41724__$1);if(temp__4126__auto__)
{var s__41724__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41724__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__41724__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__41726 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__41725 = (0);while(true){
if((i__41725 < size__4267__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__41725);cljs.core.chunk_append(b__41726,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__41727 = (i__41725 + (1));
i__41725 = G__41727;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41726),iter__41723(cljs.core.chunk_rest(s__41724__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41726),null);
}
} else
{var args = cljs.core.first(s__41724__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__41723(cljs.core.rest(s__41724__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__41732(s__41733){return (new cljs.core.LazySeq(null,(function (){var s__41733__$1 = s__41733;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41733__$1);if(temp__4126__auto__)
{var s__41733__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41733__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__41733__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__41735 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__41734 = (0);while(true){
if((i__41734 < size__4267__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__41734);cljs.core.chunk_append(b__41735,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$815,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$795,"text/css",cljs.core.constant$keyword$816,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$817,"stylesheet"], null)], null));
{
var G__41736 = (i__41734 + (1));
i__41734 = G__41736;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41735),iter__41732(cljs.core.chunk_rest(s__41733__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41735),null);
}
} else
{var style = cljs.core.first(s__41733__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$815,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$795,"text/css",cljs.core.constant$keyword$816,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$817,"stylesheet"], null)], null),iter__41732(cljs.core.rest(s__41733__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__41737){
var styles = cljs.core.seq(arglist__41737);
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
sablono.core.link_to41738 = (function() { 
var link_to41738__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$818,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$816,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to41738 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to41738__delegate.call(this,url,content);};
link_to41738.cljs$lang$maxFixedArity = 1;
link_to41738.cljs$lang$applyTo = (function (arglist__41739){
var url = cljs.core.first(arglist__41739);
var content = cljs.core.rest(arglist__41739);
return link_to41738__delegate(url,content);
});
link_to41738.cljs$core$IFn$_invoke$arity$variadic = link_to41738__delegate;
return link_to41738;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41738);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to41740 = (function() { 
var mail_to41740__delegate = function (e_mail,p__41741){var vec__41743 = p__41741;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41743,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$818,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$816,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to41740 = function (e_mail,var_args){
var p__41741 = null;if (arguments.length > 1) {
  p__41741 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to41740__delegate.call(this,e_mail,p__41741);};
mail_to41740.cljs$lang$maxFixedArity = 1;
mail_to41740.cljs$lang$applyTo = (function (arglist__41744){
var e_mail = cljs.core.first(arglist__41744);
var p__41741 = cljs.core.rest(arglist__41744);
return mail_to41740__delegate(e_mail,p__41741);
});
mail_to41740.cljs$core$IFn$_invoke$arity$variadic = mail_to41740__delegate;
return mail_to41740;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41740);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list41745 = (function unordered_list41745(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$819,(function (){var iter__4268__auto__ = (function iter__41750(s__41751){return (new cljs.core.LazySeq(null,(function (){var s__41751__$1 = s__41751;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41751__$1);if(temp__4126__auto__)
{var s__41751__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41751__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__41751__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__41753 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__41752 = (0);while(true){
if((i__41752 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__41752);cljs.core.chunk_append(b__41753,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,x], null));
{
var G__41754 = (i__41752 + (1));
i__41752 = G__41754;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41753),iter__41750(cljs.core.chunk_rest(s__41751__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41753),null);
}
} else
{var x = cljs.core.first(s__41751__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,x], null),iter__41750(cljs.core.rest(s__41751__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41745);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list41755 = (function ordered_list41755(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$821,(function (){var iter__4268__auto__ = (function iter__41760(s__41761){return (new cljs.core.LazySeq(null,(function (){var s__41761__$1 = s__41761;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41761__$1);if(temp__4126__auto__)
{var s__41761__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41761__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__41761__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__41763 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__41762 = (0);while(true){
if((i__41762 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__41762);cljs.core.chunk_append(b__41763,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,x], null));
{
var G__41764 = (i__41762 + (1));
i__41762 = G__41764;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41763),iter__41760(cljs.core.chunk_rest(s__41761__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41763),null);
}
} else
{var x = cljs.core.first(s__41761__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820,x], null),iter__41760(cljs.core.rest(s__41761__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41755);
/**
* Create an image element.
*/
sablono.core.image41765 = (function() {
var image41765 = null;
var image41765__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$822,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$823,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image41765__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$822,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$823,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$824,alt], null)], null);
});
image41765 = function(src,alt){
switch(arguments.length){
case 1:
return image41765__1.call(this,src);
case 2:
return image41765__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image41765.cljs$core$IFn$_invoke$arity$1 = image41765__1;
image41765.cljs$core$IFn$_invoke$arity$2 = image41765__2;
return image41765;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41765);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41766_SHARP_,p2__41767_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41766_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41767_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41768_SHARP_,p2__41769_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41768_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41769_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$814,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$795,type,cljs.core.constant$keyword$825,sablono.core.make_name(name),cljs.core.constant$keyword$797,sablono.core.make_id(name),cljs.core.constant$keyword$826,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field41770 = (function() {
var color_field41770 = null;
var color_field41770__1 = (function (name__10211__auto__){return color_field41770.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var color_field41770__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10211__auto__,value__10212__auto__);
});
color_field41770 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return color_field41770__1.call(this,name__10211__auto__);
case 2:
return color_field41770__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field41770.cljs$core$IFn$_invoke$arity$1 = color_field41770__1;
color_field41770.cljs$core$IFn$_invoke$arity$2 = color_field41770__2;
return color_field41770;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41770);
/**
* Creates a date input field.
*/
sablono.core.date_field41771 = (function() {
var date_field41771 = null;
var date_field41771__1 = (function (name__10211__auto__){return date_field41771.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var date_field41771__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10211__auto__,value__10212__auto__);
});
date_field41771 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return date_field41771__1.call(this,name__10211__auto__);
case 2:
return date_field41771__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field41771.cljs$core$IFn$_invoke$arity$1 = date_field41771__1;
date_field41771.cljs$core$IFn$_invoke$arity$2 = date_field41771__2;
return date_field41771;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41771);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field41772 = (function() {
var datetime_field41772 = null;
var datetime_field41772__1 = (function (name__10211__auto__){return datetime_field41772.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var datetime_field41772__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10211__auto__,value__10212__auto__);
});
datetime_field41772 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_field41772__1.call(this,name__10211__auto__);
case 2:
return datetime_field41772__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field41772.cljs$core$IFn$_invoke$arity$1 = datetime_field41772__1;
datetime_field41772.cljs$core$IFn$_invoke$arity$2 = datetime_field41772__2;
return datetime_field41772;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41772);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field41773 = (function() {
var datetime_local_field41773 = null;
var datetime_local_field41773__1 = (function (name__10211__auto__){return datetime_local_field41773.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var datetime_local_field41773__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10211__auto__,value__10212__auto__);
});
datetime_local_field41773 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_local_field41773__1.call(this,name__10211__auto__);
case 2:
return datetime_local_field41773__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field41773.cljs$core$IFn$_invoke$arity$1 = datetime_local_field41773__1;
datetime_local_field41773.cljs$core$IFn$_invoke$arity$2 = datetime_local_field41773__2;
return datetime_local_field41773;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41773);
/**
* Creates a email input field.
*/
sablono.core.email_field41774 = (function() {
var email_field41774 = null;
var email_field41774__1 = (function (name__10211__auto__){return email_field41774.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var email_field41774__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10211__auto__,value__10212__auto__);
});
email_field41774 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return email_field41774__1.call(this,name__10211__auto__);
case 2:
return email_field41774__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field41774.cljs$core$IFn$_invoke$arity$1 = email_field41774__1;
email_field41774.cljs$core$IFn$_invoke$arity$2 = email_field41774__2;
return email_field41774;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41774);
/**
* Creates a file input field.
*/
sablono.core.file_field41775 = (function() {
var file_field41775 = null;
var file_field41775__1 = (function (name__10211__auto__){return file_field41775.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var file_field41775__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10211__auto__,value__10212__auto__);
});
file_field41775 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return file_field41775__1.call(this,name__10211__auto__);
case 2:
return file_field41775__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field41775.cljs$core$IFn$_invoke$arity$1 = file_field41775__1;
file_field41775.cljs$core$IFn$_invoke$arity$2 = file_field41775__2;
return file_field41775;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41775);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field41776 = (function() {
var hidden_field41776 = null;
var hidden_field41776__1 = (function (name__10211__auto__){return hidden_field41776.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var hidden_field41776__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10211__auto__,value__10212__auto__);
});
hidden_field41776 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return hidden_field41776__1.call(this,name__10211__auto__);
case 2:
return hidden_field41776__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field41776.cljs$core$IFn$_invoke$arity$1 = hidden_field41776__1;
hidden_field41776.cljs$core$IFn$_invoke$arity$2 = hidden_field41776__2;
return hidden_field41776;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41776);
/**
* Creates a month input field.
*/
sablono.core.month_field41777 = (function() {
var month_field41777 = null;
var month_field41777__1 = (function (name__10211__auto__){return month_field41777.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var month_field41777__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10211__auto__,value__10212__auto__);
});
month_field41777 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return month_field41777__1.call(this,name__10211__auto__);
case 2:
return month_field41777__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field41777.cljs$core$IFn$_invoke$arity$1 = month_field41777__1;
month_field41777.cljs$core$IFn$_invoke$arity$2 = month_field41777__2;
return month_field41777;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41777);
/**
* Creates a number input field.
*/
sablono.core.number_field41778 = (function() {
var number_field41778 = null;
var number_field41778__1 = (function (name__10211__auto__){return number_field41778.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var number_field41778__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10211__auto__,value__10212__auto__);
});
number_field41778 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return number_field41778__1.call(this,name__10211__auto__);
case 2:
return number_field41778__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field41778.cljs$core$IFn$_invoke$arity$1 = number_field41778__1;
number_field41778.cljs$core$IFn$_invoke$arity$2 = number_field41778__2;
return number_field41778;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41778);
/**
* Creates a password input field.
*/
sablono.core.password_field41779 = (function() {
var password_field41779 = null;
var password_field41779__1 = (function (name__10211__auto__){return password_field41779.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var password_field41779__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10211__auto__,value__10212__auto__);
});
password_field41779 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return password_field41779__1.call(this,name__10211__auto__);
case 2:
return password_field41779__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field41779.cljs$core$IFn$_invoke$arity$1 = password_field41779__1;
password_field41779.cljs$core$IFn$_invoke$arity$2 = password_field41779__2;
return password_field41779;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41779);
/**
* Creates a range input field.
*/
sablono.core.range_field41780 = (function() {
var range_field41780 = null;
var range_field41780__1 = (function (name__10211__auto__){return range_field41780.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var range_field41780__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10211__auto__,value__10212__auto__);
});
range_field41780 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return range_field41780__1.call(this,name__10211__auto__);
case 2:
return range_field41780__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field41780.cljs$core$IFn$_invoke$arity$1 = range_field41780__1;
range_field41780.cljs$core$IFn$_invoke$arity$2 = range_field41780__2;
return range_field41780;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41780);
/**
* Creates a search input field.
*/
sablono.core.search_field41781 = (function() {
var search_field41781 = null;
var search_field41781__1 = (function (name__10211__auto__){return search_field41781.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var search_field41781__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10211__auto__,value__10212__auto__);
});
search_field41781 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return search_field41781__1.call(this,name__10211__auto__);
case 2:
return search_field41781__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field41781.cljs$core$IFn$_invoke$arity$1 = search_field41781__1;
search_field41781.cljs$core$IFn$_invoke$arity$2 = search_field41781__2;
return search_field41781;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41781);
/**
* Creates a tel input field.
*/
sablono.core.tel_field41782 = (function() {
var tel_field41782 = null;
var tel_field41782__1 = (function (name__10211__auto__){return tel_field41782.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var tel_field41782__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10211__auto__,value__10212__auto__);
});
tel_field41782 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return tel_field41782__1.call(this,name__10211__auto__);
case 2:
return tel_field41782__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field41782.cljs$core$IFn$_invoke$arity$1 = tel_field41782__1;
tel_field41782.cljs$core$IFn$_invoke$arity$2 = tel_field41782__2;
return tel_field41782;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41782);
/**
* Creates a text input field.
*/
sablono.core.text_field41783 = (function() {
var text_field41783 = null;
var text_field41783__1 = (function (name__10211__auto__){return text_field41783.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var text_field41783__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10211__auto__,value__10212__auto__);
});
text_field41783 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return text_field41783__1.call(this,name__10211__auto__);
case 2:
return text_field41783__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field41783.cljs$core$IFn$_invoke$arity$1 = text_field41783__1;
text_field41783.cljs$core$IFn$_invoke$arity$2 = text_field41783__2;
return text_field41783;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41783);
/**
* Creates a time input field.
*/
sablono.core.time_field41784 = (function() {
var time_field41784 = null;
var time_field41784__1 = (function (name__10211__auto__){return time_field41784.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var time_field41784__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10211__auto__,value__10212__auto__);
});
time_field41784 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return time_field41784__1.call(this,name__10211__auto__);
case 2:
return time_field41784__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field41784.cljs$core$IFn$_invoke$arity$1 = time_field41784__1;
time_field41784.cljs$core$IFn$_invoke$arity$2 = time_field41784__2;
return time_field41784;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41784);
/**
* Creates a url input field.
*/
sablono.core.url_field41785 = (function() {
var url_field41785 = null;
var url_field41785__1 = (function (name__10211__auto__){return url_field41785.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var url_field41785__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10211__auto__,value__10212__auto__);
});
url_field41785 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return url_field41785__1.call(this,name__10211__auto__);
case 2:
return url_field41785__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field41785.cljs$core$IFn$_invoke$arity$1 = url_field41785__1;
url_field41785.cljs$core$IFn$_invoke$arity$2 = url_field41785__2;
return url_field41785;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41785);
/**
* Creates a week input field.
*/
sablono.core.week_field41786 = (function() {
var week_field41786 = null;
var week_field41786__1 = (function (name__10211__auto__){return week_field41786.cljs$core$IFn$_invoke$arity$2(name__10211__auto__,null);
});
var week_field41786__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10211__auto__,value__10212__auto__);
});
week_field41786 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return week_field41786__1.call(this,name__10211__auto__);
case 2:
return week_field41786__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field41786.cljs$core$IFn$_invoke$arity$1 = week_field41786__1;
week_field41786.cljs$core$IFn$_invoke$arity$2 = week_field41786__2;
return week_field41786;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41786);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box41787 = (function() {
var check_box41787 = null;
var check_box41787__1 = (function (name){return check_box41787.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box41787__2 = (function (name,checked_QMARK_){return check_box41787.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box41787__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$814,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$795,"checkbox",cljs.core.constant$keyword$825,sablono.core.make_name(name),cljs.core.constant$keyword$797,sablono.core.make_id(name),cljs.core.constant$keyword$826,value,cljs.core.constant$keyword$827,checked_QMARK_], null)], null);
});
check_box41787 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box41787__1.call(this,name);
case 2:
return check_box41787__2.call(this,name,checked_QMARK_);
case 3:
return check_box41787__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box41787.cljs$core$IFn$_invoke$arity$1 = check_box41787__1;
check_box41787.cljs$core$IFn$_invoke$arity$2 = check_box41787__2;
check_box41787.cljs$core$IFn$_invoke$arity$3 = check_box41787__3;
return check_box41787;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41787);
/**
* Creates a radio button.
*/
sablono.core.radio_button41788 = (function() {
var radio_button41788 = null;
var radio_button41788__1 = (function (group){return radio_button41788.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button41788__2 = (function (group,checked_QMARK_){return radio_button41788.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button41788__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$814,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$795,"radio",cljs.core.constant$keyword$825,sablono.core.make_name(group),cljs.core.constant$keyword$797,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$826,value,cljs.core.constant$keyword$827,checked_QMARK_], null)], null);
});
radio_button41788 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button41788__1.call(this,group);
case 2:
return radio_button41788__2.call(this,group,checked_QMARK_);
case 3:
return radio_button41788__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button41788.cljs$core$IFn$_invoke$arity$1 = radio_button41788__1;
radio_button41788.cljs$core$IFn$_invoke$arity$2 = radio_button41788__2;
radio_button41788.cljs$core$IFn$_invoke$arity$3 = radio_button41788__3;
return radio_button41788;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41788);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options41789 = (function() {
var select_options41789 = null;
var select_options41789__1 = (function (coll){return select_options41789.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options41789__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__41798(s__41799){return (new cljs.core.LazySeq(null,(function (){var s__41799__$1 = s__41799;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41799__$1);if(temp__4126__auto__)
{var s__41799__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41799__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__41799__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__41801 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__41800 = (0);while(true){
if((i__41800 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__41800);cljs.core.chunk_append(b__41801,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41804 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41804,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41804,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41804,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$828,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$829,text], null),select_options41789.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$826,val,cljs.core.constant$keyword$831,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$832,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__41806 = (i__41800 + (1));
i__41800 = G__41806;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41801),iter__41798(cljs.core.chunk_rest(s__41799__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41801),null);
}
} else
{var x = cljs.core.first(s__41799__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41805 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41805,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41805,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41805,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$828,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$829,text], null),select_options41789.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$826,val,cljs.core.constant$keyword$831,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$832,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__41798(cljs.core.rest(s__41799__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
});
select_options41789 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options41789__1.call(this,coll);
case 2:
return select_options41789__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options41789.cljs$core$IFn$_invoke$arity$1 = select_options41789__1;
select_options41789.cljs$core$IFn$_invoke$arity$2 = select_options41789__2;
return select_options41789;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41789);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down41807 = (function() {
var drop_down41807 = null;
var drop_down41807__2 = (function (name,options){return drop_down41807.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down41807__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$825,sablono.core.make_name(name),cljs.core.constant$keyword$797,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down41807 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down41807__2.call(this,name,options);
case 3:
return drop_down41807__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down41807.cljs$core$IFn$_invoke$arity$2 = drop_down41807__2;
drop_down41807.cljs$core$IFn$_invoke$arity$3 = drop_down41807__3;
return drop_down41807;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41807);
/**
* Creates a text area element.
*/
sablono.core.text_area41808 = (function() {
var text_area41808 = null;
var text_area41808__1 = (function (name){return text_area41808.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area41808__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$813,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$825,sablono.core.make_name(name),cljs.core.constant$keyword$797,sablono.core.make_id(name),cljs.core.constant$keyword$826,value], null)], null);
});
text_area41808 = function(name,value){
switch(arguments.length){
case 1:
return text_area41808__1.call(this,name);
case 2:
return text_area41808__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area41808.cljs$core$IFn$_invoke$arity$1 = text_area41808__1;
text_area41808.cljs$core$IFn$_invoke$arity$2 = text_area41808__2;
return text_area41808;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41808);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label41809 = (function label41809(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$829,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$811,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41809);
/**
* Creates a submit button.
*/
sablono.core.submit_button41810 = (function submit_button41810(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$814,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$795,"submit",cljs.core.constant$keyword$826,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41810);
/**
* Creates a form reset button.
*/
sablono.core.reset_button41811 = (function reset_button41811(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$814,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$795,"reset",cljs.core.constant$keyword$826,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41811);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to41812 = (function() { 
var form_to41812__delegate = function (p__41813,body){var vec__41815 = p__41813;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41815,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41815,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$834,null,cljs.core.constant$keyword$835,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$836,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$780,method_str,cljs.core.constant$keyword$837,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$836,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$780,"POST",cljs.core.constant$keyword$837,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to41812 = function (p__41813,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to41812__delegate.call(this,p__41813,body);};
form_to41812.cljs$lang$maxFixedArity = 1;
form_to41812.cljs$lang$applyTo = (function (arglist__41816){
var p__41813 = cljs.core.first(arglist__41816);
var body = cljs.core.rest(arglist__41816);
return form_to41812__delegate(p__41813,body);
});
form_to41812.cljs$core$IFn$_invoke$arity$variadic = form_to41812__delegate;
return form_to41812;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41812);
