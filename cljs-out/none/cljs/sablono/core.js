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
var G__16152__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16151 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16151,0,null);var body = cljs.core.nthnext.call(null,vec__16151,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16152 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16152__delegate.call(this,args);};
G__16152.cljs$lang$maxFixedArity = 0;
G__16152.cljs$lang$applyTo = (function (arglist__16153){
var args = cljs.core.seq(arglist__16153);
return G__16152__delegate(args);
});
G__16152.cljs$core$IFn$_invoke$arity$variadic = G__16152__delegate;
return G__16152;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__16158(s__16159){return (new cljs.core.LazySeq(null,(function (){var s__16159__$1 = s__16159;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16159__$1);if(temp__4092__auto__)
{var s__16159__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16159__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16159__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16161 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16160 = 0;while(true){
if((i__16160 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__16160);cljs.core.chunk_append.call(null,b__16161,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16162 = (i__16160 + 1);
i__16160 = G__16162;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16161),iter__16158.call(null,cljs.core.chunk_rest.call(null,s__16159__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16161),null);
}
} else
{var args = cljs.core.first.call(null,s__16159__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16158.call(null,cljs.core.rest.call(null,s__16159__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__16163_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__16163_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__16168(s__16169){return (new cljs.core.LazySeq(null,(function (){var s__16169__$1 = s__16169;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16169__$1);if(temp__4092__auto__)
{var s__16169__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16169__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16169__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16171 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16170 = 0;while(true){
if((i__16170 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__16170);cljs.core.chunk_append.call(null,b__16171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16172 = (i__16170 + 1);
i__16170 = G__16172;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16171),iter__16168.call(null,cljs.core.chunk_rest.call(null,s__16169__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16171),null);
}
} else
{var style = cljs.core.first.call(null,s__16169__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16168.call(null,cljs.core.rest.call(null,s__16169__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__16173){
var styles = cljs.core.seq(arglist__16173);
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
sablono.core.link_to16174 = (function() { 
var link_to16174__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16174 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16174__delegate.call(this,url,content);};
link_to16174.cljs$lang$maxFixedArity = 1;
link_to16174.cljs$lang$applyTo = (function (arglist__16175){
var url = cljs.core.first(arglist__16175);
var content = cljs.core.rest(arglist__16175);
return link_to16174__delegate(url,content);
});
link_to16174.cljs$core$IFn$_invoke$arity$variadic = link_to16174__delegate;
return link_to16174;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16174);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16176 = (function() { 
var mail_to16176__delegate = function (e_mail,p__16177){var vec__16179 = p__16177;var content = cljs.core.nth.call(null,vec__16179,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16176 = function (e_mail,var_args){
var p__16177 = null;if (arguments.length > 1) {
  p__16177 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16176__delegate.call(this,e_mail,p__16177);};
mail_to16176.cljs$lang$maxFixedArity = 1;
mail_to16176.cljs$lang$applyTo = (function (arglist__16180){
var e_mail = cljs.core.first(arglist__16180);
var p__16177 = cljs.core.rest(arglist__16180);
return mail_to16176__delegate(e_mail,p__16177);
});
mail_to16176.cljs$core$IFn$_invoke$arity$variadic = mail_to16176__delegate;
return mail_to16176;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16176);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16181 = (function unordered_list16181(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__16186(s__16187){return (new cljs.core.LazySeq(null,(function (){var s__16187__$1 = s__16187;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16187__$1);if(temp__4092__auto__)
{var s__16187__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16187__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16187__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16189 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16188 = 0;while(true){
if((i__16188 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16188);cljs.core.chunk_append.call(null,b__16189,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16190 = (i__16188 + 1);
i__16188 = G__16190;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16189),iter__16186.call(null,cljs.core.chunk_rest.call(null,s__16187__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16189),null);
}
} else
{var x = cljs.core.first.call(null,s__16187__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16186.call(null,cljs.core.rest.call(null,s__16187__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16181);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16191 = (function ordered_list16191(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__16196(s__16197){return (new cljs.core.LazySeq(null,(function (){var s__16197__$1 = s__16197;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16197__$1);if(temp__4092__auto__)
{var s__16197__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16197__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16197__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16199 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16198 = 0;while(true){
if((i__16198 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16198);cljs.core.chunk_append.call(null,b__16199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16200 = (i__16198 + 1);
i__16198 = G__16200;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16199),iter__16196.call(null,cljs.core.chunk_rest.call(null,s__16197__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16199),null);
}
} else
{var x = cljs.core.first.call(null,s__16197__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16196.call(null,cljs.core.rest.call(null,s__16197__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16191);
/**
* Create an image element.
*/
sablono.core.image16201 = (function() {
var image16201 = null;
var image16201__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16201__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16201 = function(src,alt){
switch(arguments.length){
case 1:
return image16201__1.call(this,src);
case 2:
return image16201__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16201.cljs$core$IFn$_invoke$arity$1 = image16201__1;
image16201.cljs$core$IFn$_invoke$arity$2 = image16201__2;
return image16201;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16201);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16202_SHARP_,p2__16203_SHARP_){return [cljs.core.str(p1__16202_SHARP_),cljs.core.str("["),cljs.core.str(p2__16203_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__16204_SHARP_,p2__16205_SHARP_){return [cljs.core.str(p1__16204_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16205_SHARP_)].join('');
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
sablono.core.hidden_field16206 = (function() {
var hidden_field16206 = null;
var hidden_field16206__1 = (function (name){return hidden_field16206.call(null,name,null);
});
var hidden_field16206__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field16206 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field16206__1.call(this,name);
case 2:
return hidden_field16206__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16206.cljs$core$IFn$_invoke$arity$1 = hidden_field16206__1;
hidden_field16206.cljs$core$IFn$_invoke$arity$2 = hidden_field16206__2;
return hidden_field16206;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16206);
/**
* Creates a new text input field.
*/
sablono.core.text_field16207 = (function() {
var text_field16207 = null;
var text_field16207__1 = (function (name){return text_field16207.call(null,name,null);
});
var text_field16207__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field16207 = function(name,value){
switch(arguments.length){
case 1:
return text_field16207__1.call(this,name);
case 2:
return text_field16207__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16207.cljs$core$IFn$_invoke$arity$1 = text_field16207__1;
text_field16207.cljs$core$IFn$_invoke$arity$2 = text_field16207__2;
return text_field16207;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16207);
/**
* Creates a new password field.
*/
sablono.core.password_field16208 = (function() {
var password_field16208 = null;
var password_field16208__1 = (function (name){return password_field16208.call(null,name,null);
});
var password_field16208__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field16208 = function(name,value){
switch(arguments.length){
case 1:
return password_field16208__1.call(this,name);
case 2:
return password_field16208__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16208.cljs$core$IFn$_invoke$arity$1 = password_field16208__1;
password_field16208.cljs$core$IFn$_invoke$arity$2 = password_field16208__2;
return password_field16208;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16208);
/**
* Creates a new email input field.
*/
sablono.core.email_field16209 = (function() {
var email_field16209 = null;
var email_field16209__1 = (function (name){return email_field16209.call(null,name,null);
});
var email_field16209__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field16209 = function(name,value){
switch(arguments.length){
case 1:
return email_field16209__1.call(this,name);
case 2:
return email_field16209__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16209.cljs$core$IFn$_invoke$arity$1 = email_field16209__1;
email_field16209.cljs$core$IFn$_invoke$arity$2 = email_field16209__2;
return email_field16209;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16209);
/**
* Creates a check box.
*/
sablono.core.check_box16210 = (function() {
var check_box16210 = null;
var check_box16210__1 = (function (name){return check_box16210.call(null,name,null);
});
var check_box16210__2 = (function (name,checked_QMARK_){return check_box16210.call(null,name,checked_QMARK_,"true");
});
var check_box16210__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box16210 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16210__1.call(this,name);
case 2:
return check_box16210__2.call(this,name,checked_QMARK_);
case 3:
return check_box16210__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16210.cljs$core$IFn$_invoke$arity$1 = check_box16210__1;
check_box16210.cljs$core$IFn$_invoke$arity$2 = check_box16210__2;
check_box16210.cljs$core$IFn$_invoke$arity$3 = check_box16210__3;
return check_box16210;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16210);
/**
* Creates a radio button.
*/
sablono.core.radio_button16211 = (function() {
var radio_button16211 = null;
var radio_button16211__1 = (function (group){return radio_button16211.call(null,group,null);
});
var radio_button16211__2 = (function (group,checked_QMARK_){return radio_button16211.call(null,group,checked_QMARK_,"true");
});
var radio_button16211__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button16211 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16211__1.call(this,group);
case 2:
return radio_button16211__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16211__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16211.cljs$core$IFn$_invoke$arity$1 = radio_button16211__1;
radio_button16211.cljs$core$IFn$_invoke$arity$2 = radio_button16211__2;
radio_button16211.cljs$core$IFn$_invoke$arity$3 = radio_button16211__3;
return radio_button16211;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16211);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16212 = (function() {
var select_options16212 = null;
var select_options16212__1 = (function (coll){return select_options16212.call(null,coll,null);
});
var select_options16212__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__16221(s__16222){return (new cljs.core.LazySeq(null,(function (){var s__16222__$1 = s__16222;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16222__$1);if(temp__4092__auto__)
{var s__16222__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16222__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16222__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16224 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16223 = 0;while(true){
if((i__16223 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16223);cljs.core.chunk_append.call(null,b__16224,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16227 = x;var text = cljs.core.nth.call(null,vec__16227,0,null);var val = cljs.core.nth.call(null,vec__16227,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16212.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__16229 = (i__16223 + 1);
i__16223 = G__16229;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16224),iter__16221.call(null,cljs.core.chunk_rest.call(null,s__16222__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16224),null);
}
} else
{var x = cljs.core.first.call(null,s__16222__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16228 = x;var text = cljs.core.nth.call(null,vec__16228,0,null);var val = cljs.core.nth.call(null,vec__16228,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16212.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16221.call(null,cljs.core.rest.call(null,s__16222__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options16212 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16212__1.call(this,coll);
case 2:
return select_options16212__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16212.cljs$core$IFn$_invoke$arity$1 = select_options16212__1;
select_options16212.cljs$core$IFn$_invoke$arity$2 = select_options16212__2;
return select_options16212;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16212);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16230 = (function() {
var drop_down16230 = null;
var drop_down16230__2 = (function (name,options){return drop_down16230.call(null,name,options,null);
});
var drop_down16230__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16230 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16230__2.call(this,name,options);
case 3:
return drop_down16230__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16230.cljs$core$IFn$_invoke$arity$2 = drop_down16230__2;
drop_down16230.cljs$core$IFn$_invoke$arity$3 = drop_down16230__3;
return drop_down16230;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16230);
/**
* Creates a text area element.
*/
sablono.core.text_area16231 = (function() {
var text_area16231 = null;
var text_area16231__1 = (function (name){return text_area16231.call(null,name,null);
});
var text_area16231__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area16231 = function(name,value){
switch(arguments.length){
case 1:
return text_area16231__1.call(this,name);
case 2:
return text_area16231__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16231.cljs$core$IFn$_invoke$arity$1 = text_area16231__1;
text_area16231.cljs$core$IFn$_invoke$arity$2 = text_area16231__2;
return text_area16231;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16231);
/**
* Creates a file upload input.
*/
sablono.core.file_upload16232 = (function file_upload16232(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload16232);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16233 = (function label16233(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16233);
/**
* Creates a submit button.
*/
sablono.core.submit_button16234 = (function submit_button16234(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16234);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16235 = (function reset_button16235(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16235);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16236 = (function() { 
var form_to16236__delegate = function (p__16237,body){var vec__16239 = p__16237;var method = cljs.core.nth.call(null,vec__16239,0,null);var action = cljs.core.nth.call(null,vec__16239,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16236 = function (p__16237,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16236__delegate.call(this,p__16237,body);};
form_to16236.cljs$lang$maxFixedArity = 1;
form_to16236.cljs$lang$applyTo = (function (arglist__16240){
var p__16237 = cljs.core.first(arglist__16240);
var body = cljs.core.rest(arglist__16240);
return form_to16236__delegate(p__16237,body);
});
form_to16236.cljs$core$IFn$_invoke$arity$variadic = form_to16236__delegate;
return form_to16236;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16236);

//# sourceMappingURL=core.js.map