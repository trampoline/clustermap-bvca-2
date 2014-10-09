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
var G__51886__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__51885 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51885,(0),null);var body = cljs.core.nthnext(vec__51885,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__51886 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__51886__delegate.call(this,args);};
G__51886.cljs$lang$maxFixedArity = 0;
G__51886.cljs$lang$applyTo = (function (arglist__51887){
var args = cljs.core.seq(arglist__51887);
return G__51886__delegate(args);
});
G__51886.cljs$core$IFn$_invoke$arity$variadic = G__51886__delegate;
return G__51886;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__51892(s__51893){return (new cljs.core.LazySeq(null,(function (){var s__51893__$1 = s__51893;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51893__$1);if(temp__4126__auto__)
{var s__51893__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51893__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__51893__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__51895 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__51894 = (0);while(true){
if((i__51894 < size__4282__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__51894);cljs.core.chunk_append(b__51895,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__51896 = (i__51894 + (1));
i__51894 = G__51896;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51895),iter__51892(cljs.core.chunk_rest(s__51893__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51895),null);
}
} else
{var args = cljs.core.first(s__51893__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__51892(cljs.core.rest(s__51893__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__51901(s__51902){return (new cljs.core.LazySeq(null,(function (){var s__51902__$1 = s__51902;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51902__$1);if(temp__4126__auto__)
{var s__51902__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51902__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__51902__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__51904 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__51903 = (0);while(true){
if((i__51903 < size__4282__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__51903);cljs.core.chunk_append(b__51904,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1056,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$974,"text/css",cljs.core.constant$keyword$1057,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$1058,"stylesheet"], null)], null));
{
var G__51905 = (i__51903 + (1));
i__51903 = G__51905;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51904),iter__51901(cljs.core.chunk_rest(s__51902__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51904),null);
}
} else
{var style = cljs.core.first(s__51902__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1056,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$974,"text/css",cljs.core.constant$keyword$1057,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$1058,"stylesheet"], null)], null),iter__51901(cljs.core.rest(s__51902__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__51906){
var styles = cljs.core.seq(arglist__51906);
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
sablono.core.link_to51907 = (function() { 
var link_to51907__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1059,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to51907 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to51907__delegate.call(this,url,content);};
link_to51907.cljs$lang$maxFixedArity = 1;
link_to51907.cljs$lang$applyTo = (function (arglist__51908){
var url = cljs.core.first(arglist__51908);
var content = cljs.core.rest(arglist__51908);
return link_to51907__delegate(url,content);
});
link_to51907.cljs$core$IFn$_invoke$arity$variadic = link_to51907__delegate;
return link_to51907;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to51907);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to51909 = (function() { 
var mail_to51909__delegate = function (e_mail,p__51910){var vec__51912 = p__51910;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51912,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1059,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to51909 = function (e_mail,var_args){
var p__51910 = null;if (arguments.length > 1) {
  p__51910 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to51909__delegate.call(this,e_mail,p__51910);};
mail_to51909.cljs$lang$maxFixedArity = 1;
mail_to51909.cljs$lang$applyTo = (function (arglist__51913){
var e_mail = cljs.core.first(arglist__51913);
var p__51910 = cljs.core.rest(arglist__51913);
return mail_to51909__delegate(e_mail,p__51910);
});
mail_to51909.cljs$core$IFn$_invoke$arity$variadic = mail_to51909__delegate;
return mail_to51909;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to51909);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list51914 = (function unordered_list51914(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1060,(function (){var iter__4283__auto__ = (function iter__51919(s__51920){return (new cljs.core.LazySeq(null,(function (){var s__51920__$1 = s__51920;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51920__$1);if(temp__4126__auto__)
{var s__51920__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51920__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__51920__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__51922 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__51921 = (0);while(true){
if((i__51921 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__51921);cljs.core.chunk_append(b__51922,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1061,x], null));
{
var G__51923 = (i__51921 + (1));
i__51921 = G__51923;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51922),iter__51919(cljs.core.chunk_rest(s__51920__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51922),null);
}
} else
{var x = cljs.core.first(s__51920__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1061,x], null),iter__51919(cljs.core.rest(s__51920__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list51914);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list51924 = (function ordered_list51924(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1062,(function (){var iter__4283__auto__ = (function iter__51929(s__51930){return (new cljs.core.LazySeq(null,(function (){var s__51930__$1 = s__51930;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51930__$1);if(temp__4126__auto__)
{var s__51930__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51930__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__51930__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__51932 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__51931 = (0);while(true){
if((i__51931 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__51931);cljs.core.chunk_append(b__51932,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1061,x], null));
{
var G__51933 = (i__51931 + (1));
i__51931 = G__51933;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51932),iter__51929(cljs.core.chunk_rest(s__51930__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51932),null);
}
} else
{var x = cljs.core.first(s__51930__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1061,x], null),iter__51929(cljs.core.rest(s__51930__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list51924);
/**
* Create an image element.
*/
sablono.core.image51934 = (function() {
var image51934 = null;
var image51934__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1064,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image51934__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1064,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$1065,alt], null)], null);
});
image51934 = function(src,alt){
switch(arguments.length){
case 1:
return image51934__1.call(this,src);
case 2:
return image51934__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image51934.cljs$core$IFn$_invoke$arity$1 = image51934__1;
image51934.cljs$core$IFn$_invoke$arity$2 = image51934__2;
return image51934;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image51934);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__51935_SHARP_,p2__51936_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51935_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51936_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__51937_SHARP_,p2__51938_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51937_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51938_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1055,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$974,type,cljs.core.constant$keyword$998,sablono.core.make_name(name),cljs.core.constant$keyword$976,sablono.core.make_id(name),cljs.core.constant$keyword$989,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field51939 = (function() {
var color_field51939 = null;
var color_field51939__1 = (function (name__13522__auto__){return color_field51939.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var color_field51939__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__13522__auto__,value__13523__auto__);
});
color_field51939 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return color_field51939__1.call(this,name__13522__auto__);
case 2:
return color_field51939__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field51939.cljs$core$IFn$_invoke$arity$1 = color_field51939__1;
color_field51939.cljs$core$IFn$_invoke$arity$2 = color_field51939__2;
return color_field51939;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field51939);
/**
* Creates a date input field.
*/
sablono.core.date_field51940 = (function() {
var date_field51940 = null;
var date_field51940__1 = (function (name__13522__auto__){return date_field51940.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var date_field51940__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__13522__auto__,value__13523__auto__);
});
date_field51940 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return date_field51940__1.call(this,name__13522__auto__);
case 2:
return date_field51940__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field51940.cljs$core$IFn$_invoke$arity$1 = date_field51940__1;
date_field51940.cljs$core$IFn$_invoke$arity$2 = date_field51940__2;
return date_field51940;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field51940);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field51941 = (function() {
var datetime_field51941 = null;
var datetime_field51941__1 = (function (name__13522__auto__){return datetime_field51941.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var datetime_field51941__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__13522__auto__,value__13523__auto__);
});
datetime_field51941 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_field51941__1.call(this,name__13522__auto__);
case 2:
return datetime_field51941__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field51941.cljs$core$IFn$_invoke$arity$1 = datetime_field51941__1;
datetime_field51941.cljs$core$IFn$_invoke$arity$2 = datetime_field51941__2;
return datetime_field51941;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field51941);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field51942 = (function() {
var datetime_local_field51942 = null;
var datetime_local_field51942__1 = (function (name__13522__auto__){return datetime_local_field51942.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var datetime_local_field51942__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__13522__auto__,value__13523__auto__);
});
datetime_local_field51942 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_local_field51942__1.call(this,name__13522__auto__);
case 2:
return datetime_local_field51942__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field51942.cljs$core$IFn$_invoke$arity$1 = datetime_local_field51942__1;
datetime_local_field51942.cljs$core$IFn$_invoke$arity$2 = datetime_local_field51942__2;
return datetime_local_field51942;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field51942);
/**
* Creates a email input field.
*/
sablono.core.email_field51943 = (function() {
var email_field51943 = null;
var email_field51943__1 = (function (name__13522__auto__){return email_field51943.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var email_field51943__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__13522__auto__,value__13523__auto__);
});
email_field51943 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return email_field51943__1.call(this,name__13522__auto__);
case 2:
return email_field51943__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field51943.cljs$core$IFn$_invoke$arity$1 = email_field51943__1;
email_field51943.cljs$core$IFn$_invoke$arity$2 = email_field51943__2;
return email_field51943;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field51943);
/**
* Creates a file input field.
*/
sablono.core.file_field51944 = (function() {
var file_field51944 = null;
var file_field51944__1 = (function (name__13522__auto__){return file_field51944.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var file_field51944__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__13522__auto__,value__13523__auto__);
});
file_field51944 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return file_field51944__1.call(this,name__13522__auto__);
case 2:
return file_field51944__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field51944.cljs$core$IFn$_invoke$arity$1 = file_field51944__1;
file_field51944.cljs$core$IFn$_invoke$arity$2 = file_field51944__2;
return file_field51944;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field51944);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field51945 = (function() {
var hidden_field51945 = null;
var hidden_field51945__1 = (function (name__13522__auto__){return hidden_field51945.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var hidden_field51945__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__13522__auto__,value__13523__auto__);
});
hidden_field51945 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return hidden_field51945__1.call(this,name__13522__auto__);
case 2:
return hidden_field51945__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field51945.cljs$core$IFn$_invoke$arity$1 = hidden_field51945__1;
hidden_field51945.cljs$core$IFn$_invoke$arity$2 = hidden_field51945__2;
return hidden_field51945;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field51945);
/**
* Creates a month input field.
*/
sablono.core.month_field51946 = (function() {
var month_field51946 = null;
var month_field51946__1 = (function (name__13522__auto__){return month_field51946.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var month_field51946__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__13522__auto__,value__13523__auto__);
});
month_field51946 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return month_field51946__1.call(this,name__13522__auto__);
case 2:
return month_field51946__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field51946.cljs$core$IFn$_invoke$arity$1 = month_field51946__1;
month_field51946.cljs$core$IFn$_invoke$arity$2 = month_field51946__2;
return month_field51946;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field51946);
/**
* Creates a number input field.
*/
sablono.core.number_field51947 = (function() {
var number_field51947 = null;
var number_field51947__1 = (function (name__13522__auto__){return number_field51947.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var number_field51947__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__13522__auto__,value__13523__auto__);
});
number_field51947 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return number_field51947__1.call(this,name__13522__auto__);
case 2:
return number_field51947__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field51947.cljs$core$IFn$_invoke$arity$1 = number_field51947__1;
number_field51947.cljs$core$IFn$_invoke$arity$2 = number_field51947__2;
return number_field51947;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field51947);
/**
* Creates a password input field.
*/
sablono.core.password_field51948 = (function() {
var password_field51948 = null;
var password_field51948__1 = (function (name__13522__auto__){return password_field51948.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var password_field51948__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__13522__auto__,value__13523__auto__);
});
password_field51948 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return password_field51948__1.call(this,name__13522__auto__);
case 2:
return password_field51948__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field51948.cljs$core$IFn$_invoke$arity$1 = password_field51948__1;
password_field51948.cljs$core$IFn$_invoke$arity$2 = password_field51948__2;
return password_field51948;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field51948);
/**
* Creates a range input field.
*/
sablono.core.range_field51949 = (function() {
var range_field51949 = null;
var range_field51949__1 = (function (name__13522__auto__){return range_field51949.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var range_field51949__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__13522__auto__,value__13523__auto__);
});
range_field51949 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return range_field51949__1.call(this,name__13522__auto__);
case 2:
return range_field51949__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field51949.cljs$core$IFn$_invoke$arity$1 = range_field51949__1;
range_field51949.cljs$core$IFn$_invoke$arity$2 = range_field51949__2;
return range_field51949;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field51949);
/**
* Creates a search input field.
*/
sablono.core.search_field51950 = (function() {
var search_field51950 = null;
var search_field51950__1 = (function (name__13522__auto__){return search_field51950.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var search_field51950__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__13522__auto__,value__13523__auto__);
});
search_field51950 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return search_field51950__1.call(this,name__13522__auto__);
case 2:
return search_field51950__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field51950.cljs$core$IFn$_invoke$arity$1 = search_field51950__1;
search_field51950.cljs$core$IFn$_invoke$arity$2 = search_field51950__2;
return search_field51950;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field51950);
/**
* Creates a tel input field.
*/
sablono.core.tel_field51951 = (function() {
var tel_field51951 = null;
var tel_field51951__1 = (function (name__13522__auto__){return tel_field51951.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var tel_field51951__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__13522__auto__,value__13523__auto__);
});
tel_field51951 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return tel_field51951__1.call(this,name__13522__auto__);
case 2:
return tel_field51951__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field51951.cljs$core$IFn$_invoke$arity$1 = tel_field51951__1;
tel_field51951.cljs$core$IFn$_invoke$arity$2 = tel_field51951__2;
return tel_field51951;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field51951);
/**
* Creates a text input field.
*/
sablono.core.text_field51952 = (function() {
var text_field51952 = null;
var text_field51952__1 = (function (name__13522__auto__){return text_field51952.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var text_field51952__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__13522__auto__,value__13523__auto__);
});
text_field51952 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return text_field51952__1.call(this,name__13522__auto__);
case 2:
return text_field51952__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field51952.cljs$core$IFn$_invoke$arity$1 = text_field51952__1;
text_field51952.cljs$core$IFn$_invoke$arity$2 = text_field51952__2;
return text_field51952;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field51952);
/**
* Creates a time input field.
*/
sablono.core.time_field51953 = (function() {
var time_field51953 = null;
var time_field51953__1 = (function (name__13522__auto__){return time_field51953.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var time_field51953__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__13522__auto__,value__13523__auto__);
});
time_field51953 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return time_field51953__1.call(this,name__13522__auto__);
case 2:
return time_field51953__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field51953.cljs$core$IFn$_invoke$arity$1 = time_field51953__1;
time_field51953.cljs$core$IFn$_invoke$arity$2 = time_field51953__2;
return time_field51953;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field51953);
/**
* Creates a url input field.
*/
sablono.core.url_field51954 = (function() {
var url_field51954 = null;
var url_field51954__1 = (function (name__13522__auto__){return url_field51954.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var url_field51954__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__13522__auto__,value__13523__auto__);
});
url_field51954 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return url_field51954__1.call(this,name__13522__auto__);
case 2:
return url_field51954__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field51954.cljs$core$IFn$_invoke$arity$1 = url_field51954__1;
url_field51954.cljs$core$IFn$_invoke$arity$2 = url_field51954__2;
return url_field51954;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field51954);
/**
* Creates a week input field.
*/
sablono.core.week_field51955 = (function() {
var week_field51955 = null;
var week_field51955__1 = (function (name__13522__auto__){return week_field51955.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var week_field51955__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__13522__auto__,value__13523__auto__);
});
week_field51955 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return week_field51955__1.call(this,name__13522__auto__);
case 2:
return week_field51955__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field51955.cljs$core$IFn$_invoke$arity$1 = week_field51955__1;
week_field51955.cljs$core$IFn$_invoke$arity$2 = week_field51955__2;
return week_field51955;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field51955);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box51956 = (function() {
var check_box51956 = null;
var check_box51956__1 = (function (name){return check_box51956.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box51956__2 = (function (name,checked_QMARK_){return check_box51956.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box51956__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1055,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$974,"checkbox",cljs.core.constant$keyword$998,sablono.core.make_name(name),cljs.core.constant$keyword$976,sablono.core.make_id(name),cljs.core.constant$keyword$989,value,cljs.core.constant$keyword$1066,checked_QMARK_], null)], null);
});
check_box51956 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box51956__1.call(this,name);
case 2:
return check_box51956__2.call(this,name,checked_QMARK_);
case 3:
return check_box51956__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box51956.cljs$core$IFn$_invoke$arity$1 = check_box51956__1;
check_box51956.cljs$core$IFn$_invoke$arity$2 = check_box51956__2;
check_box51956.cljs$core$IFn$_invoke$arity$3 = check_box51956__3;
return check_box51956;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box51956);
/**
* Creates a radio button.
*/
sablono.core.radio_button51957 = (function() {
var radio_button51957 = null;
var radio_button51957__1 = (function (group){return radio_button51957.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button51957__2 = (function (group,checked_QMARK_){return radio_button51957.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button51957__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1055,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$974,"radio",cljs.core.constant$keyword$998,sablono.core.make_name(group),cljs.core.constant$keyword$976,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$989,value,cljs.core.constant$keyword$1066,checked_QMARK_], null)], null);
});
radio_button51957 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button51957__1.call(this,group);
case 2:
return radio_button51957__2.call(this,group,checked_QMARK_);
case 3:
return radio_button51957__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button51957.cljs$core$IFn$_invoke$arity$1 = radio_button51957__1;
radio_button51957.cljs$core$IFn$_invoke$arity$2 = radio_button51957__2;
radio_button51957.cljs$core$IFn$_invoke$arity$3 = radio_button51957__3;
return radio_button51957;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button51957);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options51958 = (function() {
var select_options51958 = null;
var select_options51958__1 = (function (coll){return select_options51958.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options51958__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__51967(s__51968){return (new cljs.core.LazySeq(null,(function (){var s__51968__$1 = s__51968;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51968__$1);if(temp__4126__auto__)
{var s__51968__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51968__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__51968__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__51970 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__51969 = (0);while(true){
if((i__51969 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__51969);cljs.core.chunk_append(b__51970,((cljs.core.sequential_QMARK_(x))?(function (){var vec__51973 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51973,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51973,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51973,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1067,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1068,text], null),select_options51958.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$989,val,cljs.core.constant$keyword$1069,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$1070,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1069,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__51975 = (i__51969 + (1));
i__51969 = G__51975;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51970),iter__51967(cljs.core.chunk_rest(s__51968__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51970),null);
}
} else
{var x = cljs.core.first(s__51968__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__51974 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51974,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51974,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51974,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1067,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1068,text], null),select_options51958.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$989,val,cljs.core.constant$keyword$1069,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$1070,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1069,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__51967(cljs.core.rest(s__51968__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(coll);
});
select_options51958 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options51958__1.call(this,coll);
case 2:
return select_options51958__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options51958.cljs$core$IFn$_invoke$arity$1 = select_options51958__1;
select_options51958.cljs$core$IFn$_invoke$arity$2 = select_options51958__2;
return select_options51958;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options51958);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down51976 = (function() {
var drop_down51976 = null;
var drop_down51976__2 = (function (name,options){return drop_down51976.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down51976__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1071,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$998,sablono.core.make_name(name),cljs.core.constant$keyword$976,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down51976 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down51976__2.call(this,name,options);
case 3:
return drop_down51976__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down51976.cljs$core$IFn$_invoke$arity$2 = drop_down51976__2;
drop_down51976.cljs$core$IFn$_invoke$arity$3 = drop_down51976__3;
return drop_down51976;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down51976);
/**
* Creates a text area element.
*/
sablono.core.text_area51977 = (function() {
var text_area51977 = null;
var text_area51977__1 = (function (name){return text_area51977.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area51977__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1053,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$998,sablono.core.make_name(name),cljs.core.constant$keyword$976,sablono.core.make_id(name),cljs.core.constant$keyword$989,value], null)], null);
});
text_area51977 = function(name,value){
switch(arguments.length){
case 1:
return text_area51977__1.call(this,name);
case 2:
return text_area51977__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area51977.cljs$core$IFn$_invoke$arity$1 = text_area51977__1;
text_area51977.cljs$core$IFn$_invoke$arity$2 = text_area51977__2;
return text_area51977;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area51977);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label51978 = (function label51978(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1068,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1052,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label51978);
/**
* Creates a submit button.
*/
sablono.core.submit_button51979 = (function submit_button51979(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1055,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,"submit",cljs.core.constant$keyword$989,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button51979);
/**
* Creates a form reset button.
*/
sablono.core.reset_button51980 = (function reset_button51980(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1055,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,"reset",cljs.core.constant$keyword$989,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button51980);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to51981 = (function() { 
var form_to51981__delegate = function (p__51982,body){var vec__51984 = p__51982;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51984,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51984,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1072,null,cljs.core.constant$keyword$1073,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1074,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$951,method_str,cljs.core.constant$keyword$1075,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1074,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$951,"POST",cljs.core.constant$keyword$1075,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to51981 = function (p__51982,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to51981__delegate.call(this,p__51982,body);};
form_to51981.cljs$lang$maxFixedArity = 1;
form_to51981.cljs$lang$applyTo = (function (arglist__51985){
var p__51982 = cljs.core.first(arglist__51985);
var body = cljs.core.rest(arglist__51985);
return form_to51981__delegate(p__51982,body);
});
form_to51981.cljs$core$IFn$_invoke$arity$variadic = form_to51981__delegate;
return form_to51981;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to51981);
