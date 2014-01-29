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
var G__15984__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15983 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15983,0,null);var body = cljs.core.nthnext.call(null,vec__15983,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15984 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15984__delegate.call(this,args);};
G__15984.cljs$lang$maxFixedArity = 0;
G__15984.cljs$lang$applyTo = (function (arglist__15985){
var args = cljs.core.seq(arglist__15985);
return G__15984__delegate(args);
});
G__15984.cljs$core$IFn$_invoke$arity$variadic = G__15984__delegate;
return G__15984;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15990(s__15991){return (new cljs.core.LazySeq(null,(function (){var s__15991__$1 = s__15991;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15991__$1);if(temp__4092__auto__)
{var s__15991__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15991__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15991__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15993 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15992 = 0;while(true){
if((i__15992 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15992);cljs.core.chunk_append.call(null,b__15993,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15994 = (i__15992 + 1);
i__15992 = G__15994;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15993),iter__15990.call(null,cljs.core.chunk_rest.call(null,s__15991__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15993),null);
}
} else
{var args = cljs.core.first.call(null,s__15991__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15990.call(null,cljs.core.rest.call(null,s__15991__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__15995_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__15995_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__16000(s__16001){return (new cljs.core.LazySeq(null,(function (){var s__16001__$1 = s__16001;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16001__$1);if(temp__4092__auto__)
{var s__16001__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16001__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16001__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16003 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16002 = 0;while(true){
if((i__16002 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__16002);cljs.core.chunk_append.call(null,b__16003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16004 = (i__16002 + 1);
i__16002 = G__16004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16003),iter__16000.call(null,cljs.core.chunk_rest.call(null,s__16001__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16003),null);
}
} else
{var style = cljs.core.first.call(null,s__16001__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16000.call(null,cljs.core.rest.call(null,s__16001__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__16005){
var styles = cljs.core.seq(arglist__16005);
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
sablono.core.link_to16006 = (function() { 
var link_to16006__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16006 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16006__delegate.call(this,url,content);};
link_to16006.cljs$lang$maxFixedArity = 1;
link_to16006.cljs$lang$applyTo = (function (arglist__16007){
var url = cljs.core.first(arglist__16007);
var content = cljs.core.rest(arglist__16007);
return link_to16006__delegate(url,content);
});
link_to16006.cljs$core$IFn$_invoke$arity$variadic = link_to16006__delegate;
return link_to16006;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16006);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16008 = (function() { 
var mail_to16008__delegate = function (e_mail,p__16009){var vec__16011 = p__16009;var content = cljs.core.nth.call(null,vec__16011,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16008 = function (e_mail,var_args){
var p__16009 = null;if (arguments.length > 1) {
  p__16009 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16008__delegate.call(this,e_mail,p__16009);};
mail_to16008.cljs$lang$maxFixedArity = 1;
mail_to16008.cljs$lang$applyTo = (function (arglist__16012){
var e_mail = cljs.core.first(arglist__16012);
var p__16009 = cljs.core.rest(arglist__16012);
return mail_to16008__delegate(e_mail,p__16009);
});
mail_to16008.cljs$core$IFn$_invoke$arity$variadic = mail_to16008__delegate;
return mail_to16008;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16008);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16013 = (function unordered_list16013(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__16018(s__16019){return (new cljs.core.LazySeq(null,(function (){var s__16019__$1 = s__16019;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16019__$1);if(temp__4092__auto__)
{var s__16019__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16019__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16019__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16021 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16020 = 0;while(true){
if((i__16020 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16020);cljs.core.chunk_append.call(null,b__16021,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16022 = (i__16020 + 1);
i__16020 = G__16022;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16021),iter__16018.call(null,cljs.core.chunk_rest.call(null,s__16019__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16021),null);
}
} else
{var x = cljs.core.first.call(null,s__16019__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16018.call(null,cljs.core.rest.call(null,s__16019__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16013);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16023 = (function ordered_list16023(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__16028(s__16029){return (new cljs.core.LazySeq(null,(function (){var s__16029__$1 = s__16029;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16029__$1);if(temp__4092__auto__)
{var s__16029__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16029__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16029__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16031 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16030 = 0;while(true){
if((i__16030 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16030);cljs.core.chunk_append.call(null,b__16031,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16032 = (i__16030 + 1);
i__16030 = G__16032;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16031),iter__16028.call(null,cljs.core.chunk_rest.call(null,s__16029__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16031),null);
}
} else
{var x = cljs.core.first.call(null,s__16029__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16028.call(null,cljs.core.rest.call(null,s__16029__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16023);
/**
* Create an image element.
*/
sablono.core.image16033 = (function() {
var image16033 = null;
var image16033__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16033__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16033 = function(src,alt){
switch(arguments.length){
case 1:
return image16033__1.call(this,src);
case 2:
return image16033__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16033.cljs$core$IFn$_invoke$arity$1 = image16033__1;
image16033.cljs$core$IFn$_invoke$arity$2 = image16033__2;
return image16033;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16033);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16034_SHARP_,p2__16035_SHARP_){return [cljs.core.str(p1__16034_SHARP_),cljs.core.str("["),cljs.core.str(p2__16035_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__16036_SHARP_,p2__16037_SHARP_){return [cljs.core.str(p1__16036_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16037_SHARP_)].join('');
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
sablono.core.hidden_field16038 = (function() {
var hidden_field16038 = null;
var hidden_field16038__1 = (function (name){return hidden_field16038.call(null,name,null);
});
var hidden_field16038__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field16038 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field16038__1.call(this,name);
case 2:
return hidden_field16038__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16038.cljs$core$IFn$_invoke$arity$1 = hidden_field16038__1;
hidden_field16038.cljs$core$IFn$_invoke$arity$2 = hidden_field16038__2;
return hidden_field16038;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16038);
/**
* Creates a new text input field.
*/
sablono.core.text_field16039 = (function() {
var text_field16039 = null;
var text_field16039__1 = (function (name){return text_field16039.call(null,name,null);
});
var text_field16039__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field16039 = function(name,value){
switch(arguments.length){
case 1:
return text_field16039__1.call(this,name);
case 2:
return text_field16039__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16039.cljs$core$IFn$_invoke$arity$1 = text_field16039__1;
text_field16039.cljs$core$IFn$_invoke$arity$2 = text_field16039__2;
return text_field16039;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16039);
/**
* Creates a new password field.
*/
sablono.core.password_field16040 = (function() {
var password_field16040 = null;
var password_field16040__1 = (function (name){return password_field16040.call(null,name,null);
});
var password_field16040__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field16040 = function(name,value){
switch(arguments.length){
case 1:
return password_field16040__1.call(this,name);
case 2:
return password_field16040__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16040.cljs$core$IFn$_invoke$arity$1 = password_field16040__1;
password_field16040.cljs$core$IFn$_invoke$arity$2 = password_field16040__2;
return password_field16040;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16040);
/**
* Creates a new email input field.
*/
sablono.core.email_field16041 = (function() {
var email_field16041 = null;
var email_field16041__1 = (function (name){return email_field16041.call(null,name,null);
});
var email_field16041__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field16041 = function(name,value){
switch(arguments.length){
case 1:
return email_field16041__1.call(this,name);
case 2:
return email_field16041__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16041.cljs$core$IFn$_invoke$arity$1 = email_field16041__1;
email_field16041.cljs$core$IFn$_invoke$arity$2 = email_field16041__2;
return email_field16041;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16041);
/**
* Creates a check box.
*/
sablono.core.check_box16042 = (function() {
var check_box16042 = null;
var check_box16042__1 = (function (name){return check_box16042.call(null,name,null);
});
var check_box16042__2 = (function (name,checked_QMARK_){return check_box16042.call(null,name,checked_QMARK_,"true");
});
var check_box16042__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box16042 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16042__1.call(this,name);
case 2:
return check_box16042__2.call(this,name,checked_QMARK_);
case 3:
return check_box16042__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16042.cljs$core$IFn$_invoke$arity$1 = check_box16042__1;
check_box16042.cljs$core$IFn$_invoke$arity$2 = check_box16042__2;
check_box16042.cljs$core$IFn$_invoke$arity$3 = check_box16042__3;
return check_box16042;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16042);
/**
* Creates a radio button.
*/
sablono.core.radio_button16043 = (function() {
var radio_button16043 = null;
var radio_button16043__1 = (function (group){return radio_button16043.call(null,group,null);
});
var radio_button16043__2 = (function (group,checked_QMARK_){return radio_button16043.call(null,group,checked_QMARK_,"true");
});
var radio_button16043__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button16043 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16043__1.call(this,group);
case 2:
return radio_button16043__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16043__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16043.cljs$core$IFn$_invoke$arity$1 = radio_button16043__1;
radio_button16043.cljs$core$IFn$_invoke$arity$2 = radio_button16043__2;
radio_button16043.cljs$core$IFn$_invoke$arity$3 = radio_button16043__3;
return radio_button16043;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16043);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16044 = (function() {
var select_options16044 = null;
var select_options16044__1 = (function (coll){return select_options16044.call(null,coll,null);
});
var select_options16044__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__16053(s__16054){return (new cljs.core.LazySeq(null,(function (){var s__16054__$1 = s__16054;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16054__$1);if(temp__4092__auto__)
{var s__16054__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16054__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16054__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16056 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16055 = 0;while(true){
if((i__16055 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16055);cljs.core.chunk_append.call(null,b__16056,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16059 = x;var text = cljs.core.nth.call(null,vec__16059,0,null);var val = cljs.core.nth.call(null,vec__16059,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16044.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__16061 = (i__16055 + 1);
i__16055 = G__16061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16056),iter__16053.call(null,cljs.core.chunk_rest.call(null,s__16054__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16056),null);
}
} else
{var x = cljs.core.first.call(null,s__16054__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16060 = x;var text = cljs.core.nth.call(null,vec__16060,0,null);var val = cljs.core.nth.call(null,vec__16060,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16044.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16053.call(null,cljs.core.rest.call(null,s__16054__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options16044 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16044__1.call(this,coll);
case 2:
return select_options16044__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16044.cljs$core$IFn$_invoke$arity$1 = select_options16044__1;
select_options16044.cljs$core$IFn$_invoke$arity$2 = select_options16044__2;
return select_options16044;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16044);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16062 = (function() {
var drop_down16062 = null;
var drop_down16062__2 = (function (name,options){return drop_down16062.call(null,name,options,null);
});
var drop_down16062__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16062 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16062__2.call(this,name,options);
case 3:
return drop_down16062__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16062.cljs$core$IFn$_invoke$arity$2 = drop_down16062__2;
drop_down16062.cljs$core$IFn$_invoke$arity$3 = drop_down16062__3;
return drop_down16062;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16062);
/**
* Creates a text area element.
*/
sablono.core.text_area16063 = (function() {
var text_area16063 = null;
var text_area16063__1 = (function (name){return text_area16063.call(null,name,null);
});
var text_area16063__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area16063 = function(name,value){
switch(arguments.length){
case 1:
return text_area16063__1.call(this,name);
case 2:
return text_area16063__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16063.cljs$core$IFn$_invoke$arity$1 = text_area16063__1;
text_area16063.cljs$core$IFn$_invoke$arity$2 = text_area16063__2;
return text_area16063;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16063);
/**
* Creates a file upload input.
*/
sablono.core.file_upload16064 = (function file_upload16064(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload16064);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16065 = (function label16065(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16065);
/**
* Creates a submit button.
*/
sablono.core.submit_button16066 = (function submit_button16066(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16066);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16067 = (function reset_button16067(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16067);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16068 = (function() { 
var form_to16068__delegate = function (p__16069,body){var vec__16071 = p__16069;var method = cljs.core.nth.call(null,vec__16071,0,null);var action = cljs.core.nth.call(null,vec__16071,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16068 = function (p__16069,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16068__delegate.call(this,p__16069,body);};
form_to16068.cljs$lang$maxFixedArity = 1;
form_to16068.cljs$lang$applyTo = (function (arglist__16072){
var p__16069 = cljs.core.first(arglist__16072);
var body = cljs.core.rest(arglist__16072);
return form_to16068__delegate(p__16069,body);
});
form_to16068.cljs$core$IFn$_invoke$arity$variadic = form_to16068__delegate;
return form_to16068;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16068);

//# sourceMappingURL=core.js.map