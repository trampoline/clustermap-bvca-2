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
var G__35358__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__35357 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__35357,0,null);var body = cljs.core.nthnext.call(null,vec__35357,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__35358 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__35358__delegate.call(this,args);};
G__35358.cljs$lang$maxFixedArity = 0;
G__35358.cljs$lang$applyTo = (function (arglist__35359){
var args = cljs.core.seq(arglist__35359);
return G__35358__delegate(args);
});
G__35358.cljs$core$IFn$_invoke$arity$variadic = G__35358__delegate;
return G__35358;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__35364(s__35365){return (new cljs.core.LazySeq(null,(function (){var s__35365__$1 = s__35365;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35365__$1);if(temp__4092__auto__)
{var s__35365__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35365__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35365__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35367 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35366 = 0;while(true){
if((i__35366 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__35366);cljs.core.chunk_append.call(null,b__35367,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__35368 = (i__35366 + 1);
i__35366 = G__35368;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35367),iter__35364.call(null,cljs.core.chunk_rest.call(null,s__35365__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35367),null);
}
} else
{var args = cljs.core.first.call(null,s__35365__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__35364.call(null,cljs.core.rest.call(null,s__35365__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__35369_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__35369_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__35374(s__35375){return (new cljs.core.LazySeq(null,(function (){var s__35375__$1 = s__35375;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35375__$1);if(temp__4092__auto__)
{var s__35375__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35375__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35375__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35377 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35376 = 0;while(true){
if((i__35376 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__35376);cljs.core.chunk_append.call(null,b__35377,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__35378 = (i__35376 + 1);
i__35376 = G__35378;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35377),iter__35374.call(null,cljs.core.chunk_rest.call(null,s__35375__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35377),null);
}
} else
{var style = cljs.core.first.call(null,s__35375__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__35374.call(null,cljs.core.rest.call(null,s__35375__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__35379){
var styles = cljs.core.seq(arglist__35379);
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
sablono.core.link_to35380 = (function() { 
var link_to35380__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to35380 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to35380__delegate.call(this,url,content);};
link_to35380.cljs$lang$maxFixedArity = 1;
link_to35380.cljs$lang$applyTo = (function (arglist__35381){
var url = cljs.core.first(arglist__35381);
var content = cljs.core.rest(arglist__35381);
return link_to35380__delegate(url,content);
});
link_to35380.cljs$core$IFn$_invoke$arity$variadic = link_to35380__delegate;
return link_to35380;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35380);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to35382 = (function() { 
var mail_to35382__delegate = function (e_mail,p__35383){var vec__35385 = p__35383;var content = cljs.core.nth.call(null,vec__35385,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to35382 = function (e_mail,var_args){
var p__35383 = null;if (arguments.length > 1) {
  p__35383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to35382__delegate.call(this,e_mail,p__35383);};
mail_to35382.cljs$lang$maxFixedArity = 1;
mail_to35382.cljs$lang$applyTo = (function (arglist__35386){
var e_mail = cljs.core.first(arglist__35386);
var p__35383 = cljs.core.rest(arglist__35386);
return mail_to35382__delegate(e_mail,p__35383);
});
mail_to35382.cljs$core$IFn$_invoke$arity$variadic = mail_to35382__delegate;
return mail_to35382;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35382);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list35387 = (function unordered_list35387(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__35392(s__35393){return (new cljs.core.LazySeq(null,(function (){var s__35393__$1 = s__35393;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35393__$1);if(temp__4092__auto__)
{var s__35393__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35393__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35393__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35395 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35394 = 0;while(true){
if((i__35394 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__35394);cljs.core.chunk_append.call(null,b__35395,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__35396 = (i__35394 + 1);
i__35394 = G__35396;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35395),iter__35392.call(null,cljs.core.chunk_rest.call(null,s__35393__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35395),null);
}
} else
{var x = cljs.core.first.call(null,s__35393__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__35392.call(null,cljs.core.rest.call(null,s__35393__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35387);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list35397 = (function ordered_list35397(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__35402(s__35403){return (new cljs.core.LazySeq(null,(function (){var s__35403__$1 = s__35403;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35403__$1);if(temp__4092__auto__)
{var s__35403__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35403__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35403__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35405 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35404 = 0;while(true){
if((i__35404 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__35404);cljs.core.chunk_append.call(null,b__35405,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__35406 = (i__35404 + 1);
i__35404 = G__35406;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35405),iter__35402.call(null,cljs.core.chunk_rest.call(null,s__35403__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35405),null);
}
} else
{var x = cljs.core.first.call(null,s__35403__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__35402.call(null,cljs.core.rest.call(null,s__35403__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35397);
/**
* Create an image element.
*/
sablono.core.image35407 = (function() {
var image35407 = null;
var image35407__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image35407__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image35407 = function(src,alt){
switch(arguments.length){
case 1:
return image35407__1.call(this,src);
case 2:
return image35407__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image35407.cljs$core$IFn$_invoke$arity$1 = image35407__1;
image35407.cljs$core$IFn$_invoke$arity$2 = image35407__2;
return image35407;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35407);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__35408_SHARP_,p2__35409_SHARP_){return [cljs.core.str(p1__35408_SHARP_),cljs.core.str("["),cljs.core.str(p2__35409_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__35410_SHARP_,p2__35411_SHARP_){return [cljs.core.str(p1__35410_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35411_SHARP_)].join('');
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
sablono.core.hidden_field35412 = (function() {
var hidden_field35412 = null;
var hidden_field35412__1 = (function (name){return hidden_field35412.call(null,name,null);
});
var hidden_field35412__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field35412 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field35412__1.call(this,name);
case 2:
return hidden_field35412__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field35412.cljs$core$IFn$_invoke$arity$1 = hidden_field35412__1;
hidden_field35412.cljs$core$IFn$_invoke$arity$2 = hidden_field35412__2;
return hidden_field35412;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35412);
/**
* Creates a new text input field.
*/
sablono.core.text_field35413 = (function() {
var text_field35413 = null;
var text_field35413__1 = (function (name){return text_field35413.call(null,name,null);
});
var text_field35413__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field35413 = function(name,value){
switch(arguments.length){
case 1:
return text_field35413__1.call(this,name);
case 2:
return text_field35413__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field35413.cljs$core$IFn$_invoke$arity$1 = text_field35413__1;
text_field35413.cljs$core$IFn$_invoke$arity$2 = text_field35413__2;
return text_field35413;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35413);
/**
* Creates a new password field.
*/
sablono.core.password_field35414 = (function() {
var password_field35414 = null;
var password_field35414__1 = (function (name){return password_field35414.call(null,name,null);
});
var password_field35414__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field35414 = function(name,value){
switch(arguments.length){
case 1:
return password_field35414__1.call(this,name);
case 2:
return password_field35414__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field35414.cljs$core$IFn$_invoke$arity$1 = password_field35414__1;
password_field35414.cljs$core$IFn$_invoke$arity$2 = password_field35414__2;
return password_field35414;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35414);
/**
* Creates a new email input field.
*/
sablono.core.email_field35415 = (function() {
var email_field35415 = null;
var email_field35415__1 = (function (name){return email_field35415.call(null,name,null);
});
var email_field35415__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field35415 = function(name,value){
switch(arguments.length){
case 1:
return email_field35415__1.call(this,name);
case 2:
return email_field35415__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field35415.cljs$core$IFn$_invoke$arity$1 = email_field35415__1;
email_field35415.cljs$core$IFn$_invoke$arity$2 = email_field35415__2;
return email_field35415;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35415);
/**
* Creates a check box.
*/
sablono.core.check_box35416 = (function() {
var check_box35416 = null;
var check_box35416__1 = (function (name){return check_box35416.call(null,name,null);
});
var check_box35416__2 = (function (name,checked_QMARK_){return check_box35416.call(null,name,checked_QMARK_,"true");
});
var check_box35416__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box35416 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box35416__1.call(this,name);
case 2:
return check_box35416__2.call(this,name,checked_QMARK_);
case 3:
return check_box35416__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box35416.cljs$core$IFn$_invoke$arity$1 = check_box35416__1;
check_box35416.cljs$core$IFn$_invoke$arity$2 = check_box35416__2;
check_box35416.cljs$core$IFn$_invoke$arity$3 = check_box35416__3;
return check_box35416;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35416);
/**
* Creates a radio button.
*/
sablono.core.radio_button35417 = (function() {
var radio_button35417 = null;
var radio_button35417__1 = (function (group){return radio_button35417.call(null,group,null);
});
var radio_button35417__2 = (function (group,checked_QMARK_){return radio_button35417.call(null,group,checked_QMARK_,"true");
});
var radio_button35417__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button35417 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button35417__1.call(this,group);
case 2:
return radio_button35417__2.call(this,group,checked_QMARK_);
case 3:
return radio_button35417__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button35417.cljs$core$IFn$_invoke$arity$1 = radio_button35417__1;
radio_button35417.cljs$core$IFn$_invoke$arity$2 = radio_button35417__2;
radio_button35417.cljs$core$IFn$_invoke$arity$3 = radio_button35417__3;
return radio_button35417;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35417);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options35418 = (function() {
var select_options35418 = null;
var select_options35418__1 = (function (coll){return select_options35418.call(null,coll,null);
});
var select_options35418__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__35427(s__35428){return (new cljs.core.LazySeq(null,(function (){var s__35428__$1 = s__35428;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35428__$1);if(temp__4092__auto__)
{var s__35428__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35428__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35428__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35430 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35429 = 0;while(true){
if((i__35429 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__35429);cljs.core.chunk_append.call(null,b__35430,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35433 = x;var text = cljs.core.nth.call(null,vec__35433,0,null);var val = cljs.core.nth.call(null,vec__35433,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options35418.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__35435 = (i__35429 + 1);
i__35429 = G__35435;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35430),iter__35427.call(null,cljs.core.chunk_rest.call(null,s__35428__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35430),null);
}
} else
{var x = cljs.core.first.call(null,s__35428__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35434 = x;var text = cljs.core.nth.call(null,vec__35434,0,null);var val = cljs.core.nth.call(null,vec__35434,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options35418.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__35427.call(null,cljs.core.rest.call(null,s__35428__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options35418 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options35418__1.call(this,coll);
case 2:
return select_options35418__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options35418.cljs$core$IFn$_invoke$arity$1 = select_options35418__1;
select_options35418.cljs$core$IFn$_invoke$arity$2 = select_options35418__2;
return select_options35418;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35418);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down35436 = (function() {
var drop_down35436 = null;
var drop_down35436__2 = (function (name,options){return drop_down35436.call(null,name,options,null);
});
var drop_down35436__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down35436 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down35436__2.call(this,name,options);
case 3:
return drop_down35436__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down35436.cljs$core$IFn$_invoke$arity$2 = drop_down35436__2;
drop_down35436.cljs$core$IFn$_invoke$arity$3 = drop_down35436__3;
return drop_down35436;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down35436);
/**
* Creates a text area element.
*/
sablono.core.text_area35437 = (function() {
var text_area35437 = null;
var text_area35437__1 = (function (name){return text_area35437.call(null,name,null);
});
var text_area35437__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area35437 = function(name,value){
switch(arguments.length){
case 1:
return text_area35437__1.call(this,name);
case 2:
return text_area35437__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area35437.cljs$core$IFn$_invoke$arity$1 = text_area35437__1;
text_area35437.cljs$core$IFn$_invoke$arity$2 = text_area35437__2;
return text_area35437;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area35437);
/**
* Creates a file upload input.
*/
sablono.core.file_upload35438 = (function file_upload35438(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload35438);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label35439 = (function label35439(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label35439);
/**
* Creates a submit button.
*/
sablono.core.submit_button35440 = (function submit_button35440(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button35440);
/**
* Creates a form reset button.
*/
sablono.core.reset_button35441 = (function reset_button35441(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button35441);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to35442 = (function() { 
var form_to35442__delegate = function (p__35443,body){var vec__35445 = p__35443;var method = cljs.core.nth.call(null,vec__35445,0,null);var action = cljs.core.nth.call(null,vec__35445,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to35442 = function (p__35443,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to35442__delegate.call(this,p__35443,body);};
form_to35442.cljs$lang$maxFixedArity = 1;
form_to35442.cljs$lang$applyTo = (function (arglist__35446){
var p__35443 = cljs.core.first(arglist__35446);
var body = cljs.core.rest(arglist__35446);
return form_to35442__delegate(p__35443,body);
});
form_to35442.cljs$core$IFn$_invoke$arity$variadic = form_to35442__delegate;
return form_to35442;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to35442);
