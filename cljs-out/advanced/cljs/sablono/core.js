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
var G__25995__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__25994 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25994,0,null);var body = cljs.core.nthnext(vec__25994,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__25995 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25995__delegate.call(this,args);};
G__25995.cljs$lang$maxFixedArity = 0;
G__25995.cljs$lang$applyTo = (function (arglist__25996){
var args = cljs.core.seq(arglist__25996);
return G__25995__delegate(args);
});
G__25995.cljs$core$IFn$_invoke$arity$variadic = G__25995__delegate;
return G__25995;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26001(s__26002){return (new cljs.core.LazySeq(null,(function (){var s__26002__$1 = s__26002;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26002__$1);if(temp__4092__auto__)
{var s__26002__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26002__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26002__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26004 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26003 = 0;while(true){
if((i__26003 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26003);cljs.core.chunk_append(b__26004,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26005 = (i__26003 + 1);
i__26003 = G__26005;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26004),iter__26001(cljs.core.chunk_rest(s__26002__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26004),null);
}
} else
{var args = cljs.core.first(s__26002__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26001(cljs.core.rest(s__26002__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__26006_SHARP_){return cljs.core.reset_BANG_(html,p1__26006_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26011(s__26012){return (new cljs.core.LazySeq(null,(function (){var s__26012__$1 = s__26012;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26012__$1);if(temp__4092__auto__)
{var s__26012__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26012__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26012__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26014 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26013 = 0;while(true){
if((i__26013 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26013);cljs.core.chunk_append(b__26014,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$224,"text/css",cljs.core.constant$keyword$225,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$226,"stylesheet"], null)], null));
{
var G__26015 = (i__26013 + 1);
i__26013 = G__26015;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26014),iter__26011(cljs.core.chunk_rest(s__26012__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26014),null);
}
} else
{var style = cljs.core.first(s__26012__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$224,"text/css",cljs.core.constant$keyword$225,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$226,"stylesheet"], null)], null),iter__26011(cljs.core.rest(s__26012__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26016){
var styles = cljs.core.seq(arglist__26016);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to26017 = (function() { 
var link_to26017__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26017 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26017__delegate.call(this,url,content);};
link_to26017.cljs$lang$maxFixedArity = 1;
link_to26017.cljs$lang$applyTo = (function (arglist__26018){
var url = cljs.core.first(arglist__26018);
var content = cljs.core.rest(arglist__26018);
return link_to26017__delegate(url,content);
});
link_to26017.cljs$core$IFn$_invoke$arity$variadic = link_to26017__delegate;
return link_to26017;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26017);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26019 = (function() { 
var mail_to26019__delegate = function (e_mail,p__26020){var vec__26022 = p__26020;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26022,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26019 = function (e_mail,var_args){
var p__26020 = null;if (arguments.length > 1) {
  p__26020 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26019__delegate.call(this,e_mail,p__26020);};
mail_to26019.cljs$lang$maxFixedArity = 1;
mail_to26019.cljs$lang$applyTo = (function (arglist__26023){
var e_mail = cljs.core.first(arglist__26023);
var p__26020 = cljs.core.rest(arglist__26023);
return mail_to26019__delegate(e_mail,p__26020);
});
mail_to26019.cljs$core$IFn$_invoke$arity$variadic = mail_to26019__delegate;
return mail_to26019;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26019);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26024 = (function unordered_list26024(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,(function (){var iter__4117__auto__ = (function iter__26029(s__26030){return (new cljs.core.LazySeq(null,(function (){var s__26030__$1 = s__26030;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26030__$1);if(temp__4092__auto__)
{var s__26030__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26030__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26030__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26032 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26031 = 0;while(true){
if((i__26031 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26031);cljs.core.chunk_append(b__26032,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,x], null));
{
var G__26033 = (i__26031 + 1);
i__26031 = G__26033;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26032),iter__26029(cljs.core.chunk_rest(s__26030__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26032),null);
}
} else
{var x = cljs.core.first(s__26030__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,x], null),iter__26029(cljs.core.rest(s__26030__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26024);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26034 = (function ordered_list26034(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,(function (){var iter__4117__auto__ = (function iter__26039(s__26040){return (new cljs.core.LazySeq(null,(function (){var s__26040__$1 = s__26040;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26040__$1);if(temp__4092__auto__)
{var s__26040__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26040__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26040__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26042 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26041 = 0;while(true){
if((i__26041 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26041);cljs.core.chunk_append(b__26042,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,x], null));
{
var G__26043 = (i__26041 + 1);
i__26041 = G__26043;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26042),iter__26039(cljs.core.chunk_rest(s__26040__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26042),null);
}
} else
{var x = cljs.core.first(s__26040__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,x], null),iter__26039(cljs.core.rest(s__26040__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26034);
/**
* Create an image element.
*/
sablono.core.image26044 = (function() {
var image26044 = null;
var image26044__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26044__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$233,alt], null)], null);
});
image26044 = function(src,alt){
switch(arguments.length){
case 1:
return image26044__1.call(this,src);
case 2:
return image26044__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26044.cljs$core$IFn$_invoke$arity$1 = image26044__1;
image26044.cljs$core$IFn$_invoke$arity$2 = image26044__2;
return image26044;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26044);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26045_SHARP_,p2__26046_SHARP_){return [cljs.core.str(p1__26045_SHARP_),cljs.core.str("["),cljs.core.str(p2__26046_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26047_SHARP_,p2__26048_SHARP_){return [cljs.core.str(p1__26047_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26048_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$224,type,cljs.core.constant$keyword$235,sablono.core.make_name(name),cljs.core.constant$keyword$221,sablono.core.make_id(name),cljs.core.constant$keyword$194,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26049 = (function() {
var hidden_field26049 = null;
var hidden_field26049__1 = (function (name){return hidden_field26049.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26049__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26049 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26049__1.call(this,name);
case 2:
return hidden_field26049__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26049.cljs$core$IFn$_invoke$arity$1 = hidden_field26049__1;
hidden_field26049.cljs$core$IFn$_invoke$arity$2 = hidden_field26049__2;
return hidden_field26049;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26049);
/**
* Creates a new text input field.
*/
sablono.core.text_field26050 = (function() {
var text_field26050 = null;
var text_field26050__1 = (function (name){return text_field26050.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26050__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26050 = function(name,value){
switch(arguments.length){
case 1:
return text_field26050__1.call(this,name);
case 2:
return text_field26050__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26050.cljs$core$IFn$_invoke$arity$1 = text_field26050__1;
text_field26050.cljs$core$IFn$_invoke$arity$2 = text_field26050__2;
return text_field26050;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26050);
/**
* Creates a new password field.
*/
sablono.core.password_field26051 = (function() {
var password_field26051 = null;
var password_field26051__1 = (function (name){return password_field26051.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26051__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26051 = function(name,value){
switch(arguments.length){
case 1:
return password_field26051__1.call(this,name);
case 2:
return password_field26051__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26051.cljs$core$IFn$_invoke$arity$1 = password_field26051__1;
password_field26051.cljs$core$IFn$_invoke$arity$2 = password_field26051__2;
return password_field26051;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26051);
/**
* Creates a new email input field.
*/
sablono.core.email_field26052 = (function() {
var email_field26052 = null;
var email_field26052__1 = (function (name){return email_field26052.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26052__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26052 = function(name,value){
switch(arguments.length){
case 1:
return email_field26052__1.call(this,name);
case 2:
return email_field26052__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26052.cljs$core$IFn$_invoke$arity$1 = email_field26052__1;
email_field26052.cljs$core$IFn$_invoke$arity$2 = email_field26052__2;
return email_field26052;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26052);
/**
* Creates a check box.
*/
sablono.core.check_box26053 = (function() {
var check_box26053 = null;
var check_box26053__1 = (function (name){return check_box26053.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26053__2 = (function (name,checked_QMARK_){return check_box26053.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26053__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$224,"checkbox",cljs.core.constant$keyword$235,sablono.core.make_name(name),cljs.core.constant$keyword$221,sablono.core.make_id(name),cljs.core.constant$keyword$194,value,cljs.core.constant$keyword$236,checked_QMARK_], null)], null);
});
check_box26053 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26053__1.call(this,name);
case 2:
return check_box26053__2.call(this,name,checked_QMARK_);
case 3:
return check_box26053__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26053.cljs$core$IFn$_invoke$arity$1 = check_box26053__1;
check_box26053.cljs$core$IFn$_invoke$arity$2 = check_box26053__2;
check_box26053.cljs$core$IFn$_invoke$arity$3 = check_box26053__3;
return check_box26053;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26053);
/**
* Creates a radio button.
*/
sablono.core.radio_button26054 = (function() {
var radio_button26054 = null;
var radio_button26054__1 = (function (group){return radio_button26054.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26054__2 = (function (group,checked_QMARK_){return radio_button26054.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26054__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$224,"radio",cljs.core.constant$keyword$235,sablono.core.make_name(group),cljs.core.constant$keyword$221,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$194,value,cljs.core.constant$keyword$236,checked_QMARK_], null)], null);
});
radio_button26054 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26054__1.call(this,group);
case 2:
return radio_button26054__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26054__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26054.cljs$core$IFn$_invoke$arity$1 = radio_button26054__1;
radio_button26054.cljs$core$IFn$_invoke$arity$2 = radio_button26054__2;
radio_button26054.cljs$core$IFn$_invoke$arity$3 = radio_button26054__3;
return radio_button26054;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26054);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26055 = (function() {
var select_options26055 = null;
var select_options26055__1 = (function (coll){return select_options26055.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26055__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26064(s__26065){return (new cljs.core.LazySeq(null,(function (){var s__26065__$1 = s__26065;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26065__$1);if(temp__4092__auto__)
{var s__26065__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26065__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26065__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26067 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26066 = 0;while(true){
if((i__26066 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26066);cljs.core.chunk_append(b__26067,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26070 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26070,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26070,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,text], null),select_options26055.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,val,cljs.core.constant$keyword$240,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$240,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26072 = (i__26066 + 1);
i__26066 = G__26072;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26067),iter__26064(cljs.core.chunk_rest(s__26065__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26067),null);
}
} else
{var x = cljs.core.first(s__26065__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26071 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26071,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26071,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,text], null),select_options26055.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,val,cljs.core.constant$keyword$240,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$240,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26064(cljs.core.rest(s__26065__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26055 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26055__1.call(this,coll);
case 2:
return select_options26055__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26055.cljs$core$IFn$_invoke$arity$1 = select_options26055__1;
select_options26055.cljs$core$IFn$_invoke$arity$2 = select_options26055__2;
return select_options26055;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26055);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26073 = (function() {
var drop_down26073 = null;
var drop_down26073__2 = (function (name,options){return drop_down26073.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26073__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,sablono.core.make_name(name),cljs.core.constant$keyword$221,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26073 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26073__2.call(this,name,options);
case 3:
return drop_down26073__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26073.cljs$core$IFn$_invoke$arity$2 = drop_down26073__2;
drop_down26073.cljs$core$IFn$_invoke$arity$3 = drop_down26073__3;
return drop_down26073;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26073);
/**
* Creates a text area element.
*/
sablono.core.text_area26074 = (function() {
var text_area26074 = null;
var text_area26074__1 = (function (name){return text_area26074.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26074__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,sablono.core.make_name(name),cljs.core.constant$keyword$221,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area26074 = function(name,value){
switch(arguments.length){
case 1:
return text_area26074__1.call(this,name);
case 2:
return text_area26074__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26074.cljs$core$IFn$_invoke$arity$1 = text_area26074__1;
text_area26074.cljs$core$IFn$_invoke$arity$2 = text_area26074__2;
return text_area26074;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26074);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26075 = (function file_upload26075(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26075);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26076 = (function label26076(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26076);
/**
* Creates a submit button.
*/
sablono.core.submit_button26077 = (function submit_button26077(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$224,"submit",cljs.core.constant$keyword$194,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26077);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26078 = (function reset_button26078(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$224,"reset",cljs.core.constant$keyword$194,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26078);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26079 = (function() { 
var form_to26079__delegate = function (p__26080,body){var vec__26082 = p__26080;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26082,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26082,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$243,null,cljs.core.constant$keyword$244,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,method_str,cljs.core.constant$keyword$247,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"POST",cljs.core.constant$keyword$247,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26079 = function (p__26080,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26079__delegate.call(this,p__26080,body);};
form_to26079.cljs$lang$maxFixedArity = 1;
form_to26079.cljs$lang$applyTo = (function (arglist__26083){
var p__26080 = cljs.core.first(arglist__26083);
var body = cljs.core.rest(arglist__26083);
return form_to26079__delegate(p__26080,body);
});
form_to26079.cljs$core$IFn$_invoke$arity$variadic = form_to26079__delegate;
return form_to26079;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26079);
