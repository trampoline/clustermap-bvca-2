// Compiled by ClojureScript 0.0-2138
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
var G__26198__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__26197 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26197,0,null);var body = cljs.core.nthnext(vec__26197,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__26198 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26198__delegate.call(this,args);};
G__26198.cljs$lang$maxFixedArity = 0;
G__26198.cljs$lang$applyTo = (function (arglist__26199){
var args = cljs.core.seq(arglist__26199);
return G__26198__delegate(args);
});
G__26198.cljs$core$IFn$_invoke$arity$variadic = G__26198__delegate;
return G__26198;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26204(s__26205){return (new cljs.core.LazySeq(null,(function (){var s__26205__$1 = s__26205;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26205__$1);if(temp__4092__auto__)
{var s__26205__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26205__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26205__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26207 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26206 = 0;while(true){
if((i__26206 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26206);cljs.core.chunk_append(b__26207,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26208 = (i__26206 + 1);
i__26206 = G__26208;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26207),iter__26204(cljs.core.chunk_rest(s__26205__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26207),null);
}
} else
{var args = cljs.core.first(s__26205__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26204(cljs.core.rest(s__26205__$2)));
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
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__26209_SHARP_){return cljs.core.reset_BANG_(html,p1__26209_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26214(s__26215){return (new cljs.core.LazySeq(null,(function (){var s__26215__$1 = s__26215;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26215__$1);if(temp__4092__auto__)
{var s__26215__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26215__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26215__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26217 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26216 = 0;while(true){
if((i__26216 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26216);cljs.core.chunk_append(b__26217,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$235,"text/css",cljs.core.constant$keyword$236,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$237,"stylesheet"], null)], null));
{
var G__26218 = (i__26216 + 1);
i__26216 = G__26218;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26217),iter__26214(cljs.core.chunk_rest(s__26215__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26217),null);
}
} else
{var style = cljs.core.first(s__26215__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$235,"text/css",cljs.core.constant$keyword$236,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$237,"stylesheet"], null)], null),iter__26214(cljs.core.rest(s__26215__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26219){
var styles = cljs.core.seq(arglist__26219);
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
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to26220 = (function() { 
var link_to26220__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$236,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26220 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26220__delegate.call(this,url,content);};
link_to26220.cljs$lang$maxFixedArity = 1;
link_to26220.cljs$lang$applyTo = (function (arglist__26221){
var url = cljs.core.first(arglist__26221);
var content = cljs.core.rest(arglist__26221);
return link_to26220__delegate(url,content);
});
link_to26220.cljs$core$IFn$_invoke$arity$variadic = link_to26220__delegate;
return link_to26220;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26220);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26222 = (function() { 
var mail_to26222__delegate = function (e_mail,p__26223){var vec__26225 = p__26223;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26225,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$236,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26222 = function (e_mail,var_args){
var p__26223 = null;if (arguments.length > 1) {
  p__26223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26222__delegate.call(this,e_mail,p__26223);};
mail_to26222.cljs$lang$maxFixedArity = 1;
mail_to26222.cljs$lang$applyTo = (function (arglist__26226){
var e_mail = cljs.core.first(arglist__26226);
var p__26223 = cljs.core.rest(arglist__26226);
return mail_to26222__delegate(e_mail,p__26223);
});
mail_to26222.cljs$core$IFn$_invoke$arity$variadic = mail_to26222__delegate;
return mail_to26222;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26222);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26227 = (function unordered_list26227(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,(function (){var iter__4117__auto__ = (function iter__26232(s__26233){return (new cljs.core.LazySeq(null,(function (){var s__26233__$1 = s__26233;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26233__$1);if(temp__4092__auto__)
{var s__26233__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26233__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26233__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26235 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26234 = 0;while(true){
if((i__26234 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26234);cljs.core.chunk_append(b__26235,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,x], null));
{
var G__26236 = (i__26234 + 1);
i__26234 = G__26236;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26235),iter__26232(cljs.core.chunk_rest(s__26233__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26235),null);
}
} else
{var x = cljs.core.first(s__26233__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,x], null),iter__26232(cljs.core.rest(s__26233__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26227);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26237 = (function ordered_list26237(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,(function (){var iter__4117__auto__ = (function iter__26242(s__26243){return (new cljs.core.LazySeq(null,(function (){var s__26243__$1 = s__26243;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26243__$1);if(temp__4092__auto__)
{var s__26243__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26243__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26243__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26245 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26244 = 0;while(true){
if((i__26244 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26244);cljs.core.chunk_append(b__26245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,x], null));
{
var G__26246 = (i__26244 + 1);
i__26244 = G__26246;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26245),iter__26242(cljs.core.chunk_rest(s__26243__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26245),null);
}
} else
{var x = cljs.core.first(s__26243__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,x], null),iter__26242(cljs.core.rest(s__26243__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26237);
/**
* Create an image element.
*/
sablono.core.image26247 = (function() {
var image26247 = null;
var image26247__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$243,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26247__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$243,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$244,alt], null)], null);
});
image26247 = function(src,alt){
switch(arguments.length){
case 1:
return image26247__1.call(this,src);
case 2:
return image26247__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26247.cljs$core$IFn$_invoke$arity$1 = image26247__1;
image26247.cljs$core$IFn$_invoke$arity$2 = image26247__2;
return image26247;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26247);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26248_SHARP_,p2__26249_SHARP_){return [cljs.core.str(p1__26248_SHARP_),cljs.core.str("["),cljs.core.str(p2__26249_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26250_SHARP_,p2__26251_SHARP_){return [cljs.core.str(p1__26250_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26251_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$235,type,cljs.core.constant$keyword$245,sablono.core.make_name(name),cljs.core.constant$keyword$231,sablono.core.make_id(name),cljs.core.constant$keyword$203,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26252 = (function() {
var hidden_field26252 = null;
var hidden_field26252__1 = (function (name){return hidden_field26252.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26252__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26252 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26252__1.call(this,name);
case 2:
return hidden_field26252__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26252.cljs$core$IFn$_invoke$arity$1 = hidden_field26252__1;
hidden_field26252.cljs$core$IFn$_invoke$arity$2 = hidden_field26252__2;
return hidden_field26252;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26252);
/**
* Creates a new text input field.
*/
sablono.core.text_field26253 = (function() {
var text_field26253 = null;
var text_field26253__1 = (function (name){return text_field26253.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26253__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26253 = function(name,value){
switch(arguments.length){
case 1:
return text_field26253__1.call(this,name);
case 2:
return text_field26253__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26253.cljs$core$IFn$_invoke$arity$1 = text_field26253__1;
text_field26253.cljs$core$IFn$_invoke$arity$2 = text_field26253__2;
return text_field26253;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26253);
/**
* Creates a new password field.
*/
sablono.core.password_field26254 = (function() {
var password_field26254 = null;
var password_field26254__1 = (function (name){return password_field26254.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26254__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26254 = function(name,value){
switch(arguments.length){
case 1:
return password_field26254__1.call(this,name);
case 2:
return password_field26254__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26254.cljs$core$IFn$_invoke$arity$1 = password_field26254__1;
password_field26254.cljs$core$IFn$_invoke$arity$2 = password_field26254__2;
return password_field26254;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26254);
/**
* Creates a new email input field.
*/
sablono.core.email_field26255 = (function() {
var email_field26255 = null;
var email_field26255__1 = (function (name){return email_field26255.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26255__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26255 = function(name,value){
switch(arguments.length){
case 1:
return email_field26255__1.call(this,name);
case 2:
return email_field26255__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26255.cljs$core$IFn$_invoke$arity$1 = email_field26255__1;
email_field26255.cljs$core$IFn$_invoke$arity$2 = email_field26255__2;
return email_field26255;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26255);
/**
* Creates a check box.
*/
sablono.core.check_box26256 = (function() {
var check_box26256 = null;
var check_box26256__1 = (function (name){return check_box26256.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26256__2 = (function (name,checked_QMARK_){return check_box26256.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26256__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$235,"checkbox",cljs.core.constant$keyword$245,sablono.core.make_name(name),cljs.core.constant$keyword$231,sablono.core.make_id(name),cljs.core.constant$keyword$203,value,cljs.core.constant$keyword$246,checked_QMARK_], null)], null);
});
check_box26256 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26256__1.call(this,name);
case 2:
return check_box26256__2.call(this,name,checked_QMARK_);
case 3:
return check_box26256__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26256.cljs$core$IFn$_invoke$arity$1 = check_box26256__1;
check_box26256.cljs$core$IFn$_invoke$arity$2 = check_box26256__2;
check_box26256.cljs$core$IFn$_invoke$arity$3 = check_box26256__3;
return check_box26256;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26256);
/**
* Creates a radio button.
*/
sablono.core.radio_button26257 = (function() {
var radio_button26257 = null;
var radio_button26257__1 = (function (group){return radio_button26257.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26257__2 = (function (group,checked_QMARK_){return radio_button26257.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26257__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$235,"radio",cljs.core.constant$keyword$245,sablono.core.make_name(group),cljs.core.constant$keyword$231,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$203,value,cljs.core.constant$keyword$246,checked_QMARK_], null)], null);
});
radio_button26257 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26257__1.call(this,group);
case 2:
return radio_button26257__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26257__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26257.cljs$core$IFn$_invoke$arity$1 = radio_button26257__1;
radio_button26257.cljs$core$IFn$_invoke$arity$2 = radio_button26257__2;
radio_button26257.cljs$core$IFn$_invoke$arity$3 = radio_button26257__3;
return radio_button26257;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26257);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26258 = (function() {
var select_options26258 = null;
var select_options26258__1 = (function (coll){return select_options26258.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26258__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26267(s__26268){return (new cljs.core.LazySeq(null,(function (){var s__26268__$1 = s__26268;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26268__$1);if(temp__4092__auto__)
{var s__26268__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26268__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26268__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26270 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26269 = 0;while(true){
if((i__26269 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26269);cljs.core.chunk_append(b__26270,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26273 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26273,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26273,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,text], null),select_options26258.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$203,val,cljs.core.constant$keyword$250,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26275 = (i__26269 + 1);
i__26269 = G__26275;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26270),iter__26267(cljs.core.chunk_rest(s__26268__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26270),null);
}
} else
{var x = cljs.core.first(s__26268__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26274 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26274,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26274,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,text], null),select_options26258.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$203,val,cljs.core.constant$keyword$250,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26267(cljs.core.rest(s__26268__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26258 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26258__1.call(this,coll);
case 2:
return select_options26258__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26258.cljs$core$IFn$_invoke$arity$1 = select_options26258__1;
select_options26258.cljs$core$IFn$_invoke$arity$2 = select_options26258__2;
return select_options26258;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26258);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26276 = (function() {
var drop_down26276 = null;
var drop_down26276__2 = (function (name,options){return drop_down26276.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26276__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$245,sablono.core.make_name(name),cljs.core.constant$keyword$231,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26276 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26276__2.call(this,name,options);
case 3:
return drop_down26276__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26276.cljs$core$IFn$_invoke$arity$2 = drop_down26276__2;
drop_down26276.cljs$core$IFn$_invoke$arity$3 = drop_down26276__3;
return drop_down26276;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26276);
/**
* Creates a text area element.
*/
sablono.core.text_area26277 = (function() {
var text_area26277 = null;
var text_area26277__1 = (function (name){return text_area26277.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26277__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$245,sablono.core.make_name(name),cljs.core.constant$keyword$231,sablono.core.make_id(name),cljs.core.constant$keyword$203,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area26277 = function(name,value){
switch(arguments.length){
case 1:
return text_area26277__1.call(this,name);
case 2:
return text_area26277__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26277.cljs$core$IFn$_invoke$arity$1 = text_area26277__1;
text_area26277.cljs$core$IFn$_invoke$arity$2 = text_area26277__2;
return text_area26277;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26277);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26278 = (function file_upload26278(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26278);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26279 = (function label26279(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$228,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26279);
/**
* Creates a submit button.
*/
sablono.core.submit_button26280 = (function submit_button26280(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"submit",cljs.core.constant$keyword$203,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26280);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26281 = (function reset_button26281(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"reset",cljs.core.constant$keyword$203,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26281);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26282 = (function() { 
var form_to26282__delegate = function (p__26283,body){var vec__26285 = p__26283;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26285,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26285,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,null,cljs.core.constant$keyword$253,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,method_str,cljs.core.constant$keyword$256,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,"POST",cljs.core.constant$keyword$256,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26282 = function (p__26283,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26282__delegate.call(this,p__26283,body);};
form_to26282.cljs$lang$maxFixedArity = 1;
form_to26282.cljs$lang$applyTo = (function (arglist__26286){
var p__26283 = cljs.core.first(arglist__26286);
var body = cljs.core.rest(arglist__26286);
return form_to26282__delegate(p__26283,body);
});
form_to26282.cljs$core$IFn$_invoke$arity$variadic = form_to26282__delegate;
return form_to26282;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26282);
