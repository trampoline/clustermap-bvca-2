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
var G__25943__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__25942 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25942,0,null);var body = cljs.core.nthnext(vec__25942,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__25943 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25943__delegate.call(this,args);};
G__25943.cljs$lang$maxFixedArity = 0;
G__25943.cljs$lang$applyTo = (function (arglist__25944){
var args = cljs.core.seq(arglist__25944);
return G__25943__delegate(args);
});
G__25943.cljs$core$IFn$_invoke$arity$variadic = G__25943__delegate;
return G__25943;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__25949(s__25950){return (new cljs.core.LazySeq(null,(function (){var s__25950__$1 = s__25950;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25950__$1);if(temp__4092__auto__)
{var s__25950__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25950__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25950__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25952 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25951 = 0;while(true){
if((i__25951 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25951);cljs.core.chunk_append(b__25952,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__25953 = (i__25951 + 1);
i__25951 = G__25953;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25952),iter__25949(cljs.core.chunk_rest(s__25950__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25952),null);
}
} else
{var args = cljs.core.first(s__25950__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__25949(cljs.core.rest(s__25950__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__25954_SHARP_){return cljs.core.reset_BANG_(html,p1__25954_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__25959(s__25960){return (new cljs.core.LazySeq(null,(function (){var s__25960__$1 = s__25960;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25960__$1);if(temp__4092__auto__)
{var s__25960__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25960__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25960__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25962 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25961 = 0;while(true){
if((i__25961 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25961);cljs.core.chunk_append(b__25962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$222,"text/css",cljs.core.constant$keyword$223,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$224,"stylesheet"], null)], null));
{
var G__25963 = (i__25961 + 1);
i__25961 = G__25963;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25962),iter__25959(cljs.core.chunk_rest(s__25960__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25962),null);
}
} else
{var style = cljs.core.first(s__25960__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$222,"text/css",cljs.core.constant$keyword$223,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$224,"stylesheet"], null)], null),iter__25959(cljs.core.rest(s__25960__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__25964){
var styles = cljs.core.seq(arglist__25964);
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
sablono.core.link_to25965 = (function() { 
var link_to25965__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$223,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to25965 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to25965__delegate.call(this,url,content);};
link_to25965.cljs$lang$maxFixedArity = 1;
link_to25965.cljs$lang$applyTo = (function (arglist__25966){
var url = cljs.core.first(arglist__25966);
var content = cljs.core.rest(arglist__25966);
return link_to25965__delegate(url,content);
});
link_to25965.cljs$core$IFn$_invoke$arity$variadic = link_to25965__delegate;
return link_to25965;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to25965);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to25967 = (function() { 
var mail_to25967__delegate = function (e_mail,p__25968){var vec__25970 = p__25968;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25970,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$223,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to25967 = function (e_mail,var_args){
var p__25968 = null;if (arguments.length > 1) {
  p__25968 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to25967__delegate.call(this,e_mail,p__25968);};
mail_to25967.cljs$lang$maxFixedArity = 1;
mail_to25967.cljs$lang$applyTo = (function (arglist__25971){
var e_mail = cljs.core.first(arglist__25971);
var p__25968 = cljs.core.rest(arglist__25971);
return mail_to25967__delegate(e_mail,p__25968);
});
mail_to25967.cljs$core$IFn$_invoke$arity$variadic = mail_to25967__delegate;
return mail_to25967;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to25967);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list25972 = (function unordered_list25972(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226,(function (){var iter__4117__auto__ = (function iter__25977(s__25978){return (new cljs.core.LazySeq(null,(function (){var s__25978__$1 = s__25978;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25978__$1);if(temp__4092__auto__)
{var s__25978__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25978__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25978__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25980 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25979 = 0;while(true){
if((i__25979 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25979);cljs.core.chunk_append(b__25980,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,x], null));
{
var G__25981 = (i__25979 + 1);
i__25979 = G__25981;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25980),iter__25977(cljs.core.chunk_rest(s__25978__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25980),null);
}
} else
{var x = cljs.core.first(s__25978__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,x], null),iter__25977(cljs.core.rest(s__25978__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list25972);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list25982 = (function ordered_list25982(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,(function (){var iter__4117__auto__ = (function iter__25987(s__25988){return (new cljs.core.LazySeq(null,(function (){var s__25988__$1 = s__25988;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25988__$1);if(temp__4092__auto__)
{var s__25988__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25988__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25988__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25990 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25989 = 0;while(true){
if((i__25989 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25989);cljs.core.chunk_append(b__25990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,x], null));
{
var G__25991 = (i__25989 + 1);
i__25989 = G__25991;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25990),iter__25987(cljs.core.chunk_rest(s__25988__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25990),null);
}
} else
{var x = cljs.core.first(s__25988__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,x], null),iter__25987(cljs.core.rest(s__25988__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list25982);
/**
* Create an image element.
*/
sablono.core.image25992 = (function() {
var image25992 = null;
var image25992__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$230,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image25992__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$230,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$231,alt], null)], null);
});
image25992 = function(src,alt){
switch(arguments.length){
case 1:
return image25992__1.call(this,src);
case 2:
return image25992__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image25992.cljs$core$IFn$_invoke$arity$1 = image25992__1;
image25992.cljs$core$IFn$_invoke$arity$2 = image25992__2;
return image25992;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image25992);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25993_SHARP_,p2__25994_SHARP_){return [cljs.core.str(p1__25993_SHARP_),cljs.core.str("["),cljs.core.str(p2__25994_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25995_SHARP_,p2__25996_SHARP_){return [cljs.core.str(p1__25995_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25996_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$222,type,cljs.core.constant$keyword$233,sablono.core.make_name(name),cljs.core.constant$keyword$219,sablono.core.make_id(name),cljs.core.constant$keyword$192,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field25997 = (function() {
var hidden_field25997 = null;
var hidden_field25997__1 = (function (name){return hidden_field25997.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field25997__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field25997 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field25997__1.call(this,name);
case 2:
return hidden_field25997__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field25997.cljs$core$IFn$_invoke$arity$1 = hidden_field25997__1;
hidden_field25997.cljs$core$IFn$_invoke$arity$2 = hidden_field25997__2;
return hidden_field25997;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field25997);
/**
* Creates a new text input field.
*/
sablono.core.text_field25998 = (function() {
var text_field25998 = null;
var text_field25998__1 = (function (name){return text_field25998.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field25998__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field25998 = function(name,value){
switch(arguments.length){
case 1:
return text_field25998__1.call(this,name);
case 2:
return text_field25998__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field25998.cljs$core$IFn$_invoke$arity$1 = text_field25998__1;
text_field25998.cljs$core$IFn$_invoke$arity$2 = text_field25998__2;
return text_field25998;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field25998);
/**
* Creates a new password field.
*/
sablono.core.password_field25999 = (function() {
var password_field25999 = null;
var password_field25999__1 = (function (name){return password_field25999.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field25999__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field25999 = function(name,value){
switch(arguments.length){
case 1:
return password_field25999__1.call(this,name);
case 2:
return password_field25999__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field25999.cljs$core$IFn$_invoke$arity$1 = password_field25999__1;
password_field25999.cljs$core$IFn$_invoke$arity$2 = password_field25999__2;
return password_field25999;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field25999);
/**
* Creates a new email input field.
*/
sablono.core.email_field26000 = (function() {
var email_field26000 = null;
var email_field26000__1 = (function (name){return email_field26000.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26000__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26000 = function(name,value){
switch(arguments.length){
case 1:
return email_field26000__1.call(this,name);
case 2:
return email_field26000__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26000.cljs$core$IFn$_invoke$arity$1 = email_field26000__1;
email_field26000.cljs$core$IFn$_invoke$arity$2 = email_field26000__2;
return email_field26000;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26000);
/**
* Creates a check box.
*/
sablono.core.check_box26001 = (function() {
var check_box26001 = null;
var check_box26001__1 = (function (name){return check_box26001.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26001__2 = (function (name,checked_QMARK_){return check_box26001.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26001__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$222,"checkbox",cljs.core.constant$keyword$233,sablono.core.make_name(name),cljs.core.constant$keyword$219,sablono.core.make_id(name),cljs.core.constant$keyword$192,value,cljs.core.constant$keyword$234,checked_QMARK_], null)], null);
});
check_box26001 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26001__1.call(this,name);
case 2:
return check_box26001__2.call(this,name,checked_QMARK_);
case 3:
return check_box26001__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26001.cljs$core$IFn$_invoke$arity$1 = check_box26001__1;
check_box26001.cljs$core$IFn$_invoke$arity$2 = check_box26001__2;
check_box26001.cljs$core$IFn$_invoke$arity$3 = check_box26001__3;
return check_box26001;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26001);
/**
* Creates a radio button.
*/
sablono.core.radio_button26002 = (function() {
var radio_button26002 = null;
var radio_button26002__1 = (function (group){return radio_button26002.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26002__2 = (function (group,checked_QMARK_){return radio_button26002.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26002__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$222,"radio",cljs.core.constant$keyword$233,sablono.core.make_name(group),cljs.core.constant$keyword$219,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$192,value,cljs.core.constant$keyword$234,checked_QMARK_], null)], null);
});
radio_button26002 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26002__1.call(this,group);
case 2:
return radio_button26002__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26002__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26002.cljs$core$IFn$_invoke$arity$1 = radio_button26002__1;
radio_button26002.cljs$core$IFn$_invoke$arity$2 = radio_button26002__2;
radio_button26002.cljs$core$IFn$_invoke$arity$3 = radio_button26002__3;
return radio_button26002;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26002);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26003 = (function() {
var select_options26003 = null;
var select_options26003__1 = (function (coll){return select_options26003.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26003__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26012(s__26013){return (new cljs.core.LazySeq(null,(function (){var s__26013__$1 = s__26013;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26013__$1);if(temp__4092__auto__)
{var s__26013__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26013__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26013__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26015 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26014 = 0;while(true){
if((i__26014 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26014);cljs.core.chunk_append(b__26015,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26018 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26018,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26018,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$236,text], null),select_options26003.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$192,val,cljs.core.constant$keyword$238,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26020 = (i__26014 + 1);
i__26014 = G__26020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26015),iter__26012(cljs.core.chunk_rest(s__26013__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26015),null);
}
} else
{var x = cljs.core.first(s__26013__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26019 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26019,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26019,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$236,text], null),select_options26003.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$192,val,cljs.core.constant$keyword$238,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26012(cljs.core.rest(s__26013__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26003 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26003__1.call(this,coll);
case 2:
return select_options26003__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26003.cljs$core$IFn$_invoke$arity$1 = select_options26003__1;
select_options26003.cljs$core$IFn$_invoke$arity$2 = select_options26003__2;
return select_options26003;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26003);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26021 = (function() {
var drop_down26021 = null;
var drop_down26021__2 = (function (name,options){return drop_down26021.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26021__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,sablono.core.make_name(name),cljs.core.constant$keyword$219,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26021 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26021__2.call(this,name,options);
case 3:
return drop_down26021__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26021.cljs$core$IFn$_invoke$arity$2 = drop_down26021__2;
drop_down26021.cljs$core$IFn$_invoke$arity$3 = drop_down26021__3;
return drop_down26021;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26021);
/**
* Creates a text area element.
*/
sablono.core.text_area26022 = (function() {
var text_area26022 = null;
var text_area26022__1 = (function (name){return text_area26022.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26022__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,sablono.core.make_name(name),cljs.core.constant$keyword$219,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area26022 = function(name,value){
switch(arguments.length){
case 1:
return text_area26022__1.call(this,name);
case 2:
return text_area26022__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26022.cljs$core$IFn$_invoke$arity$1 = text_area26022__1;
text_area26022.cljs$core$IFn$_invoke$arity$2 = text_area26022__2;
return text_area26022;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26022);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26023 = (function file_upload26023(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26023);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26024 = (function label26024(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$236,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26024);
/**
* Creates a submit button.
*/
sablono.core.submit_button26025 = (function submit_button26025(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$222,"submit",cljs.core.constant$keyword$192,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26025);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26026 = (function reset_button26026(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$222,"reset",cljs.core.constant$keyword$192,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26026);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26027 = (function() { 
var form_to26027__delegate = function (p__26028,body){var vec__26030 = p__26028;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$241,null,cljs.core.constant$keyword$242,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$244,method_str,cljs.core.constant$keyword$245,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$244,"POST",cljs.core.constant$keyword$245,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26027 = function (p__26028,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26027__delegate.call(this,p__26028,body);};
form_to26027.cljs$lang$maxFixedArity = 1;
form_to26027.cljs$lang$applyTo = (function (arglist__26031){
var p__26028 = cljs.core.first(arglist__26031);
var body = cljs.core.rest(arglist__26031);
return form_to26027__delegate(p__26028,body);
});
form_to26027.cljs$core$IFn$_invoke$arity$variadic = form_to26027__delegate;
return form_to26027;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26027);
