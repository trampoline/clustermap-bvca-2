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
var G__42785__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__42784 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42784,(0),null);var body = cljs.core.nthnext(vec__42784,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__42785 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42785__delegate.call(this,args);};
G__42785.cljs$lang$maxFixedArity = 0;
G__42785.cljs$lang$applyTo = (function (arglist__42786){
var args = cljs.core.seq(arglist__42786);
return G__42785__delegate(args);
});
G__42785.cljs$core$IFn$_invoke$arity$variadic = G__42785__delegate;
return G__42785;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__42791(s__42792){return (new cljs.core.LazySeq(null,(function (){var s__42792__$1 = s__42792;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42792__$1);if(temp__4126__auto__)
{var s__42792__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42792__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42792__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42794 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42793 = (0);while(true){
if((i__42793 < size__4267__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42793);cljs.core.chunk_append(b__42794,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__42795 = (i__42793 + (1));
i__42793 = G__42795;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42794),iter__42791(cljs.core.chunk_rest(s__42792__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42794),null);
}
} else
{var args = cljs.core.first(s__42792__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__42791(cljs.core.rest(s__42792__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__42800(s__42801){return (new cljs.core.LazySeq(null,(function (){var s__42801__$1 = s__42801;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42801__$1);if(temp__4126__auto__)
{var s__42801__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42801__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42801__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42803 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42802 = (0);while(true){
if((i__42802 < size__4267__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42802);cljs.core.chunk_append(b__42803,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$834,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$814,"text/css",cljs.core.constant$keyword$835,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$836,"stylesheet"], null)], null));
{
var G__42804 = (i__42802 + (1));
i__42802 = G__42804;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42803),iter__42800(cljs.core.chunk_rest(s__42801__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42803),null);
}
} else
{var style = cljs.core.first(s__42801__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$834,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$814,"text/css",cljs.core.constant$keyword$835,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$836,"stylesheet"], null)], null),iter__42800(cljs.core.rest(s__42801__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__42805){
var styles = cljs.core.seq(arglist__42805);
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
sablono.core.link_to42806 = (function() { 
var link_to42806__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$837,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$835,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to42806 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to42806__delegate.call(this,url,content);};
link_to42806.cljs$lang$maxFixedArity = 1;
link_to42806.cljs$lang$applyTo = (function (arglist__42807){
var url = cljs.core.first(arglist__42807);
var content = cljs.core.rest(arglist__42807);
return link_to42806__delegate(url,content);
});
link_to42806.cljs$core$IFn$_invoke$arity$variadic = link_to42806__delegate;
return link_to42806;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to42806);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to42808 = (function() { 
var mail_to42808__delegate = function (e_mail,p__42809){var vec__42811 = p__42809;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42811,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$837,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$835,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to42808 = function (e_mail,var_args){
var p__42809 = null;if (arguments.length > 1) {
  p__42809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to42808__delegate.call(this,e_mail,p__42809);};
mail_to42808.cljs$lang$maxFixedArity = 1;
mail_to42808.cljs$lang$applyTo = (function (arglist__42812){
var e_mail = cljs.core.first(arglist__42812);
var p__42809 = cljs.core.rest(arglist__42812);
return mail_to42808__delegate(e_mail,p__42809);
});
mail_to42808.cljs$core$IFn$_invoke$arity$variadic = mail_to42808__delegate;
return mail_to42808;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to42808);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list42813 = (function unordered_list42813(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$838,(function (){var iter__4268__auto__ = (function iter__42818(s__42819){return (new cljs.core.LazySeq(null,(function (){var s__42819__$1 = s__42819;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42819__$1);if(temp__4126__auto__)
{var s__42819__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42819__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42819__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42821 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42820 = (0);while(true){
if((i__42820 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42820);cljs.core.chunk_append(b__42821,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$839,x], null));
{
var G__42822 = (i__42820 + (1));
i__42820 = G__42822;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42821),iter__42818(cljs.core.chunk_rest(s__42819__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42821),null);
}
} else
{var x = cljs.core.first(s__42819__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$839,x], null),iter__42818(cljs.core.rest(s__42819__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list42813);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list42823 = (function ordered_list42823(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$840,(function (){var iter__4268__auto__ = (function iter__42828(s__42829){return (new cljs.core.LazySeq(null,(function (){var s__42829__$1 = s__42829;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42829__$1);if(temp__4126__auto__)
{var s__42829__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42829__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42829__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42831 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42830 = (0);while(true){
if((i__42830 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42830);cljs.core.chunk_append(b__42831,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$839,x], null));
{
var G__42832 = (i__42830 + (1));
i__42830 = G__42832;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42831),iter__42828(cljs.core.chunk_rest(s__42829__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42831),null);
}
} else
{var x = cljs.core.first(s__42829__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$839,x], null),iter__42828(cljs.core.rest(s__42829__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list42823);
/**
* Create an image element.
*/
sablono.core.image42833 = (function() {
var image42833 = null;
var image42833__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$842,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image42833__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$842,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$843,alt], null)], null);
});
image42833 = function(src,alt){
switch(arguments.length){
case 1:
return image42833__1.call(this,src);
case 2:
return image42833__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image42833.cljs$core$IFn$_invoke$arity$1 = image42833__1;
image42833.cljs$core$IFn$_invoke$arity$2 = image42833__2;
return image42833;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image42833);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42834_SHARP_,p2__42835_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42834_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42835_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42836_SHARP_,p2__42837_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42836_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42837_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$814,type,cljs.core.constant$keyword$844,sablono.core.make_name(name),cljs.core.constant$keyword$816,sablono.core.make_id(name),cljs.core.constant$keyword$845,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field42838 = (function() {
var color_field42838 = null;
var color_field42838__1 = (function (name__10242__auto__){return color_field42838.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var color_field42838__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10242__auto__,value__10243__auto__);
});
color_field42838 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return color_field42838__1.call(this,name__10242__auto__);
case 2:
return color_field42838__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field42838.cljs$core$IFn$_invoke$arity$1 = color_field42838__1;
color_field42838.cljs$core$IFn$_invoke$arity$2 = color_field42838__2;
return color_field42838;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field42838);
/**
* Creates a date input field.
*/
sablono.core.date_field42839 = (function() {
var date_field42839 = null;
var date_field42839__1 = (function (name__10242__auto__){return date_field42839.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var date_field42839__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10242__auto__,value__10243__auto__);
});
date_field42839 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return date_field42839__1.call(this,name__10242__auto__);
case 2:
return date_field42839__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field42839.cljs$core$IFn$_invoke$arity$1 = date_field42839__1;
date_field42839.cljs$core$IFn$_invoke$arity$2 = date_field42839__2;
return date_field42839;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field42839);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field42840 = (function() {
var datetime_field42840 = null;
var datetime_field42840__1 = (function (name__10242__auto__){return datetime_field42840.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var datetime_field42840__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10242__auto__,value__10243__auto__);
});
datetime_field42840 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_field42840__1.call(this,name__10242__auto__);
case 2:
return datetime_field42840__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field42840.cljs$core$IFn$_invoke$arity$1 = datetime_field42840__1;
datetime_field42840.cljs$core$IFn$_invoke$arity$2 = datetime_field42840__2;
return datetime_field42840;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field42840);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field42841 = (function() {
var datetime_local_field42841 = null;
var datetime_local_field42841__1 = (function (name__10242__auto__){return datetime_local_field42841.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var datetime_local_field42841__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10242__auto__,value__10243__auto__);
});
datetime_local_field42841 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_local_field42841__1.call(this,name__10242__auto__);
case 2:
return datetime_local_field42841__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field42841.cljs$core$IFn$_invoke$arity$1 = datetime_local_field42841__1;
datetime_local_field42841.cljs$core$IFn$_invoke$arity$2 = datetime_local_field42841__2;
return datetime_local_field42841;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field42841);
/**
* Creates a email input field.
*/
sablono.core.email_field42842 = (function() {
var email_field42842 = null;
var email_field42842__1 = (function (name__10242__auto__){return email_field42842.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var email_field42842__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10242__auto__,value__10243__auto__);
});
email_field42842 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return email_field42842__1.call(this,name__10242__auto__);
case 2:
return email_field42842__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field42842.cljs$core$IFn$_invoke$arity$1 = email_field42842__1;
email_field42842.cljs$core$IFn$_invoke$arity$2 = email_field42842__2;
return email_field42842;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field42842);
/**
* Creates a file input field.
*/
sablono.core.file_field42843 = (function() {
var file_field42843 = null;
var file_field42843__1 = (function (name__10242__auto__){return file_field42843.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var file_field42843__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10242__auto__,value__10243__auto__);
});
file_field42843 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return file_field42843__1.call(this,name__10242__auto__);
case 2:
return file_field42843__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field42843.cljs$core$IFn$_invoke$arity$1 = file_field42843__1;
file_field42843.cljs$core$IFn$_invoke$arity$2 = file_field42843__2;
return file_field42843;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field42843);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field42844 = (function() {
var hidden_field42844 = null;
var hidden_field42844__1 = (function (name__10242__auto__){return hidden_field42844.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var hidden_field42844__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10242__auto__,value__10243__auto__);
});
hidden_field42844 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return hidden_field42844__1.call(this,name__10242__auto__);
case 2:
return hidden_field42844__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field42844.cljs$core$IFn$_invoke$arity$1 = hidden_field42844__1;
hidden_field42844.cljs$core$IFn$_invoke$arity$2 = hidden_field42844__2;
return hidden_field42844;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field42844);
/**
* Creates a month input field.
*/
sablono.core.month_field42845 = (function() {
var month_field42845 = null;
var month_field42845__1 = (function (name__10242__auto__){return month_field42845.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var month_field42845__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10242__auto__,value__10243__auto__);
});
month_field42845 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return month_field42845__1.call(this,name__10242__auto__);
case 2:
return month_field42845__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field42845.cljs$core$IFn$_invoke$arity$1 = month_field42845__1;
month_field42845.cljs$core$IFn$_invoke$arity$2 = month_field42845__2;
return month_field42845;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field42845);
/**
* Creates a number input field.
*/
sablono.core.number_field42846 = (function() {
var number_field42846 = null;
var number_field42846__1 = (function (name__10242__auto__){return number_field42846.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var number_field42846__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10242__auto__,value__10243__auto__);
});
number_field42846 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return number_field42846__1.call(this,name__10242__auto__);
case 2:
return number_field42846__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field42846.cljs$core$IFn$_invoke$arity$1 = number_field42846__1;
number_field42846.cljs$core$IFn$_invoke$arity$2 = number_field42846__2;
return number_field42846;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field42846);
/**
* Creates a password input field.
*/
sablono.core.password_field42847 = (function() {
var password_field42847 = null;
var password_field42847__1 = (function (name__10242__auto__){return password_field42847.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var password_field42847__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10242__auto__,value__10243__auto__);
});
password_field42847 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return password_field42847__1.call(this,name__10242__auto__);
case 2:
return password_field42847__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field42847.cljs$core$IFn$_invoke$arity$1 = password_field42847__1;
password_field42847.cljs$core$IFn$_invoke$arity$2 = password_field42847__2;
return password_field42847;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field42847);
/**
* Creates a range input field.
*/
sablono.core.range_field42848 = (function() {
var range_field42848 = null;
var range_field42848__1 = (function (name__10242__auto__){return range_field42848.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var range_field42848__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10242__auto__,value__10243__auto__);
});
range_field42848 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return range_field42848__1.call(this,name__10242__auto__);
case 2:
return range_field42848__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field42848.cljs$core$IFn$_invoke$arity$1 = range_field42848__1;
range_field42848.cljs$core$IFn$_invoke$arity$2 = range_field42848__2;
return range_field42848;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field42848);
/**
* Creates a search input field.
*/
sablono.core.search_field42849 = (function() {
var search_field42849 = null;
var search_field42849__1 = (function (name__10242__auto__){return search_field42849.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var search_field42849__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10242__auto__,value__10243__auto__);
});
search_field42849 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return search_field42849__1.call(this,name__10242__auto__);
case 2:
return search_field42849__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field42849.cljs$core$IFn$_invoke$arity$1 = search_field42849__1;
search_field42849.cljs$core$IFn$_invoke$arity$2 = search_field42849__2;
return search_field42849;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field42849);
/**
* Creates a tel input field.
*/
sablono.core.tel_field42850 = (function() {
var tel_field42850 = null;
var tel_field42850__1 = (function (name__10242__auto__){return tel_field42850.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var tel_field42850__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10242__auto__,value__10243__auto__);
});
tel_field42850 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return tel_field42850__1.call(this,name__10242__auto__);
case 2:
return tel_field42850__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field42850.cljs$core$IFn$_invoke$arity$1 = tel_field42850__1;
tel_field42850.cljs$core$IFn$_invoke$arity$2 = tel_field42850__2;
return tel_field42850;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field42850);
/**
* Creates a text input field.
*/
sablono.core.text_field42851 = (function() {
var text_field42851 = null;
var text_field42851__1 = (function (name__10242__auto__){return text_field42851.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var text_field42851__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10242__auto__,value__10243__auto__);
});
text_field42851 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return text_field42851__1.call(this,name__10242__auto__);
case 2:
return text_field42851__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field42851.cljs$core$IFn$_invoke$arity$1 = text_field42851__1;
text_field42851.cljs$core$IFn$_invoke$arity$2 = text_field42851__2;
return text_field42851;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field42851);
/**
* Creates a time input field.
*/
sablono.core.time_field42852 = (function() {
var time_field42852 = null;
var time_field42852__1 = (function (name__10242__auto__){return time_field42852.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var time_field42852__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10242__auto__,value__10243__auto__);
});
time_field42852 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return time_field42852__1.call(this,name__10242__auto__);
case 2:
return time_field42852__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field42852.cljs$core$IFn$_invoke$arity$1 = time_field42852__1;
time_field42852.cljs$core$IFn$_invoke$arity$2 = time_field42852__2;
return time_field42852;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field42852);
/**
* Creates a url input field.
*/
sablono.core.url_field42853 = (function() {
var url_field42853 = null;
var url_field42853__1 = (function (name__10242__auto__){return url_field42853.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var url_field42853__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10242__auto__,value__10243__auto__);
});
url_field42853 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return url_field42853__1.call(this,name__10242__auto__);
case 2:
return url_field42853__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field42853.cljs$core$IFn$_invoke$arity$1 = url_field42853__1;
url_field42853.cljs$core$IFn$_invoke$arity$2 = url_field42853__2;
return url_field42853;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field42853);
/**
* Creates a week input field.
*/
sablono.core.week_field42854 = (function() {
var week_field42854 = null;
var week_field42854__1 = (function (name__10242__auto__){return week_field42854.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var week_field42854__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10242__auto__,value__10243__auto__);
});
week_field42854 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return week_field42854__1.call(this,name__10242__auto__);
case 2:
return week_field42854__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field42854.cljs$core$IFn$_invoke$arity$1 = week_field42854__1;
week_field42854.cljs$core$IFn$_invoke$arity$2 = week_field42854__2;
return week_field42854;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field42854);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box42855 = (function() {
var check_box42855 = null;
var check_box42855__1 = (function (name){return check_box42855.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box42855__2 = (function (name,checked_QMARK_){return check_box42855.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box42855__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$814,"checkbox",cljs.core.constant$keyword$844,sablono.core.make_name(name),cljs.core.constant$keyword$816,sablono.core.make_id(name),cljs.core.constant$keyword$845,value,cljs.core.constant$keyword$846,checked_QMARK_], null)], null);
});
check_box42855 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box42855__1.call(this,name);
case 2:
return check_box42855__2.call(this,name,checked_QMARK_);
case 3:
return check_box42855__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box42855.cljs$core$IFn$_invoke$arity$1 = check_box42855__1;
check_box42855.cljs$core$IFn$_invoke$arity$2 = check_box42855__2;
check_box42855.cljs$core$IFn$_invoke$arity$3 = check_box42855__3;
return check_box42855;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box42855);
/**
* Creates a radio button.
*/
sablono.core.radio_button42856 = (function() {
var radio_button42856 = null;
var radio_button42856__1 = (function (group){return radio_button42856.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button42856__2 = (function (group,checked_QMARK_){return radio_button42856.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button42856__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$814,"radio",cljs.core.constant$keyword$844,sablono.core.make_name(group),cljs.core.constant$keyword$816,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$845,value,cljs.core.constant$keyword$846,checked_QMARK_], null)], null);
});
radio_button42856 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button42856__1.call(this,group);
case 2:
return radio_button42856__2.call(this,group,checked_QMARK_);
case 3:
return radio_button42856__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button42856.cljs$core$IFn$_invoke$arity$1 = radio_button42856__1;
radio_button42856.cljs$core$IFn$_invoke$arity$2 = radio_button42856__2;
radio_button42856.cljs$core$IFn$_invoke$arity$3 = radio_button42856__3;
return radio_button42856;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button42856);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options42857 = (function() {
var select_options42857 = null;
var select_options42857__1 = (function (coll){return select_options42857.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options42857__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__42866(s__42867){return (new cljs.core.LazySeq(null,(function (){var s__42867__$1 = s__42867;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42867__$1);if(temp__4126__auto__)
{var s__42867__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42867__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42867__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42869 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42868 = (0);while(true){
if((i__42868 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42868);cljs.core.chunk_append(b__42869,((cljs.core.sequential_QMARK_(x))?(function (){var vec__42872 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42872,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42872,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42872,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$847,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$848,text], null),select_options42857.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$845,val,cljs.core.constant$keyword$850,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$851,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$850,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__42874 = (i__42868 + (1));
i__42868 = G__42874;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42869),iter__42866(cljs.core.chunk_rest(s__42867__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42869),null);
}
} else
{var x = cljs.core.first(s__42867__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__42873 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42873,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42873,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42873,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$847,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$848,text], null),select_options42857.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$845,val,cljs.core.constant$keyword$850,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$851,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$849,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$850,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__42866(cljs.core.rest(s__42867__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
});
select_options42857 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options42857__1.call(this,coll);
case 2:
return select_options42857__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options42857.cljs$core$IFn$_invoke$arity$1 = select_options42857__1;
select_options42857.cljs$core$IFn$_invoke$arity$2 = select_options42857__2;
return select_options42857;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options42857);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down42875 = (function() {
var drop_down42875 = null;
var drop_down42875__2 = (function (name,options){return drop_down42875.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down42875__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$852,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$844,sablono.core.make_name(name),cljs.core.constant$keyword$816,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down42875 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down42875__2.call(this,name,options);
case 3:
return drop_down42875__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down42875.cljs$core$IFn$_invoke$arity$2 = drop_down42875__2;
drop_down42875.cljs$core$IFn$_invoke$arity$3 = drop_down42875__3;
return drop_down42875;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down42875);
/**
* Creates a text area element.
*/
sablono.core.text_area42876 = (function() {
var text_area42876 = null;
var text_area42876__1 = (function (name){return text_area42876.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area42876__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$832,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$844,sablono.core.make_name(name),cljs.core.constant$keyword$816,sablono.core.make_id(name),cljs.core.constant$keyword$845,value], null)], null);
});
text_area42876 = function(name,value){
switch(arguments.length){
case 1:
return text_area42876__1.call(this,name);
case 2:
return text_area42876__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area42876.cljs$core$IFn$_invoke$arity$1 = text_area42876__1;
text_area42876.cljs$core$IFn$_invoke$arity$2 = text_area42876__2;
return text_area42876;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area42876);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label42877 = (function label42877(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$830,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label42877);
/**
* Creates a submit button.
*/
sablono.core.submit_button42878 = (function submit_button42878(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$814,"submit",cljs.core.constant$keyword$845,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button42878);
/**
* Creates a form reset button.
*/
sablono.core.reset_button42879 = (function reset_button42879(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$814,"reset",cljs.core.constant$keyword$845,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button42879);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to42880 = (function() { 
var form_to42880__delegate = function (p__42881,body){var vec__42883 = p__42881;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42883,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42883,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$853,null,cljs.core.constant$keyword$854,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$855,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$796,method_str,cljs.core.constant$keyword$856,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$855,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$796,"POST",cljs.core.constant$keyword$856,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to42880 = function (p__42881,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to42880__delegate.call(this,p__42881,body);};
form_to42880.cljs$lang$maxFixedArity = 1;
form_to42880.cljs$lang$applyTo = (function (arglist__42884){
var p__42881 = cljs.core.first(arglist__42884);
var body = cljs.core.rest(arglist__42884);
return form_to42880__delegate(p__42881,body);
});
form_to42880.cljs$core$IFn$_invoke$arity$variadic = form_to42880__delegate;
return form_to42880;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to42880);
