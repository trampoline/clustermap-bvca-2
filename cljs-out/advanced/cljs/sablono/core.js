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
var G__25653__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__25652 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25652,0,null);var body = cljs.core.nthnext(vec__25652,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__25653 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25653__delegate.call(this,args);};
G__25653.cljs$lang$maxFixedArity = 0;
G__25653.cljs$lang$applyTo = (function (arglist__25654){
var args = cljs.core.seq(arglist__25654);
return G__25653__delegate(args);
});
G__25653.cljs$core$IFn$_invoke$arity$variadic = G__25653__delegate;
return G__25653;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__25659(s__25660){return (new cljs.core.LazySeq(null,(function (){var s__25660__$1 = s__25660;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25660__$1);if(temp__4092__auto__)
{var s__25660__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25660__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25660__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25662 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25661 = 0;while(true){
if((i__25661 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25661);cljs.core.chunk_append(b__25662,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__25663 = (i__25661 + 1);
i__25661 = G__25663;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25662),iter__25659(cljs.core.chunk_rest(s__25660__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25662),null);
}
} else
{var args = cljs.core.first(s__25660__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__25659(cljs.core.rest(s__25660__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__25664_SHARP_){return cljs.core.reset_BANG_(html,p1__25664_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__25669(s__25670){return (new cljs.core.LazySeq(null,(function (){var s__25670__$1 = s__25670;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25670__$1);if(temp__4092__auto__)
{var s__25670__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25670__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25670__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25672 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25671 = 0;while(true){
if((i__25671 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25671);cljs.core.chunk_append(b__25672,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$216,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$217,"text/css",cljs.core.constant$keyword$218,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$219,"stylesheet"], null)], null));
{
var G__25673 = (i__25671 + 1);
i__25671 = G__25673;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25672),iter__25669(cljs.core.chunk_rest(s__25670__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25672),null);
}
} else
{var style = cljs.core.first(s__25670__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$216,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$217,"text/css",cljs.core.constant$keyword$218,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$219,"stylesheet"], null)], null),iter__25669(cljs.core.rest(s__25670__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__25674){
var styles = cljs.core.seq(arglist__25674);
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
sablono.core.link_to25675 = (function() { 
var link_to25675__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to25675 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to25675__delegate.call(this,url,content);};
link_to25675.cljs$lang$maxFixedArity = 1;
link_to25675.cljs$lang$applyTo = (function (arglist__25676){
var url = cljs.core.first(arglist__25676);
var content = cljs.core.rest(arglist__25676);
return link_to25675__delegate(url,content);
});
link_to25675.cljs$core$IFn$_invoke$arity$variadic = link_to25675__delegate;
return link_to25675;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to25675);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to25677 = (function() { 
var mail_to25677__delegate = function (e_mail,p__25678){var vec__25680 = p__25678;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25680,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to25677 = function (e_mail,var_args){
var p__25678 = null;if (arguments.length > 1) {
  p__25678 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to25677__delegate.call(this,e_mail,p__25678);};
mail_to25677.cljs$lang$maxFixedArity = 1;
mail_to25677.cljs$lang$applyTo = (function (arglist__25681){
var e_mail = cljs.core.first(arglist__25681);
var p__25678 = cljs.core.rest(arglist__25681);
return mail_to25677__delegate(e_mail,p__25678);
});
mail_to25677.cljs$core$IFn$_invoke$arity$variadic = mail_to25677__delegate;
return mail_to25677;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to25677);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list25682 = (function unordered_list25682(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,(function (){var iter__4117__auto__ = (function iter__25687(s__25688){return (new cljs.core.LazySeq(null,(function (){var s__25688__$1 = s__25688;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25688__$1);if(temp__4092__auto__)
{var s__25688__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25688__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25688__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25690 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25689 = 0;while(true){
if((i__25689 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25689);cljs.core.chunk_append(b__25690,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222,x], null));
{
var G__25691 = (i__25689 + 1);
i__25689 = G__25691;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25690),iter__25687(cljs.core.chunk_rest(s__25688__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25690),null);
}
} else
{var x = cljs.core.first(s__25688__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222,x], null),iter__25687(cljs.core.rest(s__25688__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list25682);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list25692 = (function ordered_list25692(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,(function (){var iter__4117__auto__ = (function iter__25697(s__25698){return (new cljs.core.LazySeq(null,(function (){var s__25698__$1 = s__25698;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25698__$1);if(temp__4092__auto__)
{var s__25698__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25698__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25698__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25700 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25699 = 0;while(true){
if((i__25699 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25699);cljs.core.chunk_append(b__25700,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222,x], null));
{
var G__25701 = (i__25699 + 1);
i__25699 = G__25701;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25700),iter__25697(cljs.core.chunk_rest(s__25698__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25700),null);
}
} else
{var x = cljs.core.first(s__25698__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222,x], null),iter__25697(cljs.core.rest(s__25698__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list25692);
/**
* Create an image element.
*/
sablono.core.image25702 = (function() {
var image25702 = null;
var image25702__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$224,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image25702__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$224,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$225,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$226,alt], null)], null);
});
image25702 = function(src,alt){
switch(arguments.length){
case 1:
return image25702__1.call(this,src);
case 2:
return image25702__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image25702.cljs$core$IFn$_invoke$arity$1 = image25702__1;
image25702.cljs$core$IFn$_invoke$arity$2 = image25702__2;
return image25702;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image25702);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25703_SHARP_,p2__25704_SHARP_){return [cljs.core.str(p1__25703_SHARP_),cljs.core.str("["),cljs.core.str(p2__25704_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25705_SHARP_,p2__25706_SHARP_){return [cljs.core.str(p1__25705_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25706_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$217,type,cljs.core.constant$keyword$228,sablono.core.make_name(name),cljs.core.constant$keyword$214,sablono.core.make_id(name),cljs.core.constant$keyword$187,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field25707 = (function() {
var hidden_field25707 = null;
var hidden_field25707__1 = (function (name){return hidden_field25707.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field25707__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field25707 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field25707__1.call(this,name);
case 2:
return hidden_field25707__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field25707.cljs$core$IFn$_invoke$arity$1 = hidden_field25707__1;
hidden_field25707.cljs$core$IFn$_invoke$arity$2 = hidden_field25707__2;
return hidden_field25707;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field25707);
/**
* Creates a new text input field.
*/
sablono.core.text_field25708 = (function() {
var text_field25708 = null;
var text_field25708__1 = (function (name){return text_field25708.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field25708__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field25708 = function(name,value){
switch(arguments.length){
case 1:
return text_field25708__1.call(this,name);
case 2:
return text_field25708__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field25708.cljs$core$IFn$_invoke$arity$1 = text_field25708__1;
text_field25708.cljs$core$IFn$_invoke$arity$2 = text_field25708__2;
return text_field25708;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field25708);
/**
* Creates a new password field.
*/
sablono.core.password_field25709 = (function() {
var password_field25709 = null;
var password_field25709__1 = (function (name){return password_field25709.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field25709__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field25709 = function(name,value){
switch(arguments.length){
case 1:
return password_field25709__1.call(this,name);
case 2:
return password_field25709__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field25709.cljs$core$IFn$_invoke$arity$1 = password_field25709__1;
password_field25709.cljs$core$IFn$_invoke$arity$2 = password_field25709__2;
return password_field25709;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field25709);
/**
* Creates a new email input field.
*/
sablono.core.email_field25710 = (function() {
var email_field25710 = null;
var email_field25710__1 = (function (name){return email_field25710.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field25710__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field25710 = function(name,value){
switch(arguments.length){
case 1:
return email_field25710__1.call(this,name);
case 2:
return email_field25710__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field25710.cljs$core$IFn$_invoke$arity$1 = email_field25710__1;
email_field25710.cljs$core$IFn$_invoke$arity$2 = email_field25710__2;
return email_field25710;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field25710);
/**
* Creates a check box.
*/
sablono.core.check_box25711 = (function() {
var check_box25711 = null;
var check_box25711__1 = (function (name){return check_box25711.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box25711__2 = (function (name,checked_QMARK_){return check_box25711.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box25711__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$217,"checkbox",cljs.core.constant$keyword$228,sablono.core.make_name(name),cljs.core.constant$keyword$214,sablono.core.make_id(name),cljs.core.constant$keyword$187,value,cljs.core.constant$keyword$229,checked_QMARK_], null)], null);
});
check_box25711 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box25711__1.call(this,name);
case 2:
return check_box25711__2.call(this,name,checked_QMARK_);
case 3:
return check_box25711__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box25711.cljs$core$IFn$_invoke$arity$1 = check_box25711__1;
check_box25711.cljs$core$IFn$_invoke$arity$2 = check_box25711__2;
check_box25711.cljs$core$IFn$_invoke$arity$3 = check_box25711__3;
return check_box25711;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box25711);
/**
* Creates a radio button.
*/
sablono.core.radio_button25712 = (function() {
var radio_button25712 = null;
var radio_button25712__1 = (function (group){return radio_button25712.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button25712__2 = (function (group,checked_QMARK_){return radio_button25712.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button25712__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$217,"radio",cljs.core.constant$keyword$228,sablono.core.make_name(group),cljs.core.constant$keyword$214,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$187,value,cljs.core.constant$keyword$229,checked_QMARK_], null)], null);
});
radio_button25712 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button25712__1.call(this,group);
case 2:
return radio_button25712__2.call(this,group,checked_QMARK_);
case 3:
return radio_button25712__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button25712.cljs$core$IFn$_invoke$arity$1 = radio_button25712__1;
radio_button25712.cljs$core$IFn$_invoke$arity$2 = radio_button25712__2;
radio_button25712.cljs$core$IFn$_invoke$arity$3 = radio_button25712__3;
return radio_button25712;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button25712);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options25713 = (function() {
var select_options25713 = null;
var select_options25713__1 = (function (coll){return select_options25713.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options25713__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__25722(s__25723){return (new cljs.core.LazySeq(null,(function (){var s__25723__$1 = s__25723;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25723__$1);if(temp__4092__auto__)
{var s__25723__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25723__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25723__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25725 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25724 = 0;while(true){
if((i__25724 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25724);cljs.core.chunk_append(b__25725,((cljs.core.sequential_QMARK_(x))?(function (){var vec__25728 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25728,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25728,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$231,text], null),select_options25713.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$187,val,cljs.core.constant$keyword$233,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$233,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__25730 = (i__25724 + 1);
i__25724 = G__25730;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25725),iter__25722(cljs.core.chunk_rest(s__25723__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25725),null);
}
} else
{var x = cljs.core.first(s__25723__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__25729 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25729,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25729,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$231,text], null),select_options25713.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$187,val,cljs.core.constant$keyword$233,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$233,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__25722(cljs.core.rest(s__25723__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options25713 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options25713__1.call(this,coll);
case 2:
return select_options25713__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options25713.cljs$core$IFn$_invoke$arity$1 = select_options25713__1;
select_options25713.cljs$core$IFn$_invoke$arity$2 = select_options25713__2;
return select_options25713;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options25713);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down25731 = (function() {
var drop_down25731 = null;
var drop_down25731__2 = (function (name,options){return drop_down25731.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down25731__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,sablono.core.make_name(name),cljs.core.constant$keyword$214,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down25731 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down25731__2.call(this,name,options);
case 3:
return drop_down25731__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down25731.cljs$core$IFn$_invoke$arity$2 = drop_down25731__2;
drop_down25731.cljs$core$IFn$_invoke$arity$3 = drop_down25731__3;
return drop_down25731;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down25731);
/**
* Creates a text area element.
*/
sablono.core.text_area25732 = (function() {
var text_area25732 = null;
var text_area25732__1 = (function (name){return text_area25732.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area25732__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,sablono.core.make_name(name),cljs.core.constant$keyword$214,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area25732 = function(name,value){
switch(arguments.length){
case 1:
return text_area25732__1.call(this,name);
case 2:
return text_area25732__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area25732.cljs$core$IFn$_invoke$arity$1 = text_area25732__1;
text_area25732.cljs$core$IFn$_invoke$arity$2 = text_area25732__2;
return text_area25732;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area25732);
/**
* Creates a file upload input.
*/
sablono.core.file_upload25733 = (function file_upload25733(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload25733);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label25734 = (function label25734(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label25734);
/**
* Creates a submit button.
*/
sablono.core.submit_button25735 = (function submit_button25735(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$217,"submit",cljs.core.constant$keyword$187,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button25735);
/**
* Creates a form reset button.
*/
sablono.core.reset_button25736 = (function reset_button25736(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$217,"reset",cljs.core.constant$keyword$187,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button25736);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to25737 = (function() { 
var form_to25737__delegate = function (p__25738,body){var vec__25740 = p__25738;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25740,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25740,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,null,cljs.core.constant$keyword$237,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$239,method_str,cljs.core.constant$keyword$240,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$239,"POST",cljs.core.constant$keyword$240,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to25737 = function (p__25738,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to25737__delegate.call(this,p__25738,body);};
form_to25737.cljs$lang$maxFixedArity = 1;
form_to25737.cljs$lang$applyTo = (function (arglist__25741){
var p__25738 = cljs.core.first(arglist__25741);
var body = cljs.core.rest(arglist__25741);
return form_to25737__delegate(p__25738,body);
});
form_to25737.cljs$core$IFn$_invoke$arity$variadic = form_to25737__delegate;
return form_to25737;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to25737);
