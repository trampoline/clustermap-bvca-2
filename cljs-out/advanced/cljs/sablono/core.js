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
var G__26275__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__26274 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26274,0,null);var body = cljs.core.nthnext(vec__26274,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__26275 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26275__delegate.call(this,args);};
G__26275.cljs$lang$maxFixedArity = 0;
G__26275.cljs$lang$applyTo = (function (arglist__26276){
var args = cljs.core.seq(arglist__26276);
return G__26275__delegate(args);
});
G__26275.cljs$core$IFn$_invoke$arity$variadic = G__26275__delegate;
return G__26275;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26281(s__26282){return (new cljs.core.LazySeq(null,(function (){var s__26282__$1 = s__26282;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26282__$1);if(temp__4092__auto__)
{var s__26282__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26282__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26282__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26284 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26283 = 0;while(true){
if((i__26283 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26283);cljs.core.chunk_append(b__26284,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26285 = (i__26283 + 1);
i__26283 = G__26285;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26284),iter__26281(cljs.core.chunk_rest(s__26282__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26284),null);
}
} else
{var args = cljs.core.first(s__26282__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26281(cljs.core.rest(s__26282__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__26286_SHARP_){return cljs.core.reset_BANG_(html,p1__26286_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26291(s__26292){return (new cljs.core.LazySeq(null,(function (){var s__26292__$1 = s__26292;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26292__$1);if(temp__4092__auto__)
{var s__26292__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26292__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26292__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26294 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26293 = 0;while(true){
if((i__26293 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26293);cljs.core.chunk_append(b__26294,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$242,"text/css",cljs.core.constant$keyword$243,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$244,"stylesheet"], null)], null));
{
var G__26295 = (i__26293 + 1);
i__26293 = G__26295;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26294),iter__26291(cljs.core.chunk_rest(s__26292__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26294),null);
}
} else
{var style = cljs.core.first(s__26292__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$242,"text/css",cljs.core.constant$keyword$243,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$244,"stylesheet"], null)], null),iter__26291(cljs.core.rest(s__26292__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26296){
var styles = cljs.core.seq(arglist__26296);
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
sablono.core.link_to26297 = (function() { 
var link_to26297__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$243,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26297 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26297__delegate.call(this,url,content);};
link_to26297.cljs$lang$maxFixedArity = 1;
link_to26297.cljs$lang$applyTo = (function (arglist__26298){
var url = cljs.core.first(arglist__26298);
var content = cljs.core.rest(arglist__26298);
return link_to26297__delegate(url,content);
});
link_to26297.cljs$core$IFn$_invoke$arity$variadic = link_to26297__delegate;
return link_to26297;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26297);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26299 = (function() { 
var mail_to26299__delegate = function (e_mail,p__26300){var vec__26302 = p__26300;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26302,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$243,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26299 = function (e_mail,var_args){
var p__26300 = null;if (arguments.length > 1) {
  p__26300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26299__delegate.call(this,e_mail,p__26300);};
mail_to26299.cljs$lang$maxFixedArity = 1;
mail_to26299.cljs$lang$applyTo = (function (arglist__26303){
var e_mail = cljs.core.first(arglist__26303);
var p__26300 = cljs.core.rest(arglist__26303);
return mail_to26299__delegate(e_mail,p__26300);
});
mail_to26299.cljs$core$IFn$_invoke$arity$variadic = mail_to26299__delegate;
return mail_to26299;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26299);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26304 = (function unordered_list26304(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,(function (){var iter__4117__auto__ = (function iter__26309(s__26310){return (new cljs.core.LazySeq(null,(function (){var s__26310__$1 = s__26310;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26310__$1);if(temp__4092__auto__)
{var s__26310__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26310__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26310__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26312 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26311 = 0;while(true){
if((i__26311 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26311);cljs.core.chunk_append(b__26312,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,x], null));
{
var G__26313 = (i__26311 + 1);
i__26311 = G__26313;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26312),iter__26309(cljs.core.chunk_rest(s__26310__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26312),null);
}
} else
{var x = cljs.core.first(s__26310__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,x], null),iter__26309(cljs.core.rest(s__26310__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26304);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26314 = (function ordered_list26314(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,(function (){var iter__4117__auto__ = (function iter__26319(s__26320){return (new cljs.core.LazySeq(null,(function (){var s__26320__$1 = s__26320;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26320__$1);if(temp__4092__auto__)
{var s__26320__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26320__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26320__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26322 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26321 = 0;while(true){
if((i__26321 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26321);cljs.core.chunk_append(b__26322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,x], null));
{
var G__26323 = (i__26321 + 1);
i__26321 = G__26323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26322),iter__26319(cljs.core.chunk_rest(s__26320__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26322),null);
}
} else
{var x = cljs.core.first(s__26320__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,x], null),iter__26319(cljs.core.rest(s__26320__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26314);
/**
* Create an image element.
*/
sablono.core.image26324 = (function() {
var image26324 = null;
var image26324__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26324__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$250,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$251,alt], null)], null);
});
image26324 = function(src,alt){
switch(arguments.length){
case 1:
return image26324__1.call(this,src);
case 2:
return image26324__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26324.cljs$core$IFn$_invoke$arity$1 = image26324__1;
image26324.cljs$core$IFn$_invoke$arity$2 = image26324__2;
return image26324;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26324);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26325_SHARP_,p2__26326_SHARP_){return [cljs.core.str(p1__26325_SHARP_),cljs.core.str("["),cljs.core.str(p2__26326_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26327_SHARP_,p2__26328_SHARP_){return [cljs.core.str(p1__26327_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26328_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$242,type,cljs.core.constant$keyword$252,sablono.core.make_name(name),cljs.core.constant$keyword$238,sablono.core.make_id(name),cljs.core.constant$keyword$210,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26329 = (function() {
var hidden_field26329 = null;
var hidden_field26329__1 = (function (name){return hidden_field26329.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26329__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26329 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26329__1.call(this,name);
case 2:
return hidden_field26329__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26329.cljs$core$IFn$_invoke$arity$1 = hidden_field26329__1;
hidden_field26329.cljs$core$IFn$_invoke$arity$2 = hidden_field26329__2;
return hidden_field26329;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26329);
/**
* Creates a new text input field.
*/
sablono.core.text_field26330 = (function() {
var text_field26330 = null;
var text_field26330__1 = (function (name){return text_field26330.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26330__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26330 = function(name,value){
switch(arguments.length){
case 1:
return text_field26330__1.call(this,name);
case 2:
return text_field26330__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26330.cljs$core$IFn$_invoke$arity$1 = text_field26330__1;
text_field26330.cljs$core$IFn$_invoke$arity$2 = text_field26330__2;
return text_field26330;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26330);
/**
* Creates a new password field.
*/
sablono.core.password_field26331 = (function() {
var password_field26331 = null;
var password_field26331__1 = (function (name){return password_field26331.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26331__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26331 = function(name,value){
switch(arguments.length){
case 1:
return password_field26331__1.call(this,name);
case 2:
return password_field26331__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26331.cljs$core$IFn$_invoke$arity$1 = password_field26331__1;
password_field26331.cljs$core$IFn$_invoke$arity$2 = password_field26331__2;
return password_field26331;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26331);
/**
* Creates a new email input field.
*/
sablono.core.email_field26332 = (function() {
var email_field26332 = null;
var email_field26332__1 = (function (name){return email_field26332.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26332__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26332 = function(name,value){
switch(arguments.length){
case 1:
return email_field26332__1.call(this,name);
case 2:
return email_field26332__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26332.cljs$core$IFn$_invoke$arity$1 = email_field26332__1;
email_field26332.cljs$core$IFn$_invoke$arity$2 = email_field26332__2;
return email_field26332;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26332);
/**
* Creates a check box.
*/
sablono.core.check_box26333 = (function() {
var check_box26333 = null;
var check_box26333__1 = (function (name){return check_box26333.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26333__2 = (function (name,checked_QMARK_){return check_box26333.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26333__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$242,"checkbox",cljs.core.constant$keyword$252,sablono.core.make_name(name),cljs.core.constant$keyword$238,sablono.core.make_id(name),cljs.core.constant$keyword$210,value,cljs.core.constant$keyword$253,checked_QMARK_], null)], null);
});
check_box26333 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26333__1.call(this,name);
case 2:
return check_box26333__2.call(this,name,checked_QMARK_);
case 3:
return check_box26333__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26333.cljs$core$IFn$_invoke$arity$1 = check_box26333__1;
check_box26333.cljs$core$IFn$_invoke$arity$2 = check_box26333__2;
check_box26333.cljs$core$IFn$_invoke$arity$3 = check_box26333__3;
return check_box26333;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26333);
/**
* Creates a radio button.
*/
sablono.core.radio_button26334 = (function() {
var radio_button26334 = null;
var radio_button26334__1 = (function (group){return radio_button26334.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26334__2 = (function (group,checked_QMARK_){return radio_button26334.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26334__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$242,"radio",cljs.core.constant$keyword$252,sablono.core.make_name(group),cljs.core.constant$keyword$238,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$210,value,cljs.core.constant$keyword$253,checked_QMARK_], null)], null);
});
radio_button26334 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26334__1.call(this,group);
case 2:
return radio_button26334__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26334__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26334.cljs$core$IFn$_invoke$arity$1 = radio_button26334__1;
radio_button26334.cljs$core$IFn$_invoke$arity$2 = radio_button26334__2;
radio_button26334.cljs$core$IFn$_invoke$arity$3 = radio_button26334__3;
return radio_button26334;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26334);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26335 = (function() {
var select_options26335 = null;
var select_options26335__1 = (function (coll){return select_options26335.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26335__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26344(s__26345){return (new cljs.core.LazySeq(null,(function (){var s__26345__$1 = s__26345;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26345__$1);if(temp__4092__auto__)
{var s__26345__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26345__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26345__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26347 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26346 = 0;while(true){
if((i__26346 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26346);cljs.core.chunk_append(b__26347,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26350 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26350,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26350,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$255,text], null),select_options26335.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$210,val,cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26352 = (i__26346 + 1);
i__26346 = G__26352;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26347),iter__26344(cljs.core.chunk_rest(s__26345__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26347),null);
}
} else
{var x = cljs.core.first(s__26345__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26351 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26351,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26351,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$255,text], null),select_options26335.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$210,val,cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26344(cljs.core.rest(s__26345__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26335 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26335__1.call(this,coll);
case 2:
return select_options26335__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26335.cljs$core$IFn$_invoke$arity$1 = select_options26335__1;
select_options26335.cljs$core$IFn$_invoke$arity$2 = select_options26335__2;
return select_options26335;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26335);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26353 = (function() {
var drop_down26353 = null;
var drop_down26353__2 = (function (name,options){return drop_down26353.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26353__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,sablono.core.make_name(name),cljs.core.constant$keyword$238,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26353 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26353__2.call(this,name,options);
case 3:
return drop_down26353__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26353.cljs$core$IFn$_invoke$arity$2 = drop_down26353__2;
drop_down26353.cljs$core$IFn$_invoke$arity$3 = drop_down26353__3;
return drop_down26353;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26353);
/**
* Creates a text area element.
*/
sablono.core.text_area26354 = (function() {
var text_area26354 = null;
var text_area26354__1 = (function (name){return text_area26354.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26354__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$252,sablono.core.make_name(name),cljs.core.constant$keyword$238,sablono.core.make_id(name),cljs.core.constant$keyword$210,value], null)], null);
});
text_area26354 = function(name,value){
switch(arguments.length){
case 1:
return text_area26354__1.call(this,name);
case 2:
return text_area26354__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26354.cljs$core$IFn$_invoke$arity$1 = text_area26354__1;
text_area26354.cljs$core$IFn$_invoke$arity$2 = text_area26354__2;
return text_area26354;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26354);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26355 = (function file_upload26355(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26355);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26356 = (function label26356(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$235,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26356);
/**
* Creates a submit button.
*/
sablono.core.submit_button26357 = (function submit_button26357(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,"submit",cljs.core.constant$keyword$210,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26357);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26358 = (function reset_button26358(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,"reset",cljs.core.constant$keyword$210,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26358);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26359 = (function() { 
var form_to26359__delegate = function (p__26360,body){var vec__26362 = p__26360;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26362,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26362,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$259,null,cljs.core.constant$keyword$260,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,method_str,cljs.core.constant$keyword$263,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,"POST",cljs.core.constant$keyword$263,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26359 = function (p__26360,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26359__delegate.call(this,p__26360,body);};
form_to26359.cljs$lang$maxFixedArity = 1;
form_to26359.cljs$lang$applyTo = (function (arglist__26363){
var p__26360 = cljs.core.first(arglist__26363);
var body = cljs.core.rest(arglist__26363);
return form_to26359__delegate(p__26360,body);
});
form_to26359.cljs$core$IFn$_invoke$arity$variadic = form_to26359__delegate;
return form_to26359;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26359);
