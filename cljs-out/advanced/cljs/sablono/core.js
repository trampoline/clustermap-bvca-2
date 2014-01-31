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
var G__25983__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__25982 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25982,0,null);var body = cljs.core.nthnext(vec__25982,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__25983 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25983__delegate.call(this,args);};
G__25983.cljs$lang$maxFixedArity = 0;
G__25983.cljs$lang$applyTo = (function (arglist__25984){
var args = cljs.core.seq(arglist__25984);
return G__25983__delegate(args);
});
G__25983.cljs$core$IFn$_invoke$arity$variadic = G__25983__delegate;
return G__25983;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__25989(s__25990){return (new cljs.core.LazySeq(null,(function (){var s__25990__$1 = s__25990;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25990__$1);if(temp__4092__auto__)
{var s__25990__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25990__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25990__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25992 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25991 = 0;while(true){
if((i__25991 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25991);cljs.core.chunk_append(b__25992,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__25993 = (i__25991 + 1);
i__25991 = G__25993;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25992),iter__25989(cljs.core.chunk_rest(s__25990__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25992),null);
}
} else
{var args = cljs.core.first(s__25990__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__25989(cljs.core.rest(s__25990__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__25994_SHARP_){return cljs.core.reset_BANG_(html,p1__25994_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__25999(s__26000){return (new cljs.core.LazySeq(null,(function (){var s__26000__$1 = s__26000;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26000__$1);if(temp__4092__auto__)
{var s__26000__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26000__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26000__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26002 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26001 = 0;while(true){
if((i__26001 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26001);cljs.core.chunk_append(b__26002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$224,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$225,"text/css",cljs.core.constant$keyword$226,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$227,"stylesheet"], null)], null));
{
var G__26003 = (i__26001 + 1);
i__26001 = G__26003;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26002),iter__25999(cljs.core.chunk_rest(s__26000__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26002),null);
}
} else
{var style = cljs.core.first(s__26000__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$224,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$225,"text/css",cljs.core.constant$keyword$226,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$227,"stylesheet"], null)], null),iter__25999(cljs.core.rest(s__26000__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26004){
var styles = cljs.core.seq(arglist__26004);
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
sablono.core.link_to26005 = (function() { 
var link_to26005__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26005 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26005__delegate.call(this,url,content);};
link_to26005.cljs$lang$maxFixedArity = 1;
link_to26005.cljs$lang$applyTo = (function (arglist__26006){
var url = cljs.core.first(arglist__26006);
var content = cljs.core.rest(arglist__26006);
return link_to26005__delegate(url,content);
});
link_to26005.cljs$core$IFn$_invoke$arity$variadic = link_to26005__delegate;
return link_to26005;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26005);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26007 = (function() { 
var mail_to26007__delegate = function (e_mail,p__26008){var vec__26010 = p__26008;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26010,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26007 = function (e_mail,var_args){
var p__26008 = null;if (arguments.length > 1) {
  p__26008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26007__delegate.call(this,e_mail,p__26008);};
mail_to26007.cljs$lang$maxFixedArity = 1;
mail_to26007.cljs$lang$applyTo = (function (arglist__26011){
var e_mail = cljs.core.first(arglist__26011);
var p__26008 = cljs.core.rest(arglist__26011);
return mail_to26007__delegate(e_mail,p__26008);
});
mail_to26007.cljs$core$IFn$_invoke$arity$variadic = mail_to26007__delegate;
return mail_to26007;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26007);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26012 = (function unordered_list26012(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,(function (){var iter__4117__auto__ = (function iter__26017(s__26018){return (new cljs.core.LazySeq(null,(function (){var s__26018__$1 = s__26018;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26018__$1);if(temp__4092__auto__)
{var s__26018__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26018__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26018__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26020 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26019 = 0;while(true){
if((i__26019 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26019);cljs.core.chunk_append(b__26020,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,x], null));
{
var G__26021 = (i__26019 + 1);
i__26019 = G__26021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26020),iter__26017(cljs.core.chunk_rest(s__26018__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26020),null);
}
} else
{var x = cljs.core.first(s__26018__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,x], null),iter__26017(cljs.core.rest(s__26018__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26012);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26022 = (function ordered_list26022(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,(function (){var iter__4117__auto__ = (function iter__26027(s__26028){return (new cljs.core.LazySeq(null,(function (){var s__26028__$1 = s__26028;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26028__$1);if(temp__4092__auto__)
{var s__26028__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26028__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26028__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26030 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26029 = 0;while(true){
if((i__26029 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26029);cljs.core.chunk_append(b__26030,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,x], null));
{
var G__26031 = (i__26029 + 1);
i__26029 = G__26031;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26030),iter__26027(cljs.core.chunk_rest(s__26028__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26030),null);
}
} else
{var x = cljs.core.first(s__26028__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,x], null),iter__26027(cljs.core.rest(s__26028__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26022);
/**
* Create an image element.
*/
sablono.core.image26032 = (function() {
var image26032 = null;
var image26032__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$233,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26032__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$234,alt], null)], null);
});
image26032 = function(src,alt){
switch(arguments.length){
case 1:
return image26032__1.call(this,src);
case 2:
return image26032__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26032.cljs$core$IFn$_invoke$arity$1 = image26032__1;
image26032.cljs$core$IFn$_invoke$arity$2 = image26032__2;
return image26032;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26032);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26033_SHARP_,p2__26034_SHARP_){return [cljs.core.str(p1__26033_SHARP_),cljs.core.str("["),cljs.core.str(p2__26034_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26035_SHARP_,p2__26036_SHARP_){return [cljs.core.str(p1__26035_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26036_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$225,type,cljs.core.constant$keyword$236,sablono.core.make_name(name),cljs.core.constant$keyword$222,sablono.core.make_id(name),cljs.core.constant$keyword$195,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26037 = (function() {
var hidden_field26037 = null;
var hidden_field26037__1 = (function (name){return hidden_field26037.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26037__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26037 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26037__1.call(this,name);
case 2:
return hidden_field26037__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26037.cljs$core$IFn$_invoke$arity$1 = hidden_field26037__1;
hidden_field26037.cljs$core$IFn$_invoke$arity$2 = hidden_field26037__2;
return hidden_field26037;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26037);
/**
* Creates a new text input field.
*/
sablono.core.text_field26038 = (function() {
var text_field26038 = null;
var text_field26038__1 = (function (name){return text_field26038.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26038__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26038 = function(name,value){
switch(arguments.length){
case 1:
return text_field26038__1.call(this,name);
case 2:
return text_field26038__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26038.cljs$core$IFn$_invoke$arity$1 = text_field26038__1;
text_field26038.cljs$core$IFn$_invoke$arity$2 = text_field26038__2;
return text_field26038;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26038);
/**
* Creates a new password field.
*/
sablono.core.password_field26039 = (function() {
var password_field26039 = null;
var password_field26039__1 = (function (name){return password_field26039.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26039__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26039 = function(name,value){
switch(arguments.length){
case 1:
return password_field26039__1.call(this,name);
case 2:
return password_field26039__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26039.cljs$core$IFn$_invoke$arity$1 = password_field26039__1;
password_field26039.cljs$core$IFn$_invoke$arity$2 = password_field26039__2;
return password_field26039;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26039);
/**
* Creates a new email input field.
*/
sablono.core.email_field26040 = (function() {
var email_field26040 = null;
var email_field26040__1 = (function (name){return email_field26040.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26040__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26040 = function(name,value){
switch(arguments.length){
case 1:
return email_field26040__1.call(this,name);
case 2:
return email_field26040__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26040.cljs$core$IFn$_invoke$arity$1 = email_field26040__1;
email_field26040.cljs$core$IFn$_invoke$arity$2 = email_field26040__2;
return email_field26040;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26040);
/**
* Creates a check box.
*/
sablono.core.check_box26041 = (function() {
var check_box26041 = null;
var check_box26041__1 = (function (name){return check_box26041.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26041__2 = (function (name,checked_QMARK_){return check_box26041.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26041__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$225,"checkbox",cljs.core.constant$keyword$236,sablono.core.make_name(name),cljs.core.constant$keyword$222,sablono.core.make_id(name),cljs.core.constant$keyword$195,value,cljs.core.constant$keyword$237,checked_QMARK_], null)], null);
});
check_box26041 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26041__1.call(this,name);
case 2:
return check_box26041__2.call(this,name,checked_QMARK_);
case 3:
return check_box26041__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26041.cljs$core$IFn$_invoke$arity$1 = check_box26041__1;
check_box26041.cljs$core$IFn$_invoke$arity$2 = check_box26041__2;
check_box26041.cljs$core$IFn$_invoke$arity$3 = check_box26041__3;
return check_box26041;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26041);
/**
* Creates a radio button.
*/
sablono.core.radio_button26042 = (function() {
var radio_button26042 = null;
var radio_button26042__1 = (function (group){return radio_button26042.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26042__2 = (function (group,checked_QMARK_){return radio_button26042.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26042__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$225,"radio",cljs.core.constant$keyword$236,sablono.core.make_name(group),cljs.core.constant$keyword$222,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$195,value,cljs.core.constant$keyword$237,checked_QMARK_], null)], null);
});
radio_button26042 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26042__1.call(this,group);
case 2:
return radio_button26042__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26042__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26042.cljs$core$IFn$_invoke$arity$1 = radio_button26042__1;
radio_button26042.cljs$core$IFn$_invoke$arity$2 = radio_button26042__2;
radio_button26042.cljs$core$IFn$_invoke$arity$3 = radio_button26042__3;
return radio_button26042;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26042);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26043 = (function() {
var select_options26043 = null;
var select_options26043__1 = (function (coll){return select_options26043.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26043__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26052(s__26053){return (new cljs.core.LazySeq(null,(function (){var s__26053__$1 = s__26053;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26053__$1);if(temp__4092__auto__)
{var s__26053__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26053__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26053__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26055 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26054 = 0;while(true){
if((i__26054 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26054);cljs.core.chunk_append(b__26055,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26058 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26058,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26058,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$239,text], null),select_options26043.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$195,val,cljs.core.constant$keyword$241,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26060 = (i__26054 + 1);
i__26054 = G__26060;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26055),iter__26052(cljs.core.chunk_rest(s__26053__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26055),null);
}
} else
{var x = cljs.core.first(s__26053__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26059 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26059,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26059,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$239,text], null),select_options26043.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$195,val,cljs.core.constant$keyword$241,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26052(cljs.core.rest(s__26053__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26043 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26043__1.call(this,coll);
case 2:
return select_options26043__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26043.cljs$core$IFn$_invoke$arity$1 = select_options26043__1;
select_options26043.cljs$core$IFn$_invoke$arity$2 = select_options26043__2;
return select_options26043;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26043);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26061 = (function() {
var drop_down26061 = null;
var drop_down26061__2 = (function (name,options){return drop_down26061.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26061__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,sablono.core.make_name(name),cljs.core.constant$keyword$222,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26061 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26061__2.call(this,name,options);
case 3:
return drop_down26061__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26061.cljs$core$IFn$_invoke$arity$2 = drop_down26061__2;
drop_down26061.cljs$core$IFn$_invoke$arity$3 = drop_down26061__3;
return drop_down26061;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26061);
/**
* Creates a text area element.
*/
sablono.core.text_area26062 = (function() {
var text_area26062 = null;
var text_area26062__1 = (function (name){return text_area26062.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26062__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,sablono.core.make_name(name),cljs.core.constant$keyword$222,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area26062 = function(name,value){
switch(arguments.length){
case 1:
return text_area26062__1.call(this,name);
case 2:
return text_area26062__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26062.cljs$core$IFn$_invoke$arity$1 = text_area26062__1;
text_area26062.cljs$core$IFn$_invoke$arity$2 = text_area26062__2;
return text_area26062;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26062);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26063 = (function file_upload26063(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26063);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26064 = (function label26064(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$219,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26064);
/**
* Creates a submit button.
*/
sablono.core.submit_button26065 = (function submit_button26065(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$225,"submit",cljs.core.constant$keyword$195,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26065);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26066 = (function reset_button26066(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$225,"reset",cljs.core.constant$keyword$195,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26066);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26067 = (function() { 
var form_to26067__delegate = function (p__26068,body){var vec__26070 = p__26068;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26070,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26070,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$244,null,cljs.core.constant$keyword$245,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$247,method_str,cljs.core.constant$keyword$248,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$247,"POST",cljs.core.constant$keyword$248,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26067 = function (p__26068,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26067__delegate.call(this,p__26068,body);};
form_to26067.cljs$lang$maxFixedArity = 1;
form_to26067.cljs$lang$applyTo = (function (arglist__26071){
var p__26068 = cljs.core.first(arglist__26071);
var body = cljs.core.rest(arglist__26071);
return form_to26067__delegate(p__26068,body);
});
form_to26067.cljs$core$IFn$_invoke$arity$variadic = form_to26067__delegate;
return form_to26067;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26067);
