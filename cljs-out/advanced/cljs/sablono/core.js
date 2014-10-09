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
var G__45630__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__45629 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45629,(0),null);var body = cljs.core.nthnext(vec__45629,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__45630 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__45630__delegate.call(this,args);};
G__45630.cljs$lang$maxFixedArity = 0;
G__45630.cljs$lang$applyTo = (function (arglist__45631){
var args = cljs.core.seq(arglist__45631);
return G__45630__delegate(args);
});
G__45630.cljs$core$IFn$_invoke$arity$variadic = G__45630__delegate;
return G__45630;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__45636(s__45637){return (new cljs.core.LazySeq(null,(function (){var s__45637__$1 = s__45637;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45637__$1);if(temp__4126__auto__)
{var s__45637__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45637__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45637__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45639 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45638 = (0);while(true){
if((i__45638 < size__4282__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45638);cljs.core.chunk_append(b__45639,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__45640 = (i__45638 + (1));
i__45638 = G__45640;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45639),iter__45636(cljs.core.chunk_rest(s__45637__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45639),null);
}
} else
{var args = cljs.core.first(s__45637__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__45636(cljs.core.rest(s__45637__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__45645(s__45646){return (new cljs.core.LazySeq(null,(function (){var s__45646__$1 = s__45646;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45646__$1);if(temp__4126__auto__)
{var s__45646__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45646__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45646__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45648 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45647 = (0);while(true){
if((i__45647 < size__4282__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45647);cljs.core.chunk_append(b__45648,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$923,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$904,"text/css",cljs.core.constant$keyword$924,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$925,"stylesheet"], null)], null));
{
var G__45649 = (i__45647 + (1));
i__45647 = G__45649;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45648),iter__45645(cljs.core.chunk_rest(s__45646__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45648),null);
}
} else
{var style = cljs.core.first(s__45646__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$923,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$904,"text/css",cljs.core.constant$keyword$924,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$925,"stylesheet"], null)], null),iter__45645(cljs.core.rest(s__45646__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__45650){
var styles = cljs.core.seq(arglist__45650);
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
sablono.core.link_to45651 = (function() { 
var link_to45651__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$926,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$924,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to45651 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to45651__delegate.call(this,url,content);};
link_to45651.cljs$lang$maxFixedArity = 1;
link_to45651.cljs$lang$applyTo = (function (arglist__45652){
var url = cljs.core.first(arglist__45652);
var content = cljs.core.rest(arglist__45652);
return link_to45651__delegate(url,content);
});
link_to45651.cljs$core$IFn$_invoke$arity$variadic = link_to45651__delegate;
return link_to45651;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to45651);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to45653 = (function() { 
var mail_to45653__delegate = function (e_mail,p__45654){var vec__45656 = p__45654;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45656,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$926,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$924,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to45653 = function (e_mail,var_args){
var p__45654 = null;if (arguments.length > 1) {
  p__45654 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to45653__delegate.call(this,e_mail,p__45654);};
mail_to45653.cljs$lang$maxFixedArity = 1;
mail_to45653.cljs$lang$applyTo = (function (arglist__45657){
var e_mail = cljs.core.first(arglist__45657);
var p__45654 = cljs.core.rest(arglist__45657);
return mail_to45653__delegate(e_mail,p__45654);
});
mail_to45653.cljs$core$IFn$_invoke$arity$variadic = mail_to45653__delegate;
return mail_to45653;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to45653);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list45658 = (function unordered_list45658(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$927,(function (){var iter__4283__auto__ = (function iter__45663(s__45664){return (new cljs.core.LazySeq(null,(function (){var s__45664__$1 = s__45664;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45664__$1);if(temp__4126__auto__)
{var s__45664__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45664__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45664__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45666 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45665 = (0);while(true){
if((i__45665 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45665);cljs.core.chunk_append(b__45666,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$928,x], null));
{
var G__45667 = (i__45665 + (1));
i__45665 = G__45667;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45666),iter__45663(cljs.core.chunk_rest(s__45664__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45666),null);
}
} else
{var x = cljs.core.first(s__45664__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$928,x], null),iter__45663(cljs.core.rest(s__45664__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list45658);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list45668 = (function ordered_list45668(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$929,(function (){var iter__4283__auto__ = (function iter__45673(s__45674){return (new cljs.core.LazySeq(null,(function (){var s__45674__$1 = s__45674;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45674__$1);if(temp__4126__auto__)
{var s__45674__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45674__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45674__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45676 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45675 = (0);while(true){
if((i__45675 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45675);cljs.core.chunk_append(b__45676,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$928,x], null));
{
var G__45677 = (i__45675 + (1));
i__45675 = G__45677;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45676),iter__45673(cljs.core.chunk_rest(s__45674__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45676),null);
}
} else
{var x = cljs.core.first(s__45674__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$928,x], null),iter__45673(cljs.core.rest(s__45674__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list45668);
/**
* Create an image element.
*/
sablono.core.image45678 = (function() {
var image45678 = null;
var image45678__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$930,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$931,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image45678__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$930,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$931,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$932,alt], null)], null);
});
image45678 = function(src,alt){
switch(arguments.length){
case 1:
return image45678__1.call(this,src);
case 2:
return image45678__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image45678.cljs$core$IFn$_invoke$arity$1 = image45678__1;
image45678.cljs$core$IFn$_invoke$arity$2 = image45678__2;
return image45678;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image45678);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__45679_SHARP_,p2__45680_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45679_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__45680_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__45681_SHARP_,p2__45682_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45681_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__45682_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$922,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$904,type,cljs.core.constant$keyword$933,sablono.core.make_name(name),cljs.core.constant$keyword$906,sablono.core.make_id(name),cljs.core.constant$keyword$934,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field45683 = (function() {
var color_field45683 = null;
var color_field45683__1 = (function (name__10239__auto__){return color_field45683.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var color_field45683__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10239__auto__,value__10240__auto__);
});
color_field45683 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return color_field45683__1.call(this,name__10239__auto__);
case 2:
return color_field45683__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field45683.cljs$core$IFn$_invoke$arity$1 = color_field45683__1;
color_field45683.cljs$core$IFn$_invoke$arity$2 = color_field45683__2;
return color_field45683;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field45683);
/**
* Creates a date input field.
*/
sablono.core.date_field45684 = (function() {
var date_field45684 = null;
var date_field45684__1 = (function (name__10239__auto__){return date_field45684.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var date_field45684__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10239__auto__,value__10240__auto__);
});
date_field45684 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return date_field45684__1.call(this,name__10239__auto__);
case 2:
return date_field45684__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field45684.cljs$core$IFn$_invoke$arity$1 = date_field45684__1;
date_field45684.cljs$core$IFn$_invoke$arity$2 = date_field45684__2;
return date_field45684;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field45684);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field45685 = (function() {
var datetime_field45685 = null;
var datetime_field45685__1 = (function (name__10239__auto__){return datetime_field45685.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var datetime_field45685__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10239__auto__,value__10240__auto__);
});
datetime_field45685 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_field45685__1.call(this,name__10239__auto__);
case 2:
return datetime_field45685__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field45685.cljs$core$IFn$_invoke$arity$1 = datetime_field45685__1;
datetime_field45685.cljs$core$IFn$_invoke$arity$2 = datetime_field45685__2;
return datetime_field45685;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field45685);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field45686 = (function() {
var datetime_local_field45686 = null;
var datetime_local_field45686__1 = (function (name__10239__auto__){return datetime_local_field45686.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var datetime_local_field45686__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10239__auto__,value__10240__auto__);
});
datetime_local_field45686 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_local_field45686__1.call(this,name__10239__auto__);
case 2:
return datetime_local_field45686__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field45686.cljs$core$IFn$_invoke$arity$1 = datetime_local_field45686__1;
datetime_local_field45686.cljs$core$IFn$_invoke$arity$2 = datetime_local_field45686__2;
return datetime_local_field45686;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field45686);
/**
* Creates a email input field.
*/
sablono.core.email_field45687 = (function() {
var email_field45687 = null;
var email_field45687__1 = (function (name__10239__auto__){return email_field45687.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var email_field45687__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10239__auto__,value__10240__auto__);
});
email_field45687 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return email_field45687__1.call(this,name__10239__auto__);
case 2:
return email_field45687__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field45687.cljs$core$IFn$_invoke$arity$1 = email_field45687__1;
email_field45687.cljs$core$IFn$_invoke$arity$2 = email_field45687__2;
return email_field45687;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field45687);
/**
* Creates a file input field.
*/
sablono.core.file_field45688 = (function() {
var file_field45688 = null;
var file_field45688__1 = (function (name__10239__auto__){return file_field45688.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var file_field45688__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10239__auto__,value__10240__auto__);
});
file_field45688 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return file_field45688__1.call(this,name__10239__auto__);
case 2:
return file_field45688__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field45688.cljs$core$IFn$_invoke$arity$1 = file_field45688__1;
file_field45688.cljs$core$IFn$_invoke$arity$2 = file_field45688__2;
return file_field45688;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field45688);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field45689 = (function() {
var hidden_field45689 = null;
var hidden_field45689__1 = (function (name__10239__auto__){return hidden_field45689.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var hidden_field45689__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10239__auto__,value__10240__auto__);
});
hidden_field45689 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return hidden_field45689__1.call(this,name__10239__auto__);
case 2:
return hidden_field45689__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field45689.cljs$core$IFn$_invoke$arity$1 = hidden_field45689__1;
hidden_field45689.cljs$core$IFn$_invoke$arity$2 = hidden_field45689__2;
return hidden_field45689;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field45689);
/**
* Creates a month input field.
*/
sablono.core.month_field45690 = (function() {
var month_field45690 = null;
var month_field45690__1 = (function (name__10239__auto__){return month_field45690.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var month_field45690__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10239__auto__,value__10240__auto__);
});
month_field45690 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return month_field45690__1.call(this,name__10239__auto__);
case 2:
return month_field45690__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field45690.cljs$core$IFn$_invoke$arity$1 = month_field45690__1;
month_field45690.cljs$core$IFn$_invoke$arity$2 = month_field45690__2;
return month_field45690;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field45690);
/**
* Creates a number input field.
*/
sablono.core.number_field45691 = (function() {
var number_field45691 = null;
var number_field45691__1 = (function (name__10239__auto__){return number_field45691.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var number_field45691__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10239__auto__,value__10240__auto__);
});
number_field45691 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return number_field45691__1.call(this,name__10239__auto__);
case 2:
return number_field45691__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field45691.cljs$core$IFn$_invoke$arity$1 = number_field45691__1;
number_field45691.cljs$core$IFn$_invoke$arity$2 = number_field45691__2;
return number_field45691;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field45691);
/**
* Creates a password input field.
*/
sablono.core.password_field45692 = (function() {
var password_field45692 = null;
var password_field45692__1 = (function (name__10239__auto__){return password_field45692.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var password_field45692__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10239__auto__,value__10240__auto__);
});
password_field45692 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return password_field45692__1.call(this,name__10239__auto__);
case 2:
return password_field45692__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field45692.cljs$core$IFn$_invoke$arity$1 = password_field45692__1;
password_field45692.cljs$core$IFn$_invoke$arity$2 = password_field45692__2;
return password_field45692;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field45692);
/**
* Creates a range input field.
*/
sablono.core.range_field45693 = (function() {
var range_field45693 = null;
var range_field45693__1 = (function (name__10239__auto__){return range_field45693.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var range_field45693__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10239__auto__,value__10240__auto__);
});
range_field45693 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return range_field45693__1.call(this,name__10239__auto__);
case 2:
return range_field45693__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field45693.cljs$core$IFn$_invoke$arity$1 = range_field45693__1;
range_field45693.cljs$core$IFn$_invoke$arity$2 = range_field45693__2;
return range_field45693;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field45693);
/**
* Creates a search input field.
*/
sablono.core.search_field45694 = (function() {
var search_field45694 = null;
var search_field45694__1 = (function (name__10239__auto__){return search_field45694.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var search_field45694__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10239__auto__,value__10240__auto__);
});
search_field45694 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return search_field45694__1.call(this,name__10239__auto__);
case 2:
return search_field45694__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field45694.cljs$core$IFn$_invoke$arity$1 = search_field45694__1;
search_field45694.cljs$core$IFn$_invoke$arity$2 = search_field45694__2;
return search_field45694;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field45694);
/**
* Creates a tel input field.
*/
sablono.core.tel_field45695 = (function() {
var tel_field45695 = null;
var tel_field45695__1 = (function (name__10239__auto__){return tel_field45695.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var tel_field45695__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10239__auto__,value__10240__auto__);
});
tel_field45695 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return tel_field45695__1.call(this,name__10239__auto__);
case 2:
return tel_field45695__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field45695.cljs$core$IFn$_invoke$arity$1 = tel_field45695__1;
tel_field45695.cljs$core$IFn$_invoke$arity$2 = tel_field45695__2;
return tel_field45695;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field45695);
/**
* Creates a text input field.
*/
sablono.core.text_field45696 = (function() {
var text_field45696 = null;
var text_field45696__1 = (function (name__10239__auto__){return text_field45696.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var text_field45696__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10239__auto__,value__10240__auto__);
});
text_field45696 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return text_field45696__1.call(this,name__10239__auto__);
case 2:
return text_field45696__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field45696.cljs$core$IFn$_invoke$arity$1 = text_field45696__1;
text_field45696.cljs$core$IFn$_invoke$arity$2 = text_field45696__2;
return text_field45696;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field45696);
/**
* Creates a time input field.
*/
sablono.core.time_field45697 = (function() {
var time_field45697 = null;
var time_field45697__1 = (function (name__10239__auto__){return time_field45697.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var time_field45697__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10239__auto__,value__10240__auto__);
});
time_field45697 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return time_field45697__1.call(this,name__10239__auto__);
case 2:
return time_field45697__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field45697.cljs$core$IFn$_invoke$arity$1 = time_field45697__1;
time_field45697.cljs$core$IFn$_invoke$arity$2 = time_field45697__2;
return time_field45697;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field45697);
/**
* Creates a url input field.
*/
sablono.core.url_field45698 = (function() {
var url_field45698 = null;
var url_field45698__1 = (function (name__10239__auto__){return url_field45698.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var url_field45698__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10239__auto__,value__10240__auto__);
});
url_field45698 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return url_field45698__1.call(this,name__10239__auto__);
case 2:
return url_field45698__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field45698.cljs$core$IFn$_invoke$arity$1 = url_field45698__1;
url_field45698.cljs$core$IFn$_invoke$arity$2 = url_field45698__2;
return url_field45698;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field45698);
/**
* Creates a week input field.
*/
sablono.core.week_field45699 = (function() {
var week_field45699 = null;
var week_field45699__1 = (function (name__10239__auto__){return week_field45699.cljs$core$IFn$_invoke$arity$2(name__10239__auto__,null);
});
var week_field45699__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10239__auto__,value__10240__auto__);
});
week_field45699 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return week_field45699__1.call(this,name__10239__auto__);
case 2:
return week_field45699__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field45699.cljs$core$IFn$_invoke$arity$1 = week_field45699__1;
week_field45699.cljs$core$IFn$_invoke$arity$2 = week_field45699__2;
return week_field45699;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field45699);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box45700 = (function() {
var check_box45700 = null;
var check_box45700__1 = (function (name){return check_box45700.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box45700__2 = (function (name,checked_QMARK_){return check_box45700.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box45700__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$922,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$904,"checkbox",cljs.core.constant$keyword$933,sablono.core.make_name(name),cljs.core.constant$keyword$906,sablono.core.make_id(name),cljs.core.constant$keyword$934,value,cljs.core.constant$keyword$935,checked_QMARK_], null)], null);
});
check_box45700 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box45700__1.call(this,name);
case 2:
return check_box45700__2.call(this,name,checked_QMARK_);
case 3:
return check_box45700__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box45700.cljs$core$IFn$_invoke$arity$1 = check_box45700__1;
check_box45700.cljs$core$IFn$_invoke$arity$2 = check_box45700__2;
check_box45700.cljs$core$IFn$_invoke$arity$3 = check_box45700__3;
return check_box45700;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box45700);
/**
* Creates a radio button.
*/
sablono.core.radio_button45701 = (function() {
var radio_button45701 = null;
var radio_button45701__1 = (function (group){return radio_button45701.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button45701__2 = (function (group,checked_QMARK_){return radio_button45701.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button45701__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$922,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$904,"radio",cljs.core.constant$keyword$933,sablono.core.make_name(group),cljs.core.constant$keyword$906,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$934,value,cljs.core.constant$keyword$935,checked_QMARK_], null)], null);
});
radio_button45701 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button45701__1.call(this,group);
case 2:
return radio_button45701__2.call(this,group,checked_QMARK_);
case 3:
return radio_button45701__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button45701.cljs$core$IFn$_invoke$arity$1 = radio_button45701__1;
radio_button45701.cljs$core$IFn$_invoke$arity$2 = radio_button45701__2;
radio_button45701.cljs$core$IFn$_invoke$arity$3 = radio_button45701__3;
return radio_button45701;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button45701);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options45702 = (function() {
var select_options45702 = null;
var select_options45702__1 = (function (coll){return select_options45702.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options45702__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__45711(s__45712){return (new cljs.core.LazySeq(null,(function (){var s__45712__$1 = s__45712;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45712__$1);if(temp__4126__auto__)
{var s__45712__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45712__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45712__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45714 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45713 = (0);while(true){
if((i__45713 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45713);cljs.core.chunk_append(b__45714,((cljs.core.sequential_QMARK_(x))?(function (){var vec__45717 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45717,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45717,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45717,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$936,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$937,text], null),select_options45702.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$921,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$934,val,cljs.core.constant$keyword$938,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$939,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$921,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$938,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__45719 = (i__45713 + (1));
i__45713 = G__45719;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45714),iter__45711(cljs.core.chunk_rest(s__45712__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45714),null);
}
} else
{var x = cljs.core.first(s__45712__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__45718 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45718,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45718,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45718,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$936,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$937,text], null),select_options45702.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$921,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$934,val,cljs.core.constant$keyword$938,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$939,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$921,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$938,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__45711(cljs.core.rest(s__45712__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(coll);
});
select_options45702 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options45702__1.call(this,coll);
case 2:
return select_options45702__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options45702.cljs$core$IFn$_invoke$arity$1 = select_options45702__1;
select_options45702.cljs$core$IFn$_invoke$arity$2 = select_options45702__2;
return select_options45702;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options45702);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down45720 = (function() {
var drop_down45720 = null;
var drop_down45720__2 = (function (name,options){return drop_down45720.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down45720__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$940,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$933,sablono.core.make_name(name),cljs.core.constant$keyword$906,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down45720 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down45720__2.call(this,name,options);
case 3:
return drop_down45720__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down45720.cljs$core$IFn$_invoke$arity$2 = drop_down45720__2;
drop_down45720.cljs$core$IFn$_invoke$arity$3 = drop_down45720__3;
return drop_down45720;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down45720);
/**
* Creates a text area element.
*/
sablono.core.text_area45721 = (function() {
var text_area45721 = null;
var text_area45721__1 = (function (name){return text_area45721.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area45721__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$920,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$933,sablono.core.make_name(name),cljs.core.constant$keyword$906,sablono.core.make_id(name),cljs.core.constant$keyword$934,value], null)], null);
});
text_area45721 = function(name,value){
switch(arguments.length){
case 1:
return text_area45721__1.call(this,name);
case 2:
return text_area45721__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area45721.cljs$core$IFn$_invoke$arity$1 = text_area45721__1;
text_area45721.cljs$core$IFn$_invoke$arity$2 = text_area45721__2;
return text_area45721;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area45721);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label45722 = (function label45722(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$937,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$918,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label45722);
/**
* Creates a submit button.
*/
sablono.core.submit_button45723 = (function submit_button45723(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$922,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$904,"submit",cljs.core.constant$keyword$934,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button45723);
/**
* Creates a form reset button.
*/
sablono.core.reset_button45724 = (function reset_button45724(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$922,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$904,"reset",cljs.core.constant$keyword$934,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button45724);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to45725 = (function() { 
var form_to45725__delegate = function (p__45726,body){var vec__45728 = p__45726;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45728,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45728,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$941,null,cljs.core.constant$keyword$942,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$943,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$887,method_str,cljs.core.constant$keyword$944,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$943,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$887,"POST",cljs.core.constant$keyword$944,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to45725 = function (p__45726,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to45725__delegate.call(this,p__45726,body);};
form_to45725.cljs$lang$maxFixedArity = 1;
form_to45725.cljs$lang$applyTo = (function (arglist__45729){
var p__45726 = cljs.core.first(arglist__45729);
var body = cljs.core.rest(arglist__45729);
return form_to45725__delegate(p__45726,body);
});
form_to45725.cljs$core$IFn$_invoke$arity$variadic = form_to45725__delegate;
return form_to45725;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to45725);
