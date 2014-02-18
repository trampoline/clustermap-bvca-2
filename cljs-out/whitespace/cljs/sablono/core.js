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
var G__37748__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__37747 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__37747,0,null);var body = cljs.core.nthnext.call(null,vec__37747,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__37748 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__37748__delegate.call(this,args);};
G__37748.cljs$lang$maxFixedArity = 0;
G__37748.cljs$lang$applyTo = (function (arglist__37749){
var args = cljs.core.seq(arglist__37749);
return G__37748__delegate(args);
});
G__37748.cljs$core$IFn$_invoke$arity$variadic = G__37748__delegate;
return G__37748;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__37754(s__37755){return (new cljs.core.LazySeq(null,(function (){var s__37755__$1 = s__37755;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37755__$1);if(temp__4092__auto__)
{var s__37755__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37755__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37755__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37757 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37756 = 0;while(true){
if((i__37756 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__37756);cljs.core.chunk_append.call(null,b__37757,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__37758 = (i__37756 + 1);
i__37756 = G__37758;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37757),iter__37754.call(null,cljs.core.chunk_rest.call(null,s__37755__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37757),null);
}
} else
{var args = cljs.core.first.call(null,s__37755__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__37754.call(null,cljs.core.rest.call(null,s__37755__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__37759_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__37759_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__37764(s__37765){return (new cljs.core.LazySeq(null,(function (){var s__37765__$1 = s__37765;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37765__$1);if(temp__4092__auto__)
{var s__37765__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37765__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37765__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37767 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37766 = 0;while(true){
if((i__37766 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__37766);cljs.core.chunk_append.call(null,b__37767,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__37768 = (i__37766 + 1);
i__37766 = G__37768;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37767),iter__37764.call(null,cljs.core.chunk_rest.call(null,s__37765__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37767),null);
}
} else
{var style = cljs.core.first.call(null,s__37765__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__37764.call(null,cljs.core.rest.call(null,s__37765__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__37769){
var styles = cljs.core.seq(arglist__37769);
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
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to37770 = (function() { 
var link_to37770__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to37770 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to37770__delegate.call(this,url,content);};
link_to37770.cljs$lang$maxFixedArity = 1;
link_to37770.cljs$lang$applyTo = (function (arglist__37771){
var url = cljs.core.first(arglist__37771);
var content = cljs.core.rest(arglist__37771);
return link_to37770__delegate(url,content);
});
link_to37770.cljs$core$IFn$_invoke$arity$variadic = link_to37770__delegate;
return link_to37770;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37770);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to37772 = (function() { 
var mail_to37772__delegate = function (e_mail,p__37773){var vec__37775 = p__37773;var content = cljs.core.nth.call(null,vec__37775,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to37772 = function (e_mail,var_args){
var p__37773 = null;if (arguments.length > 1) {
  p__37773 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to37772__delegate.call(this,e_mail,p__37773);};
mail_to37772.cljs$lang$maxFixedArity = 1;
mail_to37772.cljs$lang$applyTo = (function (arglist__37776){
var e_mail = cljs.core.first(arglist__37776);
var p__37773 = cljs.core.rest(arglist__37776);
return mail_to37772__delegate(e_mail,p__37773);
});
mail_to37772.cljs$core$IFn$_invoke$arity$variadic = mail_to37772__delegate;
return mail_to37772;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37772);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list37777 = (function unordered_list37777(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__37782(s__37783){return (new cljs.core.LazySeq(null,(function (){var s__37783__$1 = s__37783;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37783__$1);if(temp__4092__auto__)
{var s__37783__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37783__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37783__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37785 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37784 = 0;while(true){
if((i__37784 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37784);cljs.core.chunk_append.call(null,b__37785,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__37786 = (i__37784 + 1);
i__37784 = G__37786;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37785),iter__37782.call(null,cljs.core.chunk_rest.call(null,s__37783__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37785),null);
}
} else
{var x = cljs.core.first.call(null,s__37783__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__37782.call(null,cljs.core.rest.call(null,s__37783__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37777);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list37787 = (function ordered_list37787(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__37792(s__37793){return (new cljs.core.LazySeq(null,(function (){var s__37793__$1 = s__37793;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37793__$1);if(temp__4092__auto__)
{var s__37793__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37793__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37793__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37795 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37794 = 0;while(true){
if((i__37794 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37794);cljs.core.chunk_append.call(null,b__37795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__37796 = (i__37794 + 1);
i__37794 = G__37796;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37795),iter__37792.call(null,cljs.core.chunk_rest.call(null,s__37793__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37795),null);
}
} else
{var x = cljs.core.first.call(null,s__37793__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__37792.call(null,cljs.core.rest.call(null,s__37793__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37787);
/**
* Create an image element.
*/
sablono.core.image37797 = (function() {
var image37797 = null;
var image37797__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image37797__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image37797 = function(src,alt){
switch(arguments.length){
case 1:
return image37797__1.call(this,src);
case 2:
return image37797__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image37797.cljs$core$IFn$_invoke$arity$1 = image37797__1;
image37797.cljs$core$IFn$_invoke$arity$2 = image37797__2;
return image37797;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37797);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__37798_SHARP_,p2__37799_SHARP_){return [cljs.core.str(p1__37798_SHARP_),cljs.core.str("["),cljs.core.str(p2__37799_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__37800_SHARP_,p2__37801_SHARP_){return [cljs.core.str(p1__37800_SHARP_),cljs.core.str("-"),cljs.core.str(p2__37801_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field37802 = (function() {
var hidden_field37802 = null;
var hidden_field37802__1 = (function (name){return hidden_field37802.call(null,name,null);
});
var hidden_field37802__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field37802 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field37802__1.call(this,name);
case 2:
return hidden_field37802__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field37802.cljs$core$IFn$_invoke$arity$1 = hidden_field37802__1;
hidden_field37802.cljs$core$IFn$_invoke$arity$2 = hidden_field37802__2;
return hidden_field37802;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37802);
/**
* Creates a new text input field.
*/
sablono.core.text_field37803 = (function() {
var text_field37803 = null;
var text_field37803__1 = (function (name){return text_field37803.call(null,name,null);
});
var text_field37803__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field37803 = function(name,value){
switch(arguments.length){
case 1:
return text_field37803__1.call(this,name);
case 2:
return text_field37803__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field37803.cljs$core$IFn$_invoke$arity$1 = text_field37803__1;
text_field37803.cljs$core$IFn$_invoke$arity$2 = text_field37803__2;
return text_field37803;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37803);
/**
* Creates a new password field.
*/
sablono.core.password_field37804 = (function() {
var password_field37804 = null;
var password_field37804__1 = (function (name){return password_field37804.call(null,name,null);
});
var password_field37804__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field37804 = function(name,value){
switch(arguments.length){
case 1:
return password_field37804__1.call(this,name);
case 2:
return password_field37804__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field37804.cljs$core$IFn$_invoke$arity$1 = password_field37804__1;
password_field37804.cljs$core$IFn$_invoke$arity$2 = password_field37804__2;
return password_field37804;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37804);
/**
* Creates a new email input field.
*/
sablono.core.email_field37805 = (function() {
var email_field37805 = null;
var email_field37805__1 = (function (name){return email_field37805.call(null,name,null);
});
var email_field37805__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field37805 = function(name,value){
switch(arguments.length){
case 1:
return email_field37805__1.call(this,name);
case 2:
return email_field37805__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field37805.cljs$core$IFn$_invoke$arity$1 = email_field37805__1;
email_field37805.cljs$core$IFn$_invoke$arity$2 = email_field37805__2;
return email_field37805;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37805);
/**
* Creates a check box.
*/
sablono.core.check_box37806 = (function() {
var check_box37806 = null;
var check_box37806__1 = (function (name){return check_box37806.call(null,name,null);
});
var check_box37806__2 = (function (name,checked_QMARK_){return check_box37806.call(null,name,checked_QMARK_,"true");
});
var check_box37806__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box37806 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box37806__1.call(this,name);
case 2:
return check_box37806__2.call(this,name,checked_QMARK_);
case 3:
return check_box37806__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box37806.cljs$core$IFn$_invoke$arity$1 = check_box37806__1;
check_box37806.cljs$core$IFn$_invoke$arity$2 = check_box37806__2;
check_box37806.cljs$core$IFn$_invoke$arity$3 = check_box37806__3;
return check_box37806;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37806);
/**
* Creates a radio button.
*/
sablono.core.radio_button37807 = (function() {
var radio_button37807 = null;
var radio_button37807__1 = (function (group){return radio_button37807.call(null,group,null);
});
var radio_button37807__2 = (function (group,checked_QMARK_){return radio_button37807.call(null,group,checked_QMARK_,"true");
});
var radio_button37807__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button37807 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button37807__1.call(this,group);
case 2:
return radio_button37807__2.call(this,group,checked_QMARK_);
case 3:
return radio_button37807__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button37807.cljs$core$IFn$_invoke$arity$1 = radio_button37807__1;
radio_button37807.cljs$core$IFn$_invoke$arity$2 = radio_button37807__2;
radio_button37807.cljs$core$IFn$_invoke$arity$3 = radio_button37807__3;
return radio_button37807;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37807);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options37808 = (function() {
var select_options37808 = null;
var select_options37808__1 = (function (coll){return select_options37808.call(null,coll,null);
});
var select_options37808__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__37817(s__37818){return (new cljs.core.LazySeq(null,(function (){var s__37818__$1 = s__37818;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37818__$1);if(temp__4092__auto__)
{var s__37818__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37818__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37818__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37820 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37819 = 0;while(true){
if((i__37819 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37819);cljs.core.chunk_append.call(null,b__37820,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37823 = x;var text = cljs.core.nth.call(null,vec__37823,0,null);var val = cljs.core.nth.call(null,vec__37823,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options37808.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__37825 = (i__37819 + 1);
i__37819 = G__37825;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37820),iter__37817.call(null,cljs.core.chunk_rest.call(null,s__37818__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37820),null);
}
} else
{var x = cljs.core.first.call(null,s__37818__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37824 = x;var text = cljs.core.nth.call(null,vec__37824,0,null);var val = cljs.core.nth.call(null,vec__37824,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options37808.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__37817.call(null,cljs.core.rest.call(null,s__37818__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options37808 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options37808__1.call(this,coll);
case 2:
return select_options37808__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options37808.cljs$core$IFn$_invoke$arity$1 = select_options37808__1;
select_options37808.cljs$core$IFn$_invoke$arity$2 = select_options37808__2;
return select_options37808;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37808);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down37826 = (function() {
var drop_down37826 = null;
var drop_down37826__2 = (function (name,options){return drop_down37826.call(null,name,options,null);
});
var drop_down37826__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down37826 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down37826__2.call(this,name,options);
case 3:
return drop_down37826__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down37826.cljs$core$IFn$_invoke$arity$2 = drop_down37826__2;
drop_down37826.cljs$core$IFn$_invoke$arity$3 = drop_down37826__3;
return drop_down37826;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37826);
/**
* Creates a text area element.
*/
sablono.core.text_area37827 = (function() {
var text_area37827 = null;
var text_area37827__1 = (function (name){return text_area37827.call(null,name,null);
});
var text_area37827__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area37827 = function(name,value){
switch(arguments.length){
case 1:
return text_area37827__1.call(this,name);
case 2:
return text_area37827__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area37827.cljs$core$IFn$_invoke$arity$1 = text_area37827__1;
text_area37827.cljs$core$IFn$_invoke$arity$2 = text_area37827__2;
return text_area37827;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37827);
/**
* Creates a file upload input.
*/
sablono.core.file_upload37828 = (function file_upload37828(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload37828);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label37829 = (function label37829(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37829);
/**
* Creates a submit button.
*/
sablono.core.submit_button37830 = (function submit_button37830(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37830);
/**
* Creates a form reset button.
*/
sablono.core.reset_button37831 = (function reset_button37831(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37831);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to37832 = (function() { 
var form_to37832__delegate = function (p__37833,body){var vec__37835 = p__37833;var method = cljs.core.nth.call(null,vec__37835,0,null);var action = cljs.core.nth.call(null,vec__37835,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to37832 = function (p__37833,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to37832__delegate.call(this,p__37833,body);};
form_to37832.cljs$lang$maxFixedArity = 1;
form_to37832.cljs$lang$applyTo = (function (arglist__37836){
var p__37833 = cljs.core.first(arglist__37836);
var body = cljs.core.rest(arglist__37836);
return form_to37832__delegate(p__37833,body);
});
form_to37832.cljs$core$IFn$_invoke$arity$variadic = form_to37832__delegate;
return form_to37832;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37832);
