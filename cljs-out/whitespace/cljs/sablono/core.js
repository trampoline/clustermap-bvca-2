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
var G__37754__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__37753 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__37753,0,null);var body = cljs.core.nthnext.call(null,vec__37753,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__37754 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__37754__delegate.call(this,args);};
G__37754.cljs$lang$maxFixedArity = 0;
G__37754.cljs$lang$applyTo = (function (arglist__37755){
var args = cljs.core.seq(arglist__37755);
return G__37754__delegate(args);
});
G__37754.cljs$core$IFn$_invoke$arity$variadic = G__37754__delegate;
return G__37754;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__37760(s__37761){return (new cljs.core.LazySeq(null,(function (){var s__37761__$1 = s__37761;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37761__$1);if(temp__4092__auto__)
{var s__37761__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37761__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37761__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37763 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37762 = 0;while(true){
if((i__37762 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__37762);cljs.core.chunk_append.call(null,b__37763,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__37764 = (i__37762 + 1);
i__37762 = G__37764;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37763),iter__37760.call(null,cljs.core.chunk_rest.call(null,s__37761__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37763),null);
}
} else
{var args = cljs.core.first.call(null,s__37761__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__37760.call(null,cljs.core.rest.call(null,s__37761__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__37765_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__37765_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__37770(s__37771){return (new cljs.core.LazySeq(null,(function (){var s__37771__$1 = s__37771;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37771__$1);if(temp__4092__auto__)
{var s__37771__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37771__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37771__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37773 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37772 = 0;while(true){
if((i__37772 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__37772);cljs.core.chunk_append.call(null,b__37773,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__37774 = (i__37772 + 1);
i__37772 = G__37774;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37773),iter__37770.call(null,cljs.core.chunk_rest.call(null,s__37771__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37773),null);
}
} else
{var style = cljs.core.first.call(null,s__37771__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__37770.call(null,cljs.core.rest.call(null,s__37771__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__37775){
var styles = cljs.core.seq(arglist__37775);
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
sablono.core.link_to37776 = (function() { 
var link_to37776__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to37776 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to37776__delegate.call(this,url,content);};
link_to37776.cljs$lang$maxFixedArity = 1;
link_to37776.cljs$lang$applyTo = (function (arglist__37777){
var url = cljs.core.first(arglist__37777);
var content = cljs.core.rest(arglist__37777);
return link_to37776__delegate(url,content);
});
link_to37776.cljs$core$IFn$_invoke$arity$variadic = link_to37776__delegate;
return link_to37776;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37776);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to37778 = (function() { 
var mail_to37778__delegate = function (e_mail,p__37779){var vec__37781 = p__37779;var content = cljs.core.nth.call(null,vec__37781,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to37778 = function (e_mail,var_args){
var p__37779 = null;if (arguments.length > 1) {
  p__37779 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to37778__delegate.call(this,e_mail,p__37779);};
mail_to37778.cljs$lang$maxFixedArity = 1;
mail_to37778.cljs$lang$applyTo = (function (arglist__37782){
var e_mail = cljs.core.first(arglist__37782);
var p__37779 = cljs.core.rest(arglist__37782);
return mail_to37778__delegate(e_mail,p__37779);
});
mail_to37778.cljs$core$IFn$_invoke$arity$variadic = mail_to37778__delegate;
return mail_to37778;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37778);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list37783 = (function unordered_list37783(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__37788(s__37789){return (new cljs.core.LazySeq(null,(function (){var s__37789__$1 = s__37789;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37789__$1);if(temp__4092__auto__)
{var s__37789__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37789__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37789__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37791 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37790 = 0;while(true){
if((i__37790 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37790);cljs.core.chunk_append.call(null,b__37791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__37792 = (i__37790 + 1);
i__37790 = G__37792;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37791),iter__37788.call(null,cljs.core.chunk_rest.call(null,s__37789__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37791),null);
}
} else
{var x = cljs.core.first.call(null,s__37789__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__37788.call(null,cljs.core.rest.call(null,s__37789__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37783);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list37793 = (function ordered_list37793(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__37798(s__37799){return (new cljs.core.LazySeq(null,(function (){var s__37799__$1 = s__37799;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37799__$1);if(temp__4092__auto__)
{var s__37799__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37799__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37799__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37801 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37800 = 0;while(true){
if((i__37800 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37800);cljs.core.chunk_append.call(null,b__37801,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__37802 = (i__37800 + 1);
i__37800 = G__37802;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37801),iter__37798.call(null,cljs.core.chunk_rest.call(null,s__37799__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37801),null);
}
} else
{var x = cljs.core.first.call(null,s__37799__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__37798.call(null,cljs.core.rest.call(null,s__37799__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37793);
/**
* Create an image element.
*/
sablono.core.image37803 = (function() {
var image37803 = null;
var image37803__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image37803__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image37803 = function(src,alt){
switch(arguments.length){
case 1:
return image37803__1.call(this,src);
case 2:
return image37803__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image37803.cljs$core$IFn$_invoke$arity$1 = image37803__1;
image37803.cljs$core$IFn$_invoke$arity$2 = image37803__2;
return image37803;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37803);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__37804_SHARP_,p2__37805_SHARP_){return [cljs.core.str(p1__37804_SHARP_),cljs.core.str("["),cljs.core.str(p2__37805_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__37806_SHARP_,p2__37807_SHARP_){return [cljs.core.str(p1__37806_SHARP_),cljs.core.str("-"),cljs.core.str(p2__37807_SHARP_)].join('');
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
sablono.core.hidden_field37808 = (function() {
var hidden_field37808 = null;
var hidden_field37808__1 = (function (name){return hidden_field37808.call(null,name,null);
});
var hidden_field37808__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field37808 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field37808__1.call(this,name);
case 2:
return hidden_field37808__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field37808.cljs$core$IFn$_invoke$arity$1 = hidden_field37808__1;
hidden_field37808.cljs$core$IFn$_invoke$arity$2 = hidden_field37808__2;
return hidden_field37808;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37808);
/**
* Creates a new text input field.
*/
sablono.core.text_field37809 = (function() {
var text_field37809 = null;
var text_field37809__1 = (function (name){return text_field37809.call(null,name,null);
});
var text_field37809__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field37809 = function(name,value){
switch(arguments.length){
case 1:
return text_field37809__1.call(this,name);
case 2:
return text_field37809__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field37809.cljs$core$IFn$_invoke$arity$1 = text_field37809__1;
text_field37809.cljs$core$IFn$_invoke$arity$2 = text_field37809__2;
return text_field37809;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37809);
/**
* Creates a new password field.
*/
sablono.core.password_field37810 = (function() {
var password_field37810 = null;
var password_field37810__1 = (function (name){return password_field37810.call(null,name,null);
});
var password_field37810__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field37810 = function(name,value){
switch(arguments.length){
case 1:
return password_field37810__1.call(this,name);
case 2:
return password_field37810__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field37810.cljs$core$IFn$_invoke$arity$1 = password_field37810__1;
password_field37810.cljs$core$IFn$_invoke$arity$2 = password_field37810__2;
return password_field37810;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37810);
/**
* Creates a new email input field.
*/
sablono.core.email_field37811 = (function() {
var email_field37811 = null;
var email_field37811__1 = (function (name){return email_field37811.call(null,name,null);
});
var email_field37811__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field37811 = function(name,value){
switch(arguments.length){
case 1:
return email_field37811__1.call(this,name);
case 2:
return email_field37811__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field37811.cljs$core$IFn$_invoke$arity$1 = email_field37811__1;
email_field37811.cljs$core$IFn$_invoke$arity$2 = email_field37811__2;
return email_field37811;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37811);
/**
* Creates a check box.
*/
sablono.core.check_box37812 = (function() {
var check_box37812 = null;
var check_box37812__1 = (function (name){return check_box37812.call(null,name,null);
});
var check_box37812__2 = (function (name,checked_QMARK_){return check_box37812.call(null,name,checked_QMARK_,"true");
});
var check_box37812__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box37812 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box37812__1.call(this,name);
case 2:
return check_box37812__2.call(this,name,checked_QMARK_);
case 3:
return check_box37812__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box37812.cljs$core$IFn$_invoke$arity$1 = check_box37812__1;
check_box37812.cljs$core$IFn$_invoke$arity$2 = check_box37812__2;
check_box37812.cljs$core$IFn$_invoke$arity$3 = check_box37812__3;
return check_box37812;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37812);
/**
* Creates a radio button.
*/
sablono.core.radio_button37813 = (function() {
var radio_button37813 = null;
var radio_button37813__1 = (function (group){return radio_button37813.call(null,group,null);
});
var radio_button37813__2 = (function (group,checked_QMARK_){return radio_button37813.call(null,group,checked_QMARK_,"true");
});
var radio_button37813__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button37813 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button37813__1.call(this,group);
case 2:
return radio_button37813__2.call(this,group,checked_QMARK_);
case 3:
return radio_button37813__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button37813.cljs$core$IFn$_invoke$arity$1 = radio_button37813__1;
radio_button37813.cljs$core$IFn$_invoke$arity$2 = radio_button37813__2;
radio_button37813.cljs$core$IFn$_invoke$arity$3 = radio_button37813__3;
return radio_button37813;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37813);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options37814 = (function() {
var select_options37814 = null;
var select_options37814__1 = (function (coll){return select_options37814.call(null,coll,null);
});
var select_options37814__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__37823(s__37824){return (new cljs.core.LazySeq(null,(function (){var s__37824__$1 = s__37824;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37824__$1);if(temp__4092__auto__)
{var s__37824__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37824__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37824__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37826 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37825 = 0;while(true){
if((i__37825 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37825);cljs.core.chunk_append.call(null,b__37826,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37829 = x;var text = cljs.core.nth.call(null,vec__37829,0,null);var val = cljs.core.nth.call(null,vec__37829,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options37814.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__37831 = (i__37825 + 1);
i__37825 = G__37831;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37826),iter__37823.call(null,cljs.core.chunk_rest.call(null,s__37824__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37826),null);
}
} else
{var x = cljs.core.first.call(null,s__37824__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37830 = x;var text = cljs.core.nth.call(null,vec__37830,0,null);var val = cljs.core.nth.call(null,vec__37830,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options37814.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__37823.call(null,cljs.core.rest.call(null,s__37824__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options37814 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options37814__1.call(this,coll);
case 2:
return select_options37814__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options37814.cljs$core$IFn$_invoke$arity$1 = select_options37814__1;
select_options37814.cljs$core$IFn$_invoke$arity$2 = select_options37814__2;
return select_options37814;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37814);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down37832 = (function() {
var drop_down37832 = null;
var drop_down37832__2 = (function (name,options){return drop_down37832.call(null,name,options,null);
});
var drop_down37832__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down37832 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down37832__2.call(this,name,options);
case 3:
return drop_down37832__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down37832.cljs$core$IFn$_invoke$arity$2 = drop_down37832__2;
drop_down37832.cljs$core$IFn$_invoke$arity$3 = drop_down37832__3;
return drop_down37832;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37832);
/**
* Creates a text area element.
*/
sablono.core.text_area37833 = (function() {
var text_area37833 = null;
var text_area37833__1 = (function (name){return text_area37833.call(null,name,null);
});
var text_area37833__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area37833 = function(name,value){
switch(arguments.length){
case 1:
return text_area37833__1.call(this,name);
case 2:
return text_area37833__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area37833.cljs$core$IFn$_invoke$arity$1 = text_area37833__1;
text_area37833.cljs$core$IFn$_invoke$arity$2 = text_area37833__2;
return text_area37833;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37833);
/**
* Creates a file upload input.
*/
sablono.core.file_upload37834 = (function file_upload37834(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload37834);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label37835 = (function label37835(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37835);
/**
* Creates a submit button.
*/
sablono.core.submit_button37836 = (function submit_button37836(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37836);
/**
* Creates a form reset button.
*/
sablono.core.reset_button37837 = (function reset_button37837(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37837);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to37838 = (function() { 
var form_to37838__delegate = function (p__37839,body){var vec__37841 = p__37839;var method = cljs.core.nth.call(null,vec__37841,0,null);var action = cljs.core.nth.call(null,vec__37841,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to37838 = function (p__37839,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to37838__delegate.call(this,p__37839,body);};
form_to37838.cljs$lang$maxFixedArity = 1;
form_to37838.cljs$lang$applyTo = (function (arglist__37842){
var p__37839 = cljs.core.first(arglist__37842);
var body = cljs.core.rest(arglist__37842);
return form_to37838__delegate(p__37839,body);
});
form_to37838.cljs$core$IFn$_invoke$arity$variadic = form_to37838__delegate;
return form_to37838;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37838);
