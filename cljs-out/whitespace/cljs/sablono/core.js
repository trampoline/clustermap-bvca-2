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
var G__35707__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__35706 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__35706,0,null);var body = cljs.core.nthnext.call(null,vec__35706,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__35707 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__35707__delegate.call(this,args);};
G__35707.cljs$lang$maxFixedArity = 0;
G__35707.cljs$lang$applyTo = (function (arglist__35708){
var args = cljs.core.seq(arglist__35708);
return G__35707__delegate(args);
});
G__35707.cljs$core$IFn$_invoke$arity$variadic = G__35707__delegate;
return G__35707;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__35713(s__35714){return (new cljs.core.LazySeq(null,(function (){var s__35714__$1 = s__35714;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35714__$1);if(temp__4092__auto__)
{var s__35714__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35714__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35714__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35716 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35715 = 0;while(true){
if((i__35715 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__35715);cljs.core.chunk_append.call(null,b__35716,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__35717 = (i__35715 + 1);
i__35715 = G__35717;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35716),iter__35713.call(null,cljs.core.chunk_rest.call(null,s__35714__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35716),null);
}
} else
{var args = cljs.core.first.call(null,s__35714__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__35713.call(null,cljs.core.rest.call(null,s__35714__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__35718_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__35718_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__35723(s__35724){return (new cljs.core.LazySeq(null,(function (){var s__35724__$1 = s__35724;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35724__$1);if(temp__4092__auto__)
{var s__35724__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35724__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35724__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35726 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35725 = 0;while(true){
if((i__35725 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__35725);cljs.core.chunk_append.call(null,b__35726,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__35727 = (i__35725 + 1);
i__35725 = G__35727;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35726),iter__35723.call(null,cljs.core.chunk_rest.call(null,s__35724__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35726),null);
}
} else
{var style = cljs.core.first.call(null,s__35724__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__35723.call(null,cljs.core.rest.call(null,s__35724__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__35728){
var styles = cljs.core.seq(arglist__35728);
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
sablono.core.link_to35729 = (function() { 
var link_to35729__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to35729 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to35729__delegate.call(this,url,content);};
link_to35729.cljs$lang$maxFixedArity = 1;
link_to35729.cljs$lang$applyTo = (function (arglist__35730){
var url = cljs.core.first(arglist__35730);
var content = cljs.core.rest(arglist__35730);
return link_to35729__delegate(url,content);
});
link_to35729.cljs$core$IFn$_invoke$arity$variadic = link_to35729__delegate;
return link_to35729;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35729);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to35731 = (function() { 
var mail_to35731__delegate = function (e_mail,p__35732){var vec__35734 = p__35732;var content = cljs.core.nth.call(null,vec__35734,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to35731 = function (e_mail,var_args){
var p__35732 = null;if (arguments.length > 1) {
  p__35732 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to35731__delegate.call(this,e_mail,p__35732);};
mail_to35731.cljs$lang$maxFixedArity = 1;
mail_to35731.cljs$lang$applyTo = (function (arglist__35735){
var e_mail = cljs.core.first(arglist__35735);
var p__35732 = cljs.core.rest(arglist__35735);
return mail_to35731__delegate(e_mail,p__35732);
});
mail_to35731.cljs$core$IFn$_invoke$arity$variadic = mail_to35731__delegate;
return mail_to35731;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35731);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list35736 = (function unordered_list35736(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__35741(s__35742){return (new cljs.core.LazySeq(null,(function (){var s__35742__$1 = s__35742;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35742__$1);if(temp__4092__auto__)
{var s__35742__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35742__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35742__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35744 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35743 = 0;while(true){
if((i__35743 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__35743);cljs.core.chunk_append.call(null,b__35744,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__35745 = (i__35743 + 1);
i__35743 = G__35745;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35744),iter__35741.call(null,cljs.core.chunk_rest.call(null,s__35742__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35744),null);
}
} else
{var x = cljs.core.first.call(null,s__35742__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__35741.call(null,cljs.core.rest.call(null,s__35742__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35736);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list35746 = (function ordered_list35746(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__35751(s__35752){return (new cljs.core.LazySeq(null,(function (){var s__35752__$1 = s__35752;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35752__$1);if(temp__4092__auto__)
{var s__35752__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35752__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35752__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35754 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35753 = 0;while(true){
if((i__35753 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__35753);cljs.core.chunk_append.call(null,b__35754,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__35755 = (i__35753 + 1);
i__35753 = G__35755;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35754),iter__35751.call(null,cljs.core.chunk_rest.call(null,s__35752__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35754),null);
}
} else
{var x = cljs.core.first.call(null,s__35752__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__35751.call(null,cljs.core.rest.call(null,s__35752__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35746);
/**
* Create an image element.
*/
sablono.core.image35756 = (function() {
var image35756 = null;
var image35756__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image35756__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image35756 = function(src,alt){
switch(arguments.length){
case 1:
return image35756__1.call(this,src);
case 2:
return image35756__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image35756.cljs$core$IFn$_invoke$arity$1 = image35756__1;
image35756.cljs$core$IFn$_invoke$arity$2 = image35756__2;
return image35756;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35756);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__35757_SHARP_,p2__35758_SHARP_){return [cljs.core.str(p1__35757_SHARP_),cljs.core.str("["),cljs.core.str(p2__35758_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__35759_SHARP_,p2__35760_SHARP_){return [cljs.core.str(p1__35759_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35760_SHARP_)].join('');
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
sablono.core.hidden_field35761 = (function() {
var hidden_field35761 = null;
var hidden_field35761__1 = (function (name){return hidden_field35761.call(null,name,null);
});
var hidden_field35761__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field35761 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field35761__1.call(this,name);
case 2:
return hidden_field35761__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field35761.cljs$core$IFn$_invoke$arity$1 = hidden_field35761__1;
hidden_field35761.cljs$core$IFn$_invoke$arity$2 = hidden_field35761__2;
return hidden_field35761;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35761);
/**
* Creates a new text input field.
*/
sablono.core.text_field35762 = (function() {
var text_field35762 = null;
var text_field35762__1 = (function (name){return text_field35762.call(null,name,null);
});
var text_field35762__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field35762 = function(name,value){
switch(arguments.length){
case 1:
return text_field35762__1.call(this,name);
case 2:
return text_field35762__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field35762.cljs$core$IFn$_invoke$arity$1 = text_field35762__1;
text_field35762.cljs$core$IFn$_invoke$arity$2 = text_field35762__2;
return text_field35762;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35762);
/**
* Creates a new password field.
*/
sablono.core.password_field35763 = (function() {
var password_field35763 = null;
var password_field35763__1 = (function (name){return password_field35763.call(null,name,null);
});
var password_field35763__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field35763 = function(name,value){
switch(arguments.length){
case 1:
return password_field35763__1.call(this,name);
case 2:
return password_field35763__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field35763.cljs$core$IFn$_invoke$arity$1 = password_field35763__1;
password_field35763.cljs$core$IFn$_invoke$arity$2 = password_field35763__2;
return password_field35763;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35763);
/**
* Creates a new email input field.
*/
sablono.core.email_field35764 = (function() {
var email_field35764 = null;
var email_field35764__1 = (function (name){return email_field35764.call(null,name,null);
});
var email_field35764__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field35764 = function(name,value){
switch(arguments.length){
case 1:
return email_field35764__1.call(this,name);
case 2:
return email_field35764__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field35764.cljs$core$IFn$_invoke$arity$1 = email_field35764__1;
email_field35764.cljs$core$IFn$_invoke$arity$2 = email_field35764__2;
return email_field35764;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35764);
/**
* Creates a check box.
*/
sablono.core.check_box35765 = (function() {
var check_box35765 = null;
var check_box35765__1 = (function (name){return check_box35765.call(null,name,null);
});
var check_box35765__2 = (function (name,checked_QMARK_){return check_box35765.call(null,name,checked_QMARK_,"true");
});
var check_box35765__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box35765 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box35765__1.call(this,name);
case 2:
return check_box35765__2.call(this,name,checked_QMARK_);
case 3:
return check_box35765__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box35765.cljs$core$IFn$_invoke$arity$1 = check_box35765__1;
check_box35765.cljs$core$IFn$_invoke$arity$2 = check_box35765__2;
check_box35765.cljs$core$IFn$_invoke$arity$3 = check_box35765__3;
return check_box35765;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35765);
/**
* Creates a radio button.
*/
sablono.core.radio_button35766 = (function() {
var radio_button35766 = null;
var radio_button35766__1 = (function (group){return radio_button35766.call(null,group,null);
});
var radio_button35766__2 = (function (group,checked_QMARK_){return radio_button35766.call(null,group,checked_QMARK_,"true");
});
var radio_button35766__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button35766 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button35766__1.call(this,group);
case 2:
return radio_button35766__2.call(this,group,checked_QMARK_);
case 3:
return radio_button35766__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button35766.cljs$core$IFn$_invoke$arity$1 = radio_button35766__1;
radio_button35766.cljs$core$IFn$_invoke$arity$2 = radio_button35766__2;
radio_button35766.cljs$core$IFn$_invoke$arity$3 = radio_button35766__3;
return radio_button35766;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35766);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options35767 = (function() {
var select_options35767 = null;
var select_options35767__1 = (function (coll){return select_options35767.call(null,coll,null);
});
var select_options35767__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__35776(s__35777){return (new cljs.core.LazySeq(null,(function (){var s__35777__$1 = s__35777;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35777__$1);if(temp__4092__auto__)
{var s__35777__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35777__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35777__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35779 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35778 = 0;while(true){
if((i__35778 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__35778);cljs.core.chunk_append.call(null,b__35779,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35782 = x;var text = cljs.core.nth.call(null,vec__35782,0,null);var val = cljs.core.nth.call(null,vec__35782,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options35767.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__35784 = (i__35778 + 1);
i__35778 = G__35784;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35779),iter__35776.call(null,cljs.core.chunk_rest.call(null,s__35777__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35779),null);
}
} else
{var x = cljs.core.first.call(null,s__35777__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35783 = x;var text = cljs.core.nth.call(null,vec__35783,0,null);var val = cljs.core.nth.call(null,vec__35783,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options35767.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__35776.call(null,cljs.core.rest.call(null,s__35777__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options35767 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options35767__1.call(this,coll);
case 2:
return select_options35767__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options35767.cljs$core$IFn$_invoke$arity$1 = select_options35767__1;
select_options35767.cljs$core$IFn$_invoke$arity$2 = select_options35767__2;
return select_options35767;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35767);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down35785 = (function() {
var drop_down35785 = null;
var drop_down35785__2 = (function (name,options){return drop_down35785.call(null,name,options,null);
});
var drop_down35785__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down35785 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down35785__2.call(this,name,options);
case 3:
return drop_down35785__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down35785.cljs$core$IFn$_invoke$arity$2 = drop_down35785__2;
drop_down35785.cljs$core$IFn$_invoke$arity$3 = drop_down35785__3;
return drop_down35785;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down35785);
/**
* Creates a text area element.
*/
sablono.core.text_area35786 = (function() {
var text_area35786 = null;
var text_area35786__1 = (function (name){return text_area35786.call(null,name,null);
});
var text_area35786__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area35786 = function(name,value){
switch(arguments.length){
case 1:
return text_area35786__1.call(this,name);
case 2:
return text_area35786__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area35786.cljs$core$IFn$_invoke$arity$1 = text_area35786__1;
text_area35786.cljs$core$IFn$_invoke$arity$2 = text_area35786__2;
return text_area35786;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area35786);
/**
* Creates a file upload input.
*/
sablono.core.file_upload35787 = (function file_upload35787(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload35787);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label35788 = (function label35788(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label35788);
/**
* Creates a submit button.
*/
sablono.core.submit_button35789 = (function submit_button35789(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button35789);
/**
* Creates a form reset button.
*/
sablono.core.reset_button35790 = (function reset_button35790(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button35790);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to35791 = (function() { 
var form_to35791__delegate = function (p__35792,body){var vec__35794 = p__35792;var method = cljs.core.nth.call(null,vec__35794,0,null);var action = cljs.core.nth.call(null,vec__35794,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to35791 = function (p__35792,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to35791__delegate.call(this,p__35792,body);};
form_to35791.cljs$lang$maxFixedArity = 1;
form_to35791.cljs$lang$applyTo = (function (arglist__35795){
var p__35792 = cljs.core.first(arglist__35795);
var body = cljs.core.rest(arglist__35795);
return form_to35791__delegate(p__35792,body);
});
form_to35791.cljs$core$IFn$_invoke$arity$variadic = form_to35791__delegate;
return form_to35791;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to35791);
