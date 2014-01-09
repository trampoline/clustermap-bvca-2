// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__24454__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__24453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24453,0,null);var body = cljs.core.nthnext(vec__24453,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24454 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24454__delegate.call(this,args);};
G__24454.cljs$lang$maxFixedArity = 0;
G__24454.cljs$lang$applyTo = (function (arglist__24455){
var args = cljs.core.seq(arglist__24455);
return G__24454__delegate(args);
});
G__24454.cljs$core$IFn$_invoke$arity$variadic = G__24454__delegate;
return G__24454;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__24460(s__24461){return (new cljs.core.LazySeq(null,(function (){var s__24461__$1 = s__24461;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24461__$1);if(temp__4092__auto__)
{var s__24461__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24461__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24461__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24463 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24462 = 0;while(true){
if((i__24462 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24462);cljs.core.chunk_append(b__24463,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__24464 = (i__24462 + 1);
i__24462 = G__24464;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24463),iter__24460(cljs.core.chunk_rest(s__24461__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24463),null);
}
} else
{var args = cljs.core.first(s__24461__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__24460(cljs.core.rest(s__24461__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(arglists);
});
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__24469(s__24470){return (new cljs.core.LazySeq(null,(function (){var s__24470__$1 = s__24470;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24470__$1);if(temp__4092__auto__)
{var s__24470__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24470__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24470__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24472 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24471 = 0;while(true){
if((i__24471 < size__4116__auto__))
{var script = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24471);cljs.core.chunk_append(b__24472,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"text/javascript",cljs.core.constant$keyword$143,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null));
{
var G__24473 = (i__24471 + 1);
i__24471 = G__24473;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24472),iter__24469(cljs.core.chunk_rest(s__24470__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24472),null);
}
} else
{var script = cljs.core.first(s__24470__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"text/javascript",cljs.core.constant$keyword$143,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null),iter__24469(cljs.core.rest(s__24470__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__24474){
var scripts = cljs.core.seq(arglist__24474);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__24479(s__24480){return (new cljs.core.LazySeq(null,(function (){var s__24480__$1 = s__24480;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24480__$1);if(temp__4092__auto__)
{var s__24480__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24480__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24480__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24482 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24481 = 0;while(true){
if((i__24481 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24481);cljs.core.chunk_append(b__24482,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$142,"text/css",cljs.core.constant$keyword$145,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$146,"stylesheet"], null)], null));
{
var G__24483 = (i__24481 + 1);
i__24481 = G__24483;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24482),iter__24479(cljs.core.chunk_rest(s__24480__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24482),null);
}
} else
{var style = cljs.core.first(s__24480__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$142,"text/css",cljs.core.constant$keyword$145,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$146,"stylesheet"], null)], null),iter__24479(cljs.core.rest(s__24480__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__24484){
var styles = cljs.core.seq(arglist__24484);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$142,"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to24485 = (function() { 
var link_to24485__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24485 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to24485__delegate.call(this,url,content);};
link_to24485.cljs$lang$maxFixedArity = 1;
link_to24485.cljs$lang$applyTo = (function (arglist__24486){
var url = cljs.core.first(arglist__24486);
var content = cljs.core.rest(arglist__24486);
return link_to24485__delegate(url,content);
});
link_to24485.cljs$core$IFn$_invoke$arity$variadic = link_to24485__delegate;
return link_to24485;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24485);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24487 = (function() { 
var mail_to24487__delegate = function (e_mail,p__24488){var vec__24490 = p__24488;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24490,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to24487 = function (e_mail,var_args){
var p__24488 = null;if (arguments.length > 1) {
  p__24488 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to24487__delegate.call(this,e_mail,p__24488);};
mail_to24487.cljs$lang$maxFixedArity = 1;
mail_to24487.cljs$lang$applyTo = (function (arglist__24491){
var e_mail = cljs.core.first(arglist__24491);
var p__24488 = cljs.core.rest(arglist__24491);
return mail_to24487__delegate(e_mail,p__24488);
});
mail_to24487.cljs$core$IFn$_invoke$arity$variadic = mail_to24487__delegate;
return mail_to24487;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24487);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24492 = (function unordered_list24492(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$148,(function (){var iter__4117__auto__ = (function iter__24497(s__24498){return (new cljs.core.LazySeq(null,(function (){var s__24498__$1 = s__24498;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24498__$1);if(temp__4092__auto__)
{var s__24498__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24498__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24498__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24500 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24499 = 0;while(true){
if((i__24499 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24499);cljs.core.chunk_append(b__24500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,x], null));
{
var G__24501 = (i__24499 + 1);
i__24499 = G__24501;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24500),iter__24497(cljs.core.chunk_rest(s__24498__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24500),null);
}
} else
{var x = cljs.core.first(s__24498__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,x], null),iter__24497(cljs.core.rest(s__24498__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24492);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24502 = (function ordered_list24502(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,(function (){var iter__4117__auto__ = (function iter__24507(s__24508){return (new cljs.core.LazySeq(null,(function (){var s__24508__$1 = s__24508;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24508__$1);if(temp__4092__auto__)
{var s__24508__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24508__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24508__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24510 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24509 = 0;while(true){
if((i__24509 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24509);cljs.core.chunk_append(b__24510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,x], null));
{
var G__24511 = (i__24509 + 1);
i__24509 = G__24511;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24510),iter__24507(cljs.core.chunk_rest(s__24508__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24510),null);
}
} else
{var x = cljs.core.first(s__24508__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,x], null),iter__24507(cljs.core.rest(s__24508__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24502);
/**
* Create an image element.
*/
sablono.core.image24512 = (function() {
var image24512 = null;
var image24512__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image24512__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$143,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$152,alt], null)], null);
});
image24512 = function(src,alt){
switch(arguments.length){
case 1:
return image24512__1.call(this,src);
case 2:
return image24512__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24512.cljs$core$IFn$_invoke$arity$1 = image24512__1;
image24512.cljs$core$IFn$_invoke$arity$2 = image24512__2;
return image24512;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image24512);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24513_SHARP_,p2__24514_SHARP_){return [cljs.core.str(p1__24513_SHARP_),cljs.core.str("["),cljs.core.str(p2__24514_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24515_SHARP_,p2__24516_SHARP_){return [cljs.core.str(p1__24515_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24516_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$142,type,cljs.core.constant$keyword$154,sablono.core.make_name(name),cljs.core.constant$keyword$140,sablono.core.make_id(name),cljs.core.constant$keyword$117,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24517 = (function() {
var hidden_field24517 = null;
var hidden_field24517__1 = (function (name){return hidden_field24517.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field24517__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field24517 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field24517__1.call(this,name);
case 2:
return hidden_field24517__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24517.cljs$core$IFn$_invoke$arity$1 = hidden_field24517__1;
hidden_field24517.cljs$core$IFn$_invoke$arity$2 = hidden_field24517__2;
return hidden_field24517;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field24517);
/**
* Creates a new text input field.
*/
sablono.core.text_field24518 = (function() {
var text_field24518 = null;
var text_field24518__1 = (function (name){return text_field24518.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field24518__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field24518 = function(name,value){
switch(arguments.length){
case 1:
return text_field24518__1.call(this,name);
case 2:
return text_field24518__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24518.cljs$core$IFn$_invoke$arity$1 = text_field24518__1;
text_field24518.cljs$core$IFn$_invoke$arity$2 = text_field24518__2;
return text_field24518;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field24518);
/**
* Creates a new password field.
*/
sablono.core.password_field24519 = (function() {
var password_field24519 = null;
var password_field24519__1 = (function (name){return password_field24519.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field24519__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field24519 = function(name,value){
switch(arguments.length){
case 1:
return password_field24519__1.call(this,name);
case 2:
return password_field24519__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24519.cljs$core$IFn$_invoke$arity$1 = password_field24519__1;
password_field24519.cljs$core$IFn$_invoke$arity$2 = password_field24519__2;
return password_field24519;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field24519);
/**
* Creates a new email input field.
*/
sablono.core.email_field24520 = (function() {
var email_field24520 = null;
var email_field24520__1 = (function (name){return email_field24520.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field24520__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field24520 = function(name,value){
switch(arguments.length){
case 1:
return email_field24520__1.call(this,name);
case 2:
return email_field24520__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24520.cljs$core$IFn$_invoke$arity$1 = email_field24520__1;
email_field24520.cljs$core$IFn$_invoke$arity$2 = email_field24520__2;
return email_field24520;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field24520);
/**
* Creates a check box.
*/
sablono.core.check_box24521 = (function() {
var check_box24521 = null;
var check_box24521__1 = (function (name){return check_box24521.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box24521__2 = (function (name,checked_QMARK_){return check_box24521.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box24521__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$142,"checkbox",cljs.core.constant$keyword$154,sablono.core.make_name(name),cljs.core.constant$keyword$140,sablono.core.make_id(name),cljs.core.constant$keyword$117,value,cljs.core.constant$keyword$155,checked_QMARK_], null)], null);
});
check_box24521 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24521__1.call(this,name);
case 2:
return check_box24521__2.call(this,name,checked_QMARK_);
case 3:
return check_box24521__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24521.cljs$core$IFn$_invoke$arity$1 = check_box24521__1;
check_box24521.cljs$core$IFn$_invoke$arity$2 = check_box24521__2;
check_box24521.cljs$core$IFn$_invoke$arity$3 = check_box24521__3;
return check_box24521;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box24521);
/**
* Creates a radio button.
*/
sablono.core.radio_button24522 = (function() {
var radio_button24522 = null;
var radio_button24522__1 = (function (group){return radio_button24522.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button24522__2 = (function (group,checked_QMARK_){return radio_button24522.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button24522__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$142,"radio",cljs.core.constant$keyword$154,sablono.core.make_name(group),cljs.core.constant$keyword$140,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$117,value,cljs.core.constant$keyword$155,checked_QMARK_], null)], null);
});
radio_button24522 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24522__1.call(this,group);
case 2:
return radio_button24522__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24522__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24522.cljs$core$IFn$_invoke$arity$1 = radio_button24522__1;
radio_button24522.cljs$core$IFn$_invoke$arity$2 = radio_button24522__2;
radio_button24522.cljs$core$IFn$_invoke$arity$3 = radio_button24522__3;
return radio_button24522;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button24522);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24523 = (function() {
var select_options24523 = null;
var select_options24523__1 = (function (coll){return select_options24523.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options24523__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__24532(s__24533){return (new cljs.core.LazySeq(null,(function (){var s__24533__$1 = s__24533;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24533__$1);if(temp__4092__auto__)
{var s__24533__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24533__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24533__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24535 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24534 = 0;while(true){
if((i__24534 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24534);cljs.core.chunk_append(b__24535,((cljs.core.sequential_QMARK_(x))?(function (){var vec__24538 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24538,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24538,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$157,text], null),select_options24523.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$117,val,cljs.core.constant$keyword$159,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$159,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__24540 = (i__24534 + 1);
i__24534 = G__24540;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24535),iter__24532(cljs.core.chunk_rest(s__24533__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24535),null);
}
} else
{var x = cljs.core.first(s__24533__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__24539 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24539,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24539,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$157,text], null),select_options24523.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$117,val,cljs.core.constant$keyword$159,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$159,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__24532(cljs.core.rest(s__24533__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options24523 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24523__1.call(this,coll);
case 2:
return select_options24523__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24523.cljs$core$IFn$_invoke$arity$1 = select_options24523__1;
select_options24523.cljs$core$IFn$_invoke$arity$2 = select_options24523__2;
return select_options24523;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options24523);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24541 = (function() {
var drop_down24541 = null;
var drop_down24541__2 = (function (name,options){return drop_down24541.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down24541__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$154,sablono.core.make_name(name),cljs.core.constant$keyword$140,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down24541 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24541__2.call(this,name,options);
case 3:
return drop_down24541__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24541.cljs$core$IFn$_invoke$arity$2 = drop_down24541__2;
drop_down24541.cljs$core$IFn$_invoke$arity$3 = drop_down24541__3;
return drop_down24541;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down24541);
/**
* Creates a text area element.
*/
sablono.core.text_area24542 = (function() {
var text_area24542 = null;
var text_area24542__1 = (function (name){return text_area24542.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area24542__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$154,sablono.core.make_name(name),cljs.core.constant$keyword$140,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area24542 = function(name,value){
switch(arguments.length){
case 1:
return text_area24542__1.call(this,name);
case 2:
return text_area24542__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24542.cljs$core$IFn$_invoke$arity$1 = text_area24542__1;
text_area24542.cljs$core$IFn$_invoke$arity$2 = text_area24542__2;
return text_area24542;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area24542);
/**
* Creates a file upload input.
*/
sablono.core.file_upload24543 = (function file_upload24543(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload24543);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24544 = (function label24544(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$162,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label24544);
/**
* Creates a submit button.
*/
sablono.core.submit_button24545 = (function submit_button24545(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"submit",cljs.core.constant$keyword$117,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24545);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24546 = (function reset_button24546(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"reset",cljs.core.constant$keyword$117,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24546);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24547 = (function() { 
var form_to24547__delegate = function (p__24548,body){var vec__24550 = p__24548;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24550,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24550,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$163,null,cljs.core.constant$keyword$164,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$166,method_str,cljs.core.constant$keyword$167,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$166,"POST",cljs.core.constant$keyword$167,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to24547 = function (p__24548,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to24547__delegate.call(this,p__24548,body);};
form_to24547.cljs$lang$maxFixedArity = 1;
form_to24547.cljs$lang$applyTo = (function (arglist__24551){
var p__24548 = cljs.core.first(arglist__24551);
var body = cljs.core.rest(arglist__24551);
return form_to24547__delegate(p__24548,body);
});
form_to24547.cljs$core$IFn$_invoke$arity$variadic = form_to24547__delegate;
return form_to24547;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24547);
