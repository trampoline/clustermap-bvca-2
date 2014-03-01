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
var G__27735__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__27734 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27734,0,null);var body = cljs.core.nthnext(vec__27734,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__27735 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27735__delegate.call(this,args);};
G__27735.cljs$lang$maxFixedArity = 0;
G__27735.cljs$lang$applyTo = (function (arglist__27736){
var args = cljs.core.seq(arglist__27736);
return G__27735__delegate(args);
});
G__27735.cljs$core$IFn$_invoke$arity$variadic = G__27735__delegate;
return G__27735;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__27741(s__27742){return (new cljs.core.LazySeq(null,(function (){var s__27742__$1 = s__27742;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27742__$1);if(temp__4092__auto__)
{var s__27742__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27742__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27742__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27744 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27743 = 0;while(true){
if((i__27743 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27743);cljs.core.chunk_append(b__27744,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__27745 = (i__27743 + 1);
i__27743 = G__27745;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27744),iter__27741(cljs.core.chunk_rest(s__27742__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27744),null);
}
} else
{var args = cljs.core.first(s__27742__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__27741(cljs.core.rest(s__27742__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__27746_SHARP_){return cljs.core.reset_BANG_(html,p1__27746_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__27751(s__27752){return (new cljs.core.LazySeq(null,(function (){var s__27752__$1 = s__27752;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27752__$1);if(temp__4092__auto__)
{var s__27752__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27752__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27752__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27754 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27753 = 0;while(true){
if((i__27753 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27753);cljs.core.chunk_append(b__27754,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$305,"text/css",cljs.core.constant$keyword$306,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$307,"stylesheet"], null)], null));
{
var G__27755 = (i__27753 + 1);
i__27753 = G__27755;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27754),iter__27751(cljs.core.chunk_rest(s__27752__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27754),null);
}
} else
{var style = cljs.core.first(s__27752__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$305,"text/css",cljs.core.constant$keyword$306,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$307,"stylesheet"], null)], null),iter__27751(cljs.core.rest(s__27752__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__27756){
var styles = cljs.core.seq(arglist__27756);
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
sablono.core.link_to27757 = (function() { 
var link_to27757__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$306,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to27757 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to27757__delegate.call(this,url,content);};
link_to27757.cljs$lang$maxFixedArity = 1;
link_to27757.cljs$lang$applyTo = (function (arglist__27758){
var url = cljs.core.first(arglist__27758);
var content = cljs.core.rest(arglist__27758);
return link_to27757__delegate(url,content);
});
link_to27757.cljs$core$IFn$_invoke$arity$variadic = link_to27757__delegate;
return link_to27757;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to27757);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27759 = (function() { 
var mail_to27759__delegate = function (e_mail,p__27760){var vec__27762 = p__27760;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27762,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$306,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to27759 = function (e_mail,var_args){
var p__27760 = null;if (arguments.length > 1) {
  p__27760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to27759__delegate.call(this,e_mail,p__27760);};
mail_to27759.cljs$lang$maxFixedArity = 1;
mail_to27759.cljs$lang$applyTo = (function (arglist__27763){
var e_mail = cljs.core.first(arglist__27763);
var p__27760 = cljs.core.rest(arglist__27763);
return mail_to27759__delegate(e_mail,p__27760);
});
mail_to27759.cljs$core$IFn$_invoke$arity$variadic = mail_to27759__delegate;
return mail_to27759;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to27759);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27764 = (function unordered_list27764(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$309,(function (){var iter__4117__auto__ = (function iter__27769(s__27770){return (new cljs.core.LazySeq(null,(function (){var s__27770__$1 = s__27770;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27770__$1);if(temp__4092__auto__)
{var s__27770__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27770__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27770__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27772 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27771 = 0;while(true){
if((i__27771 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27771);cljs.core.chunk_append(b__27772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,x], null));
{
var G__27773 = (i__27771 + 1);
i__27771 = G__27773;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27772),iter__27769(cljs.core.chunk_rest(s__27770__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27772),null);
}
} else
{var x = cljs.core.first(s__27770__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,x], null),iter__27769(cljs.core.rest(s__27770__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list27764);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27774 = (function ordered_list27774(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$311,(function (){var iter__4117__auto__ = (function iter__27779(s__27780){return (new cljs.core.LazySeq(null,(function (){var s__27780__$1 = s__27780;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27780__$1);if(temp__4092__auto__)
{var s__27780__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27780__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27780__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27782 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27781 = 0;while(true){
if((i__27781 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27781);cljs.core.chunk_append(b__27782,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,x], null));
{
var G__27783 = (i__27781 + 1);
i__27781 = G__27783;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27782),iter__27779(cljs.core.chunk_rest(s__27780__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27782),null);
}
} else
{var x = cljs.core.first(s__27780__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,x], null),iter__27779(cljs.core.rest(s__27780__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list27774);
/**
* Create an image element.
*/
sablono.core.image27784 = (function() {
var image27784 = null;
var image27784__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$312,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$313,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image27784__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$312,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$314,alt], null)], null);
});
image27784 = function(src,alt){
switch(arguments.length){
case 1:
return image27784__1.call(this,src);
case 2:
return image27784__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27784.cljs$core$IFn$_invoke$arity$1 = image27784__1;
image27784.cljs$core$IFn$_invoke$arity$2 = image27784__2;
return image27784;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image27784);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27785_SHARP_,p2__27786_SHARP_){return [cljs.core.str(p1__27785_SHARP_),cljs.core.str("["),cljs.core.str(p2__27786_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27787_SHARP_,p2__27788_SHARP_){return [cljs.core.str(p1__27787_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27788_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$305,type,cljs.core.constant$keyword$315,sablono.core.make_name(name),cljs.core.constant$keyword$301,sablono.core.make_id(name),cljs.core.constant$keyword$266,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field27789 = (function() {
var hidden_field27789 = null;
var hidden_field27789__1 = (function (name){return hidden_field27789.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field27789__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field27789 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field27789__1.call(this,name);
case 2:
return hidden_field27789__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field27789.cljs$core$IFn$_invoke$arity$1 = hidden_field27789__1;
hidden_field27789.cljs$core$IFn$_invoke$arity$2 = hidden_field27789__2;
return hidden_field27789;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field27789);
/**
* Creates a new text input field.
*/
sablono.core.text_field27790 = (function() {
var text_field27790 = null;
var text_field27790__1 = (function (name){return text_field27790.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field27790__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field27790 = function(name,value){
switch(arguments.length){
case 1:
return text_field27790__1.call(this,name);
case 2:
return text_field27790__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field27790.cljs$core$IFn$_invoke$arity$1 = text_field27790__1;
text_field27790.cljs$core$IFn$_invoke$arity$2 = text_field27790__2;
return text_field27790;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field27790);
/**
* Creates a new password field.
*/
sablono.core.password_field27791 = (function() {
var password_field27791 = null;
var password_field27791__1 = (function (name){return password_field27791.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field27791__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field27791 = function(name,value){
switch(arguments.length){
case 1:
return password_field27791__1.call(this,name);
case 2:
return password_field27791__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field27791.cljs$core$IFn$_invoke$arity$1 = password_field27791__1;
password_field27791.cljs$core$IFn$_invoke$arity$2 = password_field27791__2;
return password_field27791;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field27791);
/**
* Creates a new email input field.
*/
sablono.core.email_field27792 = (function() {
var email_field27792 = null;
var email_field27792__1 = (function (name){return email_field27792.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field27792__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field27792 = function(name,value){
switch(arguments.length){
case 1:
return email_field27792__1.call(this,name);
case 2:
return email_field27792__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field27792.cljs$core$IFn$_invoke$arity$1 = email_field27792__1;
email_field27792.cljs$core$IFn$_invoke$arity$2 = email_field27792__2;
return email_field27792;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field27792);
/**
* Creates a check box.
*/
sablono.core.check_box27793 = (function() {
var check_box27793 = null;
var check_box27793__1 = (function (name){return check_box27793.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box27793__2 = (function (name,checked_QMARK_){return check_box27793.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box27793__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$305,"checkbox",cljs.core.constant$keyword$315,sablono.core.make_name(name),cljs.core.constant$keyword$301,sablono.core.make_id(name),cljs.core.constant$keyword$266,value,cljs.core.constant$keyword$316,checked_QMARK_], null)], null);
});
check_box27793 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box27793__1.call(this,name);
case 2:
return check_box27793__2.call(this,name,checked_QMARK_);
case 3:
return check_box27793__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box27793.cljs$core$IFn$_invoke$arity$1 = check_box27793__1;
check_box27793.cljs$core$IFn$_invoke$arity$2 = check_box27793__2;
check_box27793.cljs$core$IFn$_invoke$arity$3 = check_box27793__3;
return check_box27793;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box27793);
/**
* Creates a radio button.
*/
sablono.core.radio_button27794 = (function() {
var radio_button27794 = null;
var radio_button27794__1 = (function (group){return radio_button27794.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button27794__2 = (function (group,checked_QMARK_){return radio_button27794.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button27794__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$305,"radio",cljs.core.constant$keyword$315,sablono.core.make_name(group),cljs.core.constant$keyword$301,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$266,value,cljs.core.constant$keyword$316,checked_QMARK_], null)], null);
});
radio_button27794 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button27794__1.call(this,group);
case 2:
return radio_button27794__2.call(this,group,checked_QMARK_);
case 3:
return radio_button27794__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button27794.cljs$core$IFn$_invoke$arity$1 = radio_button27794__1;
radio_button27794.cljs$core$IFn$_invoke$arity$2 = radio_button27794__2;
radio_button27794.cljs$core$IFn$_invoke$arity$3 = radio_button27794__3;
return radio_button27794;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button27794);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options27795 = (function() {
var select_options27795 = null;
var select_options27795__1 = (function (coll){return select_options27795.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options27795__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__27804(s__27805){return (new cljs.core.LazySeq(null,(function (){var s__27805__$1 = s__27805;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27805__$1);if(temp__4092__auto__)
{var s__27805__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27805__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27805__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27807 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27806 = 0;while(true){
if((i__27806 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27806);cljs.core.chunk_append(b__27807,((cljs.core.sequential_QMARK_(x))?(function (){var vec__27810 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27810,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27810,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$317,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$318,text], null),select_options27795.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,val,cljs.core.constant$keyword$320,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$320,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__27812 = (i__27806 + 1);
i__27806 = G__27812;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27807),iter__27804(cljs.core.chunk_rest(s__27805__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27807),null);
}
} else
{var x = cljs.core.first(s__27805__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__27811 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$317,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$318,text], null),select_options27795.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,val,cljs.core.constant$keyword$320,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$320,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__27804(cljs.core.rest(s__27805__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options27795 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options27795__1.call(this,coll);
case 2:
return select_options27795__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options27795.cljs$core$IFn$_invoke$arity$1 = select_options27795__1;
select_options27795.cljs$core$IFn$_invoke$arity$2 = select_options27795__2;
return select_options27795;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options27795);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27813 = (function() {
var drop_down27813 = null;
var drop_down27813__2 = (function (name,options){return drop_down27813.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down27813__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$321,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,sablono.core.make_name(name),cljs.core.constant$keyword$301,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down27813 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27813__2.call(this,name,options);
case 3:
return drop_down27813__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27813.cljs$core$IFn$_invoke$arity$2 = drop_down27813__2;
drop_down27813.cljs$core$IFn$_invoke$arity$3 = drop_down27813__3;
return drop_down27813;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down27813);
/**
* Creates a text area element.
*/
sablono.core.text_area27814 = (function() {
var text_area27814 = null;
var text_area27814__1 = (function (name){return text_area27814.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area27814__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$315,sablono.core.make_name(name),cljs.core.constant$keyword$301,sablono.core.make_id(name),cljs.core.constant$keyword$266,value], null)], null);
});
text_area27814 = function(name,value){
switch(arguments.length){
case 1:
return text_area27814__1.call(this,name);
case 2:
return text_area27814__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27814.cljs$core$IFn$_invoke$arity$1 = text_area27814__1;
text_area27814.cljs$core$IFn$_invoke$arity$2 = text_area27814__2;
return text_area27814;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area27814);
/**
* Creates a file upload input.
*/
sablono.core.file_upload27815 = (function file_upload27815(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload27815);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27816 = (function label27816(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$318,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$298,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label27816);
/**
* Creates a submit button.
*/
sablono.core.submit_button27817 = (function submit_button27817(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,"submit",cljs.core.constant$keyword$266,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button27817);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27818 = (function reset_button27818(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,"reset",cljs.core.constant$keyword$266,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button27818);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27819 = (function() { 
var form_to27819__delegate = function (p__27820,body){var vec__27822 = p__27820;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$322,null,cljs.core.constant$keyword$323,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$325,method_str,cljs.core.constant$keyword$326,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$325,"POST",cljs.core.constant$keyword$326,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to27819 = function (p__27820,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to27819__delegate.call(this,p__27820,body);};
form_to27819.cljs$lang$maxFixedArity = 1;
form_to27819.cljs$lang$applyTo = (function (arglist__27823){
var p__27820 = cljs.core.first(arglist__27823);
var body = cljs.core.rest(arglist__27823);
return form_to27819__delegate(p__27820,body);
});
form_to27819.cljs$core$IFn$_invoke$arity$variadic = form_to27819__delegate;
return form_to27819;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to27819);
