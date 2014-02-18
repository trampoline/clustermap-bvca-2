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
var G__27145__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__27144 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27144,0,null);var body = cljs.core.nthnext(vec__27144,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__27145 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27145__delegate.call(this,args);};
G__27145.cljs$lang$maxFixedArity = 0;
G__27145.cljs$lang$applyTo = (function (arglist__27146){
var args = cljs.core.seq(arglist__27146);
return G__27145__delegate(args);
});
G__27145.cljs$core$IFn$_invoke$arity$variadic = G__27145__delegate;
return G__27145;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__27151(s__27152){return (new cljs.core.LazySeq(null,(function (){var s__27152__$1 = s__27152;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27152__$1);if(temp__4092__auto__)
{var s__27152__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27152__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27152__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27154 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27153 = 0;while(true){
if((i__27153 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27153);cljs.core.chunk_append(b__27154,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__27155 = (i__27153 + 1);
i__27153 = G__27155;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27154),iter__27151(cljs.core.chunk_rest(s__27152__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27154),null);
}
} else
{var args = cljs.core.first(s__27152__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__27151(cljs.core.rest(s__27152__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__27156_SHARP_){return cljs.core.reset_BANG_(html,p1__27156_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__27161(s__27162){return (new cljs.core.LazySeq(null,(function (){var s__27162__$1 = s__27162;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27162__$1);if(temp__4092__auto__)
{var s__27162__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27162__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27162__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27164 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27163 = 0;while(true){
if((i__27163 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27163);cljs.core.chunk_append(b__27164,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$270,"text/css",cljs.core.constant$keyword$271,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$272,"stylesheet"], null)], null));
{
var G__27165 = (i__27163 + 1);
i__27163 = G__27165;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27164),iter__27161(cljs.core.chunk_rest(s__27162__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27164),null);
}
} else
{var style = cljs.core.first(s__27162__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$270,"text/css",cljs.core.constant$keyword$271,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$272,"stylesheet"], null)], null),iter__27161(cljs.core.rest(s__27162__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__27166){
var styles = cljs.core.seq(arglist__27166);
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
sablono.core.link_to27167 = (function() { 
var link_to27167__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to27167 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to27167__delegate.call(this,url,content);};
link_to27167.cljs$lang$maxFixedArity = 1;
link_to27167.cljs$lang$applyTo = (function (arglist__27168){
var url = cljs.core.first(arglist__27168);
var content = cljs.core.rest(arglist__27168);
return link_to27167__delegate(url,content);
});
link_to27167.cljs$core$IFn$_invoke$arity$variadic = link_to27167__delegate;
return link_to27167;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to27167);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27169 = (function() { 
var mail_to27169__delegate = function (e_mail,p__27170){var vec__27172 = p__27170;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27172,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to27169 = function (e_mail,var_args){
var p__27170 = null;if (arguments.length > 1) {
  p__27170 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to27169__delegate.call(this,e_mail,p__27170);};
mail_to27169.cljs$lang$maxFixedArity = 1;
mail_to27169.cljs$lang$applyTo = (function (arglist__27173){
var e_mail = cljs.core.first(arglist__27173);
var p__27170 = cljs.core.rest(arglist__27173);
return mail_to27169__delegate(e_mail,p__27170);
});
mail_to27169.cljs$core$IFn$_invoke$arity$variadic = mail_to27169__delegate;
return mail_to27169;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to27169);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27174 = (function unordered_list27174(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,(function (){var iter__4117__auto__ = (function iter__27179(s__27180){return (new cljs.core.LazySeq(null,(function (){var s__27180__$1 = s__27180;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27180__$1);if(temp__4092__auto__)
{var s__27180__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27180__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27180__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27182 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27181 = 0;while(true){
if((i__27181 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27181);cljs.core.chunk_append(b__27182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,x], null));
{
var G__27183 = (i__27181 + 1);
i__27181 = G__27183;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27182),iter__27179(cljs.core.chunk_rest(s__27180__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27182),null);
}
} else
{var x = cljs.core.first(s__27180__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,x], null),iter__27179(cljs.core.rest(s__27180__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list27174);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27184 = (function ordered_list27184(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,(function (){var iter__4117__auto__ = (function iter__27189(s__27190){return (new cljs.core.LazySeq(null,(function (){var s__27190__$1 = s__27190;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27190__$1);if(temp__4092__auto__)
{var s__27190__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27190__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27190__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27192 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27191 = 0;while(true){
if((i__27191 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27191);cljs.core.chunk_append(b__27192,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,x], null));
{
var G__27193 = (i__27191 + 1);
i__27191 = G__27193;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27192),iter__27189(cljs.core.chunk_rest(s__27190__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27192),null);
}
} else
{var x = cljs.core.first(s__27190__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,x], null),iter__27189(cljs.core.rest(s__27190__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list27184);
/**
* Create an image element.
*/
sablono.core.image27194 = (function() {
var image27194 = null;
var image27194__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image27194__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$279,alt], null)], null);
});
image27194 = function(src,alt){
switch(arguments.length){
case 1:
return image27194__1.call(this,src);
case 2:
return image27194__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27194.cljs$core$IFn$_invoke$arity$1 = image27194__1;
image27194.cljs$core$IFn$_invoke$arity$2 = image27194__2;
return image27194;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image27194);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27195_SHARP_,p2__27196_SHARP_){return [cljs.core.str(p1__27195_SHARP_),cljs.core.str("["),cljs.core.str(p2__27196_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27197_SHARP_,p2__27198_SHARP_){return [cljs.core.str(p1__27197_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27198_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$270,type,cljs.core.constant$keyword$280,sablono.core.make_name(name),cljs.core.constant$keyword$266,sablono.core.make_id(name),cljs.core.constant$keyword$235,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field27199 = (function() {
var hidden_field27199 = null;
var hidden_field27199__1 = (function (name){return hidden_field27199.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field27199__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field27199 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field27199__1.call(this,name);
case 2:
return hidden_field27199__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field27199.cljs$core$IFn$_invoke$arity$1 = hidden_field27199__1;
hidden_field27199.cljs$core$IFn$_invoke$arity$2 = hidden_field27199__2;
return hidden_field27199;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field27199);
/**
* Creates a new text input field.
*/
sablono.core.text_field27200 = (function() {
var text_field27200 = null;
var text_field27200__1 = (function (name){return text_field27200.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field27200__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field27200 = function(name,value){
switch(arguments.length){
case 1:
return text_field27200__1.call(this,name);
case 2:
return text_field27200__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field27200.cljs$core$IFn$_invoke$arity$1 = text_field27200__1;
text_field27200.cljs$core$IFn$_invoke$arity$2 = text_field27200__2;
return text_field27200;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field27200);
/**
* Creates a new password field.
*/
sablono.core.password_field27201 = (function() {
var password_field27201 = null;
var password_field27201__1 = (function (name){return password_field27201.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field27201__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field27201 = function(name,value){
switch(arguments.length){
case 1:
return password_field27201__1.call(this,name);
case 2:
return password_field27201__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field27201.cljs$core$IFn$_invoke$arity$1 = password_field27201__1;
password_field27201.cljs$core$IFn$_invoke$arity$2 = password_field27201__2;
return password_field27201;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field27201);
/**
* Creates a new email input field.
*/
sablono.core.email_field27202 = (function() {
var email_field27202 = null;
var email_field27202__1 = (function (name){return email_field27202.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field27202__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field27202 = function(name,value){
switch(arguments.length){
case 1:
return email_field27202__1.call(this,name);
case 2:
return email_field27202__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field27202.cljs$core$IFn$_invoke$arity$1 = email_field27202__1;
email_field27202.cljs$core$IFn$_invoke$arity$2 = email_field27202__2;
return email_field27202;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field27202);
/**
* Creates a check box.
*/
sablono.core.check_box27203 = (function() {
var check_box27203 = null;
var check_box27203__1 = (function (name){return check_box27203.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box27203__2 = (function (name,checked_QMARK_){return check_box27203.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box27203__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$270,"checkbox",cljs.core.constant$keyword$280,sablono.core.make_name(name),cljs.core.constant$keyword$266,sablono.core.make_id(name),cljs.core.constant$keyword$235,value,cljs.core.constant$keyword$281,checked_QMARK_], null)], null);
});
check_box27203 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box27203__1.call(this,name);
case 2:
return check_box27203__2.call(this,name,checked_QMARK_);
case 3:
return check_box27203__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box27203.cljs$core$IFn$_invoke$arity$1 = check_box27203__1;
check_box27203.cljs$core$IFn$_invoke$arity$2 = check_box27203__2;
check_box27203.cljs$core$IFn$_invoke$arity$3 = check_box27203__3;
return check_box27203;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box27203);
/**
* Creates a radio button.
*/
sablono.core.radio_button27204 = (function() {
var radio_button27204 = null;
var radio_button27204__1 = (function (group){return radio_button27204.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button27204__2 = (function (group,checked_QMARK_){return radio_button27204.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button27204__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$270,"radio",cljs.core.constant$keyword$280,sablono.core.make_name(group),cljs.core.constant$keyword$266,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$235,value,cljs.core.constant$keyword$281,checked_QMARK_], null)], null);
});
radio_button27204 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button27204__1.call(this,group);
case 2:
return radio_button27204__2.call(this,group,checked_QMARK_);
case 3:
return radio_button27204__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button27204.cljs$core$IFn$_invoke$arity$1 = radio_button27204__1;
radio_button27204.cljs$core$IFn$_invoke$arity$2 = radio_button27204__2;
radio_button27204.cljs$core$IFn$_invoke$arity$3 = radio_button27204__3;
return radio_button27204;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button27204);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options27205 = (function() {
var select_options27205 = null;
var select_options27205__1 = (function (coll){return select_options27205.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options27205__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__27214(s__27215){return (new cljs.core.LazySeq(null,(function (){var s__27215__$1 = s__27215;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27215__$1);if(temp__4092__auto__)
{var s__27215__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27215__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27215__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27217 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27216 = 0;while(true){
if((i__27216 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27216);cljs.core.chunk_append(b__27217,((cljs.core.sequential_QMARK_(x))?(function (){var vec__27220 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27220,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27220,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$283,text], null),select_options27205.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,val,cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__27222 = (i__27216 + 1);
i__27216 = G__27222;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27217),iter__27214(cljs.core.chunk_rest(s__27215__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27217),null);
}
} else
{var x = cljs.core.first(s__27215__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__27221 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27221,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27221,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$283,text], null),select_options27205.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,val,cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__27214(cljs.core.rest(s__27215__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options27205 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options27205__1.call(this,coll);
case 2:
return select_options27205__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options27205.cljs$core$IFn$_invoke$arity$1 = select_options27205__1;
select_options27205.cljs$core$IFn$_invoke$arity$2 = select_options27205__2;
return select_options27205;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options27205);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27223 = (function() {
var drop_down27223 = null;
var drop_down27223__2 = (function (name,options){return drop_down27223.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down27223__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,sablono.core.make_name(name),cljs.core.constant$keyword$266,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down27223 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27223__2.call(this,name,options);
case 3:
return drop_down27223__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27223.cljs$core$IFn$_invoke$arity$2 = drop_down27223__2;
drop_down27223.cljs$core$IFn$_invoke$arity$3 = drop_down27223__3;
return drop_down27223;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down27223);
/**
* Creates a text area element.
*/
sablono.core.text_area27224 = (function() {
var text_area27224 = null;
var text_area27224__1 = (function (name){return text_area27224.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area27224__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$280,sablono.core.make_name(name),cljs.core.constant$keyword$266,sablono.core.make_id(name),cljs.core.constant$keyword$235,value], null)], null);
});
text_area27224 = function(name,value){
switch(arguments.length){
case 1:
return text_area27224__1.call(this,name);
case 2:
return text_area27224__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27224.cljs$core$IFn$_invoke$arity$1 = text_area27224__1;
text_area27224.cljs$core$IFn$_invoke$arity$2 = text_area27224__2;
return text_area27224;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area27224);
/**
* Creates a file upload input.
*/
sablono.core.file_upload27225 = (function file_upload27225(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload27225);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27226 = (function label27226(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$283,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label27226);
/**
* Creates a submit button.
*/
sablono.core.submit_button27227 = (function submit_button27227(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,"submit",cljs.core.constant$keyword$235,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button27227);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27228 = (function reset_button27228(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,"reset",cljs.core.constant$keyword$235,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button27228);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27229 = (function() { 
var form_to27229__delegate = function (p__27230,body){var vec__27232 = p__27230;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27232,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27232,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,null,cljs.core.constant$keyword$288,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$290,method_str,cljs.core.constant$keyword$291,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$290,"POST",cljs.core.constant$keyword$291,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to27229 = function (p__27230,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to27229__delegate.call(this,p__27230,body);};
form_to27229.cljs$lang$maxFixedArity = 1;
form_to27229.cljs$lang$applyTo = (function (arglist__27233){
var p__27230 = cljs.core.first(arglist__27233);
var body = cljs.core.rest(arglist__27233);
return form_to27229__delegate(p__27230,body);
});
form_to27229.cljs$core$IFn$_invoke$arity$variadic = form_to27229__delegate;
return form_to27229;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to27229);
