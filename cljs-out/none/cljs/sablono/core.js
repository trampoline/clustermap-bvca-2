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
var G__16008__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16007 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16007,0,null);var body = cljs.core.nthnext.call(null,vec__16007,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16008 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16008__delegate.call(this,args);};
G__16008.cljs$lang$maxFixedArity = 0;
G__16008.cljs$lang$applyTo = (function (arglist__16009){
var args = cljs.core.seq(arglist__16009);
return G__16008__delegate(args);
});
G__16008.cljs$core$IFn$_invoke$arity$variadic = G__16008__delegate;
return G__16008;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__16014(s__16015){return (new cljs.core.LazySeq(null,(function (){var s__16015__$1 = s__16015;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16015__$1);if(temp__4092__auto__)
{var s__16015__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16015__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16015__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16017 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16016 = 0;while(true){
if((i__16016 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__16016);cljs.core.chunk_append.call(null,b__16017,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16018 = (i__16016 + 1);
i__16016 = G__16018;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16017),iter__16014.call(null,cljs.core.chunk_rest.call(null,s__16015__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16017),null);
}
} else
{var args = cljs.core.first.call(null,s__16015__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16014.call(null,cljs.core.rest.call(null,s__16015__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__16019_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__16019_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__16024(s__16025){return (new cljs.core.LazySeq(null,(function (){var s__16025__$1 = s__16025;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16025__$1);if(temp__4092__auto__)
{var s__16025__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16025__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16025__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16027 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16026 = 0;while(true){
if((i__16026 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__16026);cljs.core.chunk_append.call(null,b__16027,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16028 = (i__16026 + 1);
i__16026 = G__16028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16027),iter__16024.call(null,cljs.core.chunk_rest.call(null,s__16025__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16027),null);
}
} else
{var style = cljs.core.first.call(null,s__16025__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16024.call(null,cljs.core.rest.call(null,s__16025__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__16029){
var styles = cljs.core.seq(arglist__16029);
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
sablono.core.link_to16030 = (function() { 
var link_to16030__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16030 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16030__delegate.call(this,url,content);};
link_to16030.cljs$lang$maxFixedArity = 1;
link_to16030.cljs$lang$applyTo = (function (arglist__16031){
var url = cljs.core.first(arglist__16031);
var content = cljs.core.rest(arglist__16031);
return link_to16030__delegate(url,content);
});
link_to16030.cljs$core$IFn$_invoke$arity$variadic = link_to16030__delegate;
return link_to16030;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16030);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16032 = (function() { 
var mail_to16032__delegate = function (e_mail,p__16033){var vec__16035 = p__16033;var content = cljs.core.nth.call(null,vec__16035,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16032 = function (e_mail,var_args){
var p__16033 = null;if (arguments.length > 1) {
  p__16033 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16032__delegate.call(this,e_mail,p__16033);};
mail_to16032.cljs$lang$maxFixedArity = 1;
mail_to16032.cljs$lang$applyTo = (function (arglist__16036){
var e_mail = cljs.core.first(arglist__16036);
var p__16033 = cljs.core.rest(arglist__16036);
return mail_to16032__delegate(e_mail,p__16033);
});
mail_to16032.cljs$core$IFn$_invoke$arity$variadic = mail_to16032__delegate;
return mail_to16032;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16032);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16037 = (function unordered_list16037(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__16042(s__16043){return (new cljs.core.LazySeq(null,(function (){var s__16043__$1 = s__16043;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16043__$1);if(temp__4092__auto__)
{var s__16043__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16043__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16043__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16045 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16044 = 0;while(true){
if((i__16044 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16044);cljs.core.chunk_append.call(null,b__16045,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16046 = (i__16044 + 1);
i__16044 = G__16046;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16045),iter__16042.call(null,cljs.core.chunk_rest.call(null,s__16043__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16045),null);
}
} else
{var x = cljs.core.first.call(null,s__16043__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16042.call(null,cljs.core.rest.call(null,s__16043__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16037);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16047 = (function ordered_list16047(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__16052(s__16053){return (new cljs.core.LazySeq(null,(function (){var s__16053__$1 = s__16053;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16053__$1);if(temp__4092__auto__)
{var s__16053__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16053__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16053__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16055 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16054 = 0;while(true){
if((i__16054 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16054);cljs.core.chunk_append.call(null,b__16055,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16056 = (i__16054 + 1);
i__16054 = G__16056;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16055),iter__16052.call(null,cljs.core.chunk_rest.call(null,s__16053__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16055),null);
}
} else
{var x = cljs.core.first.call(null,s__16053__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16052.call(null,cljs.core.rest.call(null,s__16053__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16047);
/**
* Create an image element.
*/
sablono.core.image16057 = (function() {
var image16057 = null;
var image16057__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16057__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16057 = function(src,alt){
switch(arguments.length){
case 1:
return image16057__1.call(this,src);
case 2:
return image16057__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16057.cljs$core$IFn$_invoke$arity$1 = image16057__1;
image16057.cljs$core$IFn$_invoke$arity$2 = image16057__2;
return image16057;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16057);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16058_SHARP_,p2__16059_SHARP_){return [cljs.core.str(p1__16058_SHARP_),cljs.core.str("["),cljs.core.str(p2__16059_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__16060_SHARP_,p2__16061_SHARP_){return [cljs.core.str(p1__16060_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16061_SHARP_)].join('');
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
sablono.core.hidden_field16062 = (function() {
var hidden_field16062 = null;
var hidden_field16062__1 = (function (name){return hidden_field16062.call(null,name,null);
});
var hidden_field16062__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field16062 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field16062__1.call(this,name);
case 2:
return hidden_field16062__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16062.cljs$core$IFn$_invoke$arity$1 = hidden_field16062__1;
hidden_field16062.cljs$core$IFn$_invoke$arity$2 = hidden_field16062__2;
return hidden_field16062;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16062);
/**
* Creates a new text input field.
*/
sablono.core.text_field16063 = (function() {
var text_field16063 = null;
var text_field16063__1 = (function (name){return text_field16063.call(null,name,null);
});
var text_field16063__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field16063 = function(name,value){
switch(arguments.length){
case 1:
return text_field16063__1.call(this,name);
case 2:
return text_field16063__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16063.cljs$core$IFn$_invoke$arity$1 = text_field16063__1;
text_field16063.cljs$core$IFn$_invoke$arity$2 = text_field16063__2;
return text_field16063;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16063);
/**
* Creates a new password field.
*/
sablono.core.password_field16064 = (function() {
var password_field16064 = null;
var password_field16064__1 = (function (name){return password_field16064.call(null,name,null);
});
var password_field16064__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field16064 = function(name,value){
switch(arguments.length){
case 1:
return password_field16064__1.call(this,name);
case 2:
return password_field16064__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16064.cljs$core$IFn$_invoke$arity$1 = password_field16064__1;
password_field16064.cljs$core$IFn$_invoke$arity$2 = password_field16064__2;
return password_field16064;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16064);
/**
* Creates a new email input field.
*/
sablono.core.email_field16065 = (function() {
var email_field16065 = null;
var email_field16065__1 = (function (name){return email_field16065.call(null,name,null);
});
var email_field16065__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field16065 = function(name,value){
switch(arguments.length){
case 1:
return email_field16065__1.call(this,name);
case 2:
return email_field16065__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16065.cljs$core$IFn$_invoke$arity$1 = email_field16065__1;
email_field16065.cljs$core$IFn$_invoke$arity$2 = email_field16065__2;
return email_field16065;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16065);
/**
* Creates a check box.
*/
sablono.core.check_box16066 = (function() {
var check_box16066 = null;
var check_box16066__1 = (function (name){return check_box16066.call(null,name,null);
});
var check_box16066__2 = (function (name,checked_QMARK_){return check_box16066.call(null,name,checked_QMARK_,"true");
});
var check_box16066__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box16066 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16066__1.call(this,name);
case 2:
return check_box16066__2.call(this,name,checked_QMARK_);
case 3:
return check_box16066__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16066.cljs$core$IFn$_invoke$arity$1 = check_box16066__1;
check_box16066.cljs$core$IFn$_invoke$arity$2 = check_box16066__2;
check_box16066.cljs$core$IFn$_invoke$arity$3 = check_box16066__3;
return check_box16066;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16066);
/**
* Creates a radio button.
*/
sablono.core.radio_button16067 = (function() {
var radio_button16067 = null;
var radio_button16067__1 = (function (group){return radio_button16067.call(null,group,null);
});
var radio_button16067__2 = (function (group,checked_QMARK_){return radio_button16067.call(null,group,checked_QMARK_,"true");
});
var radio_button16067__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button16067 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16067__1.call(this,group);
case 2:
return radio_button16067__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16067__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16067.cljs$core$IFn$_invoke$arity$1 = radio_button16067__1;
radio_button16067.cljs$core$IFn$_invoke$arity$2 = radio_button16067__2;
radio_button16067.cljs$core$IFn$_invoke$arity$3 = radio_button16067__3;
return radio_button16067;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16067);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16068 = (function() {
var select_options16068 = null;
var select_options16068__1 = (function (coll){return select_options16068.call(null,coll,null);
});
var select_options16068__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__16077(s__16078){return (new cljs.core.LazySeq(null,(function (){var s__16078__$1 = s__16078;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16078__$1);if(temp__4092__auto__)
{var s__16078__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16078__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16078__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16080 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16079 = 0;while(true){
if((i__16079 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16079);cljs.core.chunk_append.call(null,b__16080,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16083 = x;var text = cljs.core.nth.call(null,vec__16083,0,null);var val = cljs.core.nth.call(null,vec__16083,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16068.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__16085 = (i__16079 + 1);
i__16079 = G__16085;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16080),iter__16077.call(null,cljs.core.chunk_rest.call(null,s__16078__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16080),null);
}
} else
{var x = cljs.core.first.call(null,s__16078__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16084 = x;var text = cljs.core.nth.call(null,vec__16084,0,null);var val = cljs.core.nth.call(null,vec__16084,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16068.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16077.call(null,cljs.core.rest.call(null,s__16078__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options16068 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16068__1.call(this,coll);
case 2:
return select_options16068__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16068.cljs$core$IFn$_invoke$arity$1 = select_options16068__1;
select_options16068.cljs$core$IFn$_invoke$arity$2 = select_options16068__2;
return select_options16068;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16068);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16086 = (function() {
var drop_down16086 = null;
var drop_down16086__2 = (function (name,options){return drop_down16086.call(null,name,options,null);
});
var drop_down16086__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16086 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16086__2.call(this,name,options);
case 3:
return drop_down16086__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16086.cljs$core$IFn$_invoke$arity$2 = drop_down16086__2;
drop_down16086.cljs$core$IFn$_invoke$arity$3 = drop_down16086__3;
return drop_down16086;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16086);
/**
* Creates a text area element.
*/
sablono.core.text_area16087 = (function() {
var text_area16087 = null;
var text_area16087__1 = (function (name){return text_area16087.call(null,name,null);
});
var text_area16087__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area16087 = function(name,value){
switch(arguments.length){
case 1:
return text_area16087__1.call(this,name);
case 2:
return text_area16087__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16087.cljs$core$IFn$_invoke$arity$1 = text_area16087__1;
text_area16087.cljs$core$IFn$_invoke$arity$2 = text_area16087__2;
return text_area16087;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16087);
/**
* Creates a file upload input.
*/
sablono.core.file_upload16088 = (function file_upload16088(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload16088);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16089 = (function label16089(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16089);
/**
* Creates a submit button.
*/
sablono.core.submit_button16090 = (function submit_button16090(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16090);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16091 = (function reset_button16091(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16091);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16092 = (function() { 
var form_to16092__delegate = function (p__16093,body){var vec__16095 = p__16093;var method = cljs.core.nth.call(null,vec__16095,0,null);var action = cljs.core.nth.call(null,vec__16095,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16092 = function (p__16093,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16092__delegate.call(this,p__16093,body);};
form_to16092.cljs$lang$maxFixedArity = 1;
form_to16092.cljs$lang$applyTo = (function (arglist__16096){
var p__16093 = cljs.core.first(arglist__16096);
var body = cljs.core.rest(arglist__16096);
return form_to16092__delegate(p__16093,body);
});
form_to16092.cljs$core$IFn$_invoke$arity$variadic = form_to16092__delegate;
return form_to16092;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16092);

//# sourceMappingURL=core.js.map