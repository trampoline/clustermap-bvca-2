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
var G__35057__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__35056 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__35056,0,null);var body = cljs.core.nthnext.call(null,vec__35056,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__35057 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__35057__delegate.call(this,args);};
G__35057.cljs$lang$maxFixedArity = 0;
G__35057.cljs$lang$applyTo = (function (arglist__35058){
var args = cljs.core.seq(arglist__35058);
return G__35057__delegate(args);
});
G__35057.cljs$core$IFn$_invoke$arity$variadic = G__35057__delegate;
return G__35057;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__35063(s__35064){return (new cljs.core.LazySeq(null,(function (){var s__35064__$1 = s__35064;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35064__$1);if(temp__4092__auto__)
{var s__35064__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35064__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35064__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35066 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35065 = 0;while(true){
if((i__35065 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__35065);cljs.core.chunk_append.call(null,b__35066,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__35067 = (i__35065 + 1);
i__35065 = G__35067;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35066),iter__35063.call(null,cljs.core.chunk_rest.call(null,s__35064__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35066),null);
}
} else
{var args = cljs.core.first.call(null,s__35064__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__35063.call(null,cljs.core.rest.call(null,s__35064__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__35068_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__35068_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__35073(s__35074){return (new cljs.core.LazySeq(null,(function (){var s__35074__$1 = s__35074;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35074__$1);if(temp__4092__auto__)
{var s__35074__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35074__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35074__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35076 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35075 = 0;while(true){
if((i__35075 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__35075);cljs.core.chunk_append.call(null,b__35076,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__35077 = (i__35075 + 1);
i__35075 = G__35077;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35076),iter__35073.call(null,cljs.core.chunk_rest.call(null,s__35074__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35076),null);
}
} else
{var style = cljs.core.first.call(null,s__35074__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__35073.call(null,cljs.core.rest.call(null,s__35074__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__35078){
var styles = cljs.core.seq(arglist__35078);
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
sablono.core.link_to35079 = (function() { 
var link_to35079__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to35079 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to35079__delegate.call(this,url,content);};
link_to35079.cljs$lang$maxFixedArity = 1;
link_to35079.cljs$lang$applyTo = (function (arglist__35080){
var url = cljs.core.first(arglist__35080);
var content = cljs.core.rest(arglist__35080);
return link_to35079__delegate(url,content);
});
link_to35079.cljs$core$IFn$_invoke$arity$variadic = link_to35079__delegate;
return link_to35079;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35079);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to35081 = (function() { 
var mail_to35081__delegate = function (e_mail,p__35082){var vec__35084 = p__35082;var content = cljs.core.nth.call(null,vec__35084,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to35081 = function (e_mail,var_args){
var p__35082 = null;if (arguments.length > 1) {
  p__35082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to35081__delegate.call(this,e_mail,p__35082);};
mail_to35081.cljs$lang$maxFixedArity = 1;
mail_to35081.cljs$lang$applyTo = (function (arglist__35085){
var e_mail = cljs.core.first(arglist__35085);
var p__35082 = cljs.core.rest(arglist__35085);
return mail_to35081__delegate(e_mail,p__35082);
});
mail_to35081.cljs$core$IFn$_invoke$arity$variadic = mail_to35081__delegate;
return mail_to35081;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35081);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list35086 = (function unordered_list35086(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__35091(s__35092){return (new cljs.core.LazySeq(null,(function (){var s__35092__$1 = s__35092;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35092__$1);if(temp__4092__auto__)
{var s__35092__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35092__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35092__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35094 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35093 = 0;while(true){
if((i__35093 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__35093);cljs.core.chunk_append.call(null,b__35094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__35095 = (i__35093 + 1);
i__35093 = G__35095;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35094),iter__35091.call(null,cljs.core.chunk_rest.call(null,s__35092__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35094),null);
}
} else
{var x = cljs.core.first.call(null,s__35092__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__35091.call(null,cljs.core.rest.call(null,s__35092__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35086);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list35096 = (function ordered_list35096(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__35101(s__35102){return (new cljs.core.LazySeq(null,(function (){var s__35102__$1 = s__35102;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35102__$1);if(temp__4092__auto__)
{var s__35102__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35102__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35102__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35104 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35103 = 0;while(true){
if((i__35103 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__35103);cljs.core.chunk_append.call(null,b__35104,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__35105 = (i__35103 + 1);
i__35103 = G__35105;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35104),iter__35101.call(null,cljs.core.chunk_rest.call(null,s__35102__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35104),null);
}
} else
{var x = cljs.core.first.call(null,s__35102__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__35101.call(null,cljs.core.rest.call(null,s__35102__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35096);
/**
* Create an image element.
*/
sablono.core.image35106 = (function() {
var image35106 = null;
var image35106__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image35106__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image35106 = function(src,alt){
switch(arguments.length){
case 1:
return image35106__1.call(this,src);
case 2:
return image35106__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image35106.cljs$core$IFn$_invoke$arity$1 = image35106__1;
image35106.cljs$core$IFn$_invoke$arity$2 = image35106__2;
return image35106;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35106);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__35107_SHARP_,p2__35108_SHARP_){return [cljs.core.str(p1__35107_SHARP_),cljs.core.str("["),cljs.core.str(p2__35108_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__35109_SHARP_,p2__35110_SHARP_){return [cljs.core.str(p1__35109_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35110_SHARP_)].join('');
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
sablono.core.hidden_field35111 = (function() {
var hidden_field35111 = null;
var hidden_field35111__1 = (function (name){return hidden_field35111.call(null,name,null);
});
var hidden_field35111__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field35111 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field35111__1.call(this,name);
case 2:
return hidden_field35111__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field35111.cljs$core$IFn$_invoke$arity$1 = hidden_field35111__1;
hidden_field35111.cljs$core$IFn$_invoke$arity$2 = hidden_field35111__2;
return hidden_field35111;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35111);
/**
* Creates a new text input field.
*/
sablono.core.text_field35112 = (function() {
var text_field35112 = null;
var text_field35112__1 = (function (name){return text_field35112.call(null,name,null);
});
var text_field35112__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field35112 = function(name,value){
switch(arguments.length){
case 1:
return text_field35112__1.call(this,name);
case 2:
return text_field35112__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field35112.cljs$core$IFn$_invoke$arity$1 = text_field35112__1;
text_field35112.cljs$core$IFn$_invoke$arity$2 = text_field35112__2;
return text_field35112;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35112);
/**
* Creates a new password field.
*/
sablono.core.password_field35113 = (function() {
var password_field35113 = null;
var password_field35113__1 = (function (name){return password_field35113.call(null,name,null);
});
var password_field35113__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field35113 = function(name,value){
switch(arguments.length){
case 1:
return password_field35113__1.call(this,name);
case 2:
return password_field35113__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field35113.cljs$core$IFn$_invoke$arity$1 = password_field35113__1;
password_field35113.cljs$core$IFn$_invoke$arity$2 = password_field35113__2;
return password_field35113;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35113);
/**
* Creates a new email input field.
*/
sablono.core.email_field35114 = (function() {
var email_field35114 = null;
var email_field35114__1 = (function (name){return email_field35114.call(null,name,null);
});
var email_field35114__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field35114 = function(name,value){
switch(arguments.length){
case 1:
return email_field35114__1.call(this,name);
case 2:
return email_field35114__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field35114.cljs$core$IFn$_invoke$arity$1 = email_field35114__1;
email_field35114.cljs$core$IFn$_invoke$arity$2 = email_field35114__2;
return email_field35114;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35114);
/**
* Creates a check box.
*/
sablono.core.check_box35115 = (function() {
var check_box35115 = null;
var check_box35115__1 = (function (name){return check_box35115.call(null,name,null);
});
var check_box35115__2 = (function (name,checked_QMARK_){return check_box35115.call(null,name,checked_QMARK_,"true");
});
var check_box35115__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box35115 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box35115__1.call(this,name);
case 2:
return check_box35115__2.call(this,name,checked_QMARK_);
case 3:
return check_box35115__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box35115.cljs$core$IFn$_invoke$arity$1 = check_box35115__1;
check_box35115.cljs$core$IFn$_invoke$arity$2 = check_box35115__2;
check_box35115.cljs$core$IFn$_invoke$arity$3 = check_box35115__3;
return check_box35115;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35115);
/**
* Creates a radio button.
*/
sablono.core.radio_button35116 = (function() {
var radio_button35116 = null;
var radio_button35116__1 = (function (group){return radio_button35116.call(null,group,null);
});
var radio_button35116__2 = (function (group,checked_QMARK_){return radio_button35116.call(null,group,checked_QMARK_,"true");
});
var radio_button35116__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button35116 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button35116__1.call(this,group);
case 2:
return radio_button35116__2.call(this,group,checked_QMARK_);
case 3:
return radio_button35116__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button35116.cljs$core$IFn$_invoke$arity$1 = radio_button35116__1;
radio_button35116.cljs$core$IFn$_invoke$arity$2 = radio_button35116__2;
radio_button35116.cljs$core$IFn$_invoke$arity$3 = radio_button35116__3;
return radio_button35116;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35116);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options35117 = (function() {
var select_options35117 = null;
var select_options35117__1 = (function (coll){return select_options35117.call(null,coll,null);
});
var select_options35117__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__35126(s__35127){return (new cljs.core.LazySeq(null,(function (){var s__35127__$1 = s__35127;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35127__$1);if(temp__4092__auto__)
{var s__35127__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35127__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35127__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35129 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35128 = 0;while(true){
if((i__35128 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__35128);cljs.core.chunk_append.call(null,b__35129,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35132 = x;var text = cljs.core.nth.call(null,vec__35132,0,null);var val = cljs.core.nth.call(null,vec__35132,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options35117.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__35134 = (i__35128 + 1);
i__35128 = G__35134;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35129),iter__35126.call(null,cljs.core.chunk_rest.call(null,s__35127__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35129),null);
}
} else
{var x = cljs.core.first.call(null,s__35127__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35133 = x;var text = cljs.core.nth.call(null,vec__35133,0,null);var val = cljs.core.nth.call(null,vec__35133,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options35117.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__35126.call(null,cljs.core.rest.call(null,s__35127__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options35117 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options35117__1.call(this,coll);
case 2:
return select_options35117__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options35117.cljs$core$IFn$_invoke$arity$1 = select_options35117__1;
select_options35117.cljs$core$IFn$_invoke$arity$2 = select_options35117__2;
return select_options35117;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35117);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down35135 = (function() {
var drop_down35135 = null;
var drop_down35135__2 = (function (name,options){return drop_down35135.call(null,name,options,null);
});
var drop_down35135__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down35135 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down35135__2.call(this,name,options);
case 3:
return drop_down35135__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down35135.cljs$core$IFn$_invoke$arity$2 = drop_down35135__2;
drop_down35135.cljs$core$IFn$_invoke$arity$3 = drop_down35135__3;
return drop_down35135;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down35135);
/**
* Creates a text area element.
*/
sablono.core.text_area35136 = (function() {
var text_area35136 = null;
var text_area35136__1 = (function (name){return text_area35136.call(null,name,null);
});
var text_area35136__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area35136 = function(name,value){
switch(arguments.length){
case 1:
return text_area35136__1.call(this,name);
case 2:
return text_area35136__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area35136.cljs$core$IFn$_invoke$arity$1 = text_area35136__1;
text_area35136.cljs$core$IFn$_invoke$arity$2 = text_area35136__2;
return text_area35136;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area35136);
/**
* Creates a file upload input.
*/
sablono.core.file_upload35137 = (function file_upload35137(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload35137);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label35138 = (function label35138(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label35138);
/**
* Creates a submit button.
*/
sablono.core.submit_button35139 = (function submit_button35139(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button35139);
/**
* Creates a form reset button.
*/
sablono.core.reset_button35140 = (function reset_button35140(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button35140);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to35141 = (function() { 
var form_to35141__delegate = function (p__35142,body){var vec__35144 = p__35142;var method = cljs.core.nth.call(null,vec__35144,0,null);var action = cljs.core.nth.call(null,vec__35144,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to35141 = function (p__35142,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to35141__delegate.call(this,p__35142,body);};
form_to35141.cljs$lang$maxFixedArity = 1;
form_to35141.cljs$lang$applyTo = (function (arglist__35145){
var p__35142 = cljs.core.first(arglist__35145);
var body = cljs.core.rest(arglist__35145);
return form_to35141__delegate(p__35142,body);
});
form_to35141.cljs$core$IFn$_invoke$arity$variadic = form_to35141__delegate;
return form_to35141;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to35141);
