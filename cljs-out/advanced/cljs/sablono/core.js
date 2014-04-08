// Compiled by ClojureScript 0.0-2173
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
var G__38775__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__38774 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38774,0,null);var body = cljs.core.nthnext(vec__38774,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38775 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38775__delegate.call(this,args);};
G__38775.cljs$lang$maxFixedArity = 0;
G__38775.cljs$lang$applyTo = (function (arglist__38776){
var args = cljs.core.seq(arglist__38776);
return G__38775__delegate(args);
});
G__38775.cljs$core$IFn$_invoke$arity$variadic = G__38775__delegate;
return G__38775;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__38781(s__38782){return (new cljs.core.LazySeq(null,(function (){var s__38782__$1 = s__38782;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38782__$1);if(temp__4092__auto__)
{var s__38782__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38782__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38782__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38784 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38783 = 0;while(true){
if((i__38783 < size__4157__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38783);cljs.core.chunk_append(b__38784,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__38785 = (i__38783 + 1);
i__38783 = G__38785;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38784),iter__38781(cljs.core.chunk_rest(s__38782__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38784),null);
}
} else
{var args = cljs.core.first(s__38782__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__38781(cljs.core.rest(s__38782__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__38786_SHARP_){return cljs.core.reset_BANG_(html,p1__38786_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__38791(s__38792){return (new cljs.core.LazySeq(null,(function (){var s__38792__$1 = s__38792;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38792__$1);if(temp__4092__auto__)
{var s__38792__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38792__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38792__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38794 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38793 = 0;while(true){
if((i__38793 < size__4157__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38793);cljs.core.chunk_append(b__38794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$588,"text/css",cljs.core.constant$keyword$589,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$590,"stylesheet"], null)], null));
{
var G__38795 = (i__38793 + 1);
i__38793 = G__38795;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38794),iter__38791(cljs.core.chunk_rest(s__38792__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38794),null);
}
} else
{var style = cljs.core.first(s__38792__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$588,"text/css",cljs.core.constant$keyword$589,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$590,"stylesheet"], null)], null),iter__38791(cljs.core.rest(s__38792__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__38796){
var styles = cljs.core.seq(arglist__38796);
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
sablono.core.link_to38797 = (function() { 
var link_to38797__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$589,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to38797 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to38797__delegate.call(this,url,content);};
link_to38797.cljs$lang$maxFixedArity = 1;
link_to38797.cljs$lang$applyTo = (function (arglist__38798){
var url = cljs.core.first(arglist__38798);
var content = cljs.core.rest(arglist__38798);
return link_to38797__delegate(url,content);
});
link_to38797.cljs$core$IFn$_invoke$arity$variadic = link_to38797__delegate;
return link_to38797;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to38797);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to38799 = (function() { 
var mail_to38799__delegate = function (e_mail,p__38800){var vec__38802 = p__38800;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38802,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$589,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to38799 = function (e_mail,var_args){
var p__38800 = null;if (arguments.length > 1) {
  p__38800 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to38799__delegate.call(this,e_mail,p__38800);};
mail_to38799.cljs$lang$maxFixedArity = 1;
mail_to38799.cljs$lang$applyTo = (function (arglist__38803){
var e_mail = cljs.core.first(arglist__38803);
var p__38800 = cljs.core.rest(arglist__38803);
return mail_to38799__delegate(e_mail,p__38800);
});
mail_to38799.cljs$core$IFn$_invoke$arity$variadic = mail_to38799__delegate;
return mail_to38799;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38799);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list38804 = (function unordered_list38804(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$592,(function (){var iter__4158__auto__ = (function iter__38809(s__38810){return (new cljs.core.LazySeq(null,(function (){var s__38810__$1 = s__38810;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38810__$1);if(temp__4092__auto__)
{var s__38810__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38810__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38810__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38812 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38811 = 0;while(true){
if((i__38811 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38811);cljs.core.chunk_append(b__38812,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null));
{
var G__38813 = (i__38811 + 1);
i__38811 = G__38813;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38812),iter__38809(cljs.core.chunk_rest(s__38810__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38812),null);
}
} else
{var x = cljs.core.first(s__38810__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null),iter__38809(cljs.core.rest(s__38810__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38804);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list38814 = (function ordered_list38814(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$594,(function (){var iter__4158__auto__ = (function iter__38819(s__38820){return (new cljs.core.LazySeq(null,(function (){var s__38820__$1 = s__38820;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38820__$1);if(temp__4092__auto__)
{var s__38820__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38820__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38820__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38822 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38821 = 0;while(true){
if((i__38821 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38821);cljs.core.chunk_append(b__38822,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null));
{
var G__38823 = (i__38821 + 1);
i__38821 = G__38823;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38822),iter__38819(cljs.core.chunk_rest(s__38820__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38822),null);
}
} else
{var x = cljs.core.first(s__38820__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null),iter__38819(cljs.core.rest(s__38820__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38814);
/**
* Create an image element.
*/
sablono.core.image38824 = (function() {
var image38824 = null;
var image38824__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$595,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$596,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image38824__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$595,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$596,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$597,alt], null)], null);
});
image38824 = function(src,alt){
switch(arguments.length){
case 1:
return image38824__1.call(this,src);
case 2:
return image38824__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image38824.cljs$core$IFn$_invoke$arity$1 = image38824__1;
image38824.cljs$core$IFn$_invoke$arity$2 = image38824__2;
return image38824;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38824);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38825_SHARP_,p2__38826_SHARP_){return [cljs.core.str(p1__38825_SHARP_),cljs.core.str("["),cljs.core.str(p2__38826_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38827_SHARP_,p2__38828_SHARP_){return [cljs.core.str(p1__38827_SHARP_),cljs.core.str("-"),cljs.core.str(p2__38828_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$588,type,cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name),cljs.core.constant$keyword$549,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field38829 = (function() {
var hidden_field38829 = null;
var hidden_field38829__1 = (function (name){return hidden_field38829.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field38829__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field38829 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field38829__1.call(this,name);
case 2:
return hidden_field38829__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field38829.cljs$core$IFn$_invoke$arity$1 = hidden_field38829__1;
hidden_field38829.cljs$core$IFn$_invoke$arity$2 = hidden_field38829__2;
return hidden_field38829;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38829);
/**
* Creates a new text input field.
*/
sablono.core.text_field38830 = (function() {
var text_field38830 = null;
var text_field38830__1 = (function (name){return text_field38830.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field38830__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field38830 = function(name,value){
switch(arguments.length){
case 1:
return text_field38830__1.call(this,name);
case 2:
return text_field38830__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field38830.cljs$core$IFn$_invoke$arity$1 = text_field38830__1;
text_field38830.cljs$core$IFn$_invoke$arity$2 = text_field38830__2;
return text_field38830;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38830);
/**
* Creates a new password field.
*/
sablono.core.password_field38831 = (function() {
var password_field38831 = null;
var password_field38831__1 = (function (name){return password_field38831.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field38831__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field38831 = function(name,value){
switch(arguments.length){
case 1:
return password_field38831__1.call(this,name);
case 2:
return password_field38831__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field38831.cljs$core$IFn$_invoke$arity$1 = password_field38831__1;
password_field38831.cljs$core$IFn$_invoke$arity$2 = password_field38831__2;
return password_field38831;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38831);
/**
* Creates a new email input field.
*/
sablono.core.email_field38832 = (function() {
var email_field38832 = null;
var email_field38832__1 = (function (name){return email_field38832.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field38832__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field38832 = function(name,value){
switch(arguments.length){
case 1:
return email_field38832__1.call(this,name);
case 2:
return email_field38832__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field38832.cljs$core$IFn$_invoke$arity$1 = email_field38832__1;
email_field38832.cljs$core$IFn$_invoke$arity$2 = email_field38832__2;
return email_field38832;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38832);
/**
* Creates a check box.
*/
sablono.core.check_box38833 = (function() {
var check_box38833 = null;
var check_box38833__1 = (function (name){return check_box38833.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box38833__2 = (function (name,checked_QMARK_){return check_box38833.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box38833__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$588,"checkbox",cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name),cljs.core.constant$keyword$549,value,cljs.core.constant$keyword$599,checked_QMARK_], null)], null);
});
check_box38833 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box38833__1.call(this,name);
case 2:
return check_box38833__2.call(this,name,checked_QMARK_);
case 3:
return check_box38833__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box38833.cljs$core$IFn$_invoke$arity$1 = check_box38833__1;
check_box38833.cljs$core$IFn$_invoke$arity$2 = check_box38833__2;
check_box38833.cljs$core$IFn$_invoke$arity$3 = check_box38833__3;
return check_box38833;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38833);
/**
* Creates a radio button.
*/
sablono.core.radio_button38834 = (function() {
var radio_button38834 = null;
var radio_button38834__1 = (function (group){return radio_button38834.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button38834__2 = (function (group,checked_QMARK_){return radio_button38834.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button38834__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$588,"radio",cljs.core.constant$keyword$598,sablono.core.make_name(group),cljs.core.constant$keyword$584,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$549,value,cljs.core.constant$keyword$599,checked_QMARK_], null)], null);
});
radio_button38834 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button38834__1.call(this,group);
case 2:
return radio_button38834__2.call(this,group,checked_QMARK_);
case 3:
return radio_button38834__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button38834.cljs$core$IFn$_invoke$arity$1 = radio_button38834__1;
radio_button38834.cljs$core$IFn$_invoke$arity$2 = radio_button38834__2;
radio_button38834.cljs$core$IFn$_invoke$arity$3 = radio_button38834__3;
return radio_button38834;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38834);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options38835 = (function() {
var select_options38835 = null;
var select_options38835__1 = (function (coll){return select_options38835.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options38835__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__38844(s__38845){return (new cljs.core.LazySeq(null,(function (){var s__38845__$1 = s__38845;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38845__$1);if(temp__4092__auto__)
{var s__38845__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38845__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38845__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38847 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38846 = 0;while(true){
if((i__38846 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38846);cljs.core.chunk_append(b__38847,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38850 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38850,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38850,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,text], null),select_options38835.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$549,val,cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__38852 = (i__38846 + 1);
i__38846 = G__38852;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38847),iter__38844(cljs.core.chunk_rest(s__38845__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38847),null);
}
} else
{var x = cljs.core.first(s__38845__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38851 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38851,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38851,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,text], null),select_options38835.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$549,val,cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__38844(cljs.core.rest(s__38845__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
});
select_options38835 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options38835__1.call(this,coll);
case 2:
return select_options38835__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options38835.cljs$core$IFn$_invoke$arity$1 = select_options38835__1;
select_options38835.cljs$core$IFn$_invoke$arity$2 = select_options38835__2;
return select_options38835;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38835);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down38853 = (function() {
var drop_down38853 = null;
var drop_down38853__2 = (function (name,options){return drop_down38853.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down38853__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$604,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down38853 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down38853__2.call(this,name,options);
case 3:
return drop_down38853__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down38853.cljs$core$IFn$_invoke$arity$2 = drop_down38853__2;
drop_down38853.cljs$core$IFn$_invoke$arity$3 = drop_down38853__3;
return drop_down38853;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38853);
/**
* Creates a text area element.
*/
sablono.core.text_area38854 = (function() {
var text_area38854 = null;
var text_area38854__1 = (function (name){return text_area38854.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area38854__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$585,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name),cljs.core.constant$keyword$549,value], null)], null);
});
text_area38854 = function(name,value){
switch(arguments.length){
case 1:
return text_area38854__1.call(this,name);
case 2:
return text_area38854__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area38854.cljs$core$IFn$_invoke$arity$1 = text_area38854__1;
text_area38854.cljs$core$IFn$_invoke$arity$2 = text_area38854__2;
return text_area38854;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38854);
/**
* Creates a file upload input.
*/
sablono.core.file_upload38855 = (function file_upload38855(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload38855);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label38856 = (function label38856(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$601,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$581,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38856);
/**
* Creates a submit button.
*/
sablono.core.submit_button38857 = (function submit_button38857(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,"submit",cljs.core.constant$keyword$549,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38857);
/**
* Creates a form reset button.
*/
sablono.core.reset_button38858 = (function reset_button38858(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,"reset",cljs.core.constant$keyword$549,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38858);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to38859 = (function() { 
var form_to38859__delegate = function (p__38860,body){var vec__38862 = p__38860;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38862,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38862,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$605,null,cljs.core.constant$keyword$606,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$607,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$608,method_str,cljs.core.constant$keyword$609,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$607,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$608,"POST",cljs.core.constant$keyword$609,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to38859 = function (p__38860,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to38859__delegate.call(this,p__38860,body);};
form_to38859.cljs$lang$maxFixedArity = 1;
form_to38859.cljs$lang$applyTo = (function (arglist__38863){
var p__38860 = cljs.core.first(arglist__38863);
var body = cljs.core.rest(arglist__38863);
return form_to38859__delegate(p__38860,body);
});
form_to38859.cljs$core$IFn$_invoke$arity$variadic = form_to38859__delegate;
return form_to38859;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38859);
