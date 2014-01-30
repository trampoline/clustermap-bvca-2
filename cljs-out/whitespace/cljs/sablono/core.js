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
var G__35992__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__35991 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__35991,0,null);var body = cljs.core.nthnext.call(null,vec__35991,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__35992 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__35992__delegate.call(this,args);};
G__35992.cljs$lang$maxFixedArity = 0;
G__35992.cljs$lang$applyTo = (function (arglist__35993){
var args = cljs.core.seq(arglist__35993);
return G__35992__delegate(args);
});
G__35992.cljs$core$IFn$_invoke$arity$variadic = G__35992__delegate;
return G__35992;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__35998(s__35999){return (new cljs.core.LazySeq(null,(function (){var s__35999__$1 = s__35999;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35999__$1);if(temp__4092__auto__)
{var s__35999__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35999__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35999__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36001 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36000 = 0;while(true){
if((i__36000 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__36000);cljs.core.chunk_append.call(null,b__36001,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__36002 = (i__36000 + 1);
i__36000 = G__36002;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36001),iter__35998.call(null,cljs.core.chunk_rest.call(null,s__35999__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36001),null);
}
} else
{var args = cljs.core.first.call(null,s__35999__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__35998.call(null,cljs.core.rest.call(null,s__35999__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__36003_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__36003_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__36008(s__36009){return (new cljs.core.LazySeq(null,(function (){var s__36009__$1 = s__36009;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36009__$1);if(temp__4092__auto__)
{var s__36009__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36009__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36009__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36011 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36010 = 0;while(true){
if((i__36010 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__36010);cljs.core.chunk_append.call(null,b__36011,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__36012 = (i__36010 + 1);
i__36010 = G__36012;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36011),iter__36008.call(null,cljs.core.chunk_rest.call(null,s__36009__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36011),null);
}
} else
{var style = cljs.core.first.call(null,s__36009__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__36008.call(null,cljs.core.rest.call(null,s__36009__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__36013){
var styles = cljs.core.seq(arglist__36013);
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
sablono.core.link_to36014 = (function() { 
var link_to36014__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to36014 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to36014__delegate.call(this,url,content);};
link_to36014.cljs$lang$maxFixedArity = 1;
link_to36014.cljs$lang$applyTo = (function (arglist__36015){
var url = cljs.core.first(arglist__36015);
var content = cljs.core.rest(arglist__36015);
return link_to36014__delegate(url,content);
});
link_to36014.cljs$core$IFn$_invoke$arity$variadic = link_to36014__delegate;
return link_to36014;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36014);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to36016 = (function() { 
var mail_to36016__delegate = function (e_mail,p__36017){var vec__36019 = p__36017;var content = cljs.core.nth.call(null,vec__36019,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to36016 = function (e_mail,var_args){
var p__36017 = null;if (arguments.length > 1) {
  p__36017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to36016__delegate.call(this,e_mail,p__36017);};
mail_to36016.cljs$lang$maxFixedArity = 1;
mail_to36016.cljs$lang$applyTo = (function (arglist__36020){
var e_mail = cljs.core.first(arglist__36020);
var p__36017 = cljs.core.rest(arglist__36020);
return mail_to36016__delegate(e_mail,p__36017);
});
mail_to36016.cljs$core$IFn$_invoke$arity$variadic = mail_to36016__delegate;
return mail_to36016;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36016);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list36021 = (function unordered_list36021(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__36026(s__36027){return (new cljs.core.LazySeq(null,(function (){var s__36027__$1 = s__36027;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36027__$1);if(temp__4092__auto__)
{var s__36027__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36027__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36027__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36029 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36028 = 0;while(true){
if((i__36028 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36028);cljs.core.chunk_append.call(null,b__36029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__36030 = (i__36028 + 1);
i__36028 = G__36030;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36029),iter__36026.call(null,cljs.core.chunk_rest.call(null,s__36027__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36029),null);
}
} else
{var x = cljs.core.first.call(null,s__36027__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__36026.call(null,cljs.core.rest.call(null,s__36027__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36021);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list36031 = (function ordered_list36031(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__36036(s__36037){return (new cljs.core.LazySeq(null,(function (){var s__36037__$1 = s__36037;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36037__$1);if(temp__4092__auto__)
{var s__36037__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36037__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36037__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36039 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36038 = 0;while(true){
if((i__36038 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36038);cljs.core.chunk_append.call(null,b__36039,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__36040 = (i__36038 + 1);
i__36038 = G__36040;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36039),iter__36036.call(null,cljs.core.chunk_rest.call(null,s__36037__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36039),null);
}
} else
{var x = cljs.core.first.call(null,s__36037__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__36036.call(null,cljs.core.rest.call(null,s__36037__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36031);
/**
* Create an image element.
*/
sablono.core.image36041 = (function() {
var image36041 = null;
var image36041__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image36041__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image36041 = function(src,alt){
switch(arguments.length){
case 1:
return image36041__1.call(this,src);
case 2:
return image36041__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image36041.cljs$core$IFn$_invoke$arity$1 = image36041__1;
image36041.cljs$core$IFn$_invoke$arity$2 = image36041__2;
return image36041;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36041);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__36042_SHARP_,p2__36043_SHARP_){return [cljs.core.str(p1__36042_SHARP_),cljs.core.str("["),cljs.core.str(p2__36043_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__36044_SHARP_,p2__36045_SHARP_){return [cljs.core.str(p1__36044_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36045_SHARP_)].join('');
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
sablono.core.hidden_field36046 = (function() {
var hidden_field36046 = null;
var hidden_field36046__1 = (function (name){return hidden_field36046.call(null,name,null);
});
var hidden_field36046__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field36046 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field36046__1.call(this,name);
case 2:
return hidden_field36046__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field36046.cljs$core$IFn$_invoke$arity$1 = hidden_field36046__1;
hidden_field36046.cljs$core$IFn$_invoke$arity$2 = hidden_field36046__2;
return hidden_field36046;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36046);
/**
* Creates a new text input field.
*/
sablono.core.text_field36047 = (function() {
var text_field36047 = null;
var text_field36047__1 = (function (name){return text_field36047.call(null,name,null);
});
var text_field36047__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field36047 = function(name,value){
switch(arguments.length){
case 1:
return text_field36047__1.call(this,name);
case 2:
return text_field36047__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field36047.cljs$core$IFn$_invoke$arity$1 = text_field36047__1;
text_field36047.cljs$core$IFn$_invoke$arity$2 = text_field36047__2;
return text_field36047;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36047);
/**
* Creates a new password field.
*/
sablono.core.password_field36048 = (function() {
var password_field36048 = null;
var password_field36048__1 = (function (name){return password_field36048.call(null,name,null);
});
var password_field36048__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field36048 = function(name,value){
switch(arguments.length){
case 1:
return password_field36048__1.call(this,name);
case 2:
return password_field36048__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field36048.cljs$core$IFn$_invoke$arity$1 = password_field36048__1;
password_field36048.cljs$core$IFn$_invoke$arity$2 = password_field36048__2;
return password_field36048;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36048);
/**
* Creates a new email input field.
*/
sablono.core.email_field36049 = (function() {
var email_field36049 = null;
var email_field36049__1 = (function (name){return email_field36049.call(null,name,null);
});
var email_field36049__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field36049 = function(name,value){
switch(arguments.length){
case 1:
return email_field36049__1.call(this,name);
case 2:
return email_field36049__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field36049.cljs$core$IFn$_invoke$arity$1 = email_field36049__1;
email_field36049.cljs$core$IFn$_invoke$arity$2 = email_field36049__2;
return email_field36049;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36049);
/**
* Creates a check box.
*/
sablono.core.check_box36050 = (function() {
var check_box36050 = null;
var check_box36050__1 = (function (name){return check_box36050.call(null,name,null);
});
var check_box36050__2 = (function (name,checked_QMARK_){return check_box36050.call(null,name,checked_QMARK_,"true");
});
var check_box36050__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box36050 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box36050__1.call(this,name);
case 2:
return check_box36050__2.call(this,name,checked_QMARK_);
case 3:
return check_box36050__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box36050.cljs$core$IFn$_invoke$arity$1 = check_box36050__1;
check_box36050.cljs$core$IFn$_invoke$arity$2 = check_box36050__2;
check_box36050.cljs$core$IFn$_invoke$arity$3 = check_box36050__3;
return check_box36050;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36050);
/**
* Creates a radio button.
*/
sablono.core.radio_button36051 = (function() {
var radio_button36051 = null;
var radio_button36051__1 = (function (group){return radio_button36051.call(null,group,null);
});
var radio_button36051__2 = (function (group,checked_QMARK_){return radio_button36051.call(null,group,checked_QMARK_,"true");
});
var radio_button36051__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button36051 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button36051__1.call(this,group);
case 2:
return radio_button36051__2.call(this,group,checked_QMARK_);
case 3:
return radio_button36051__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button36051.cljs$core$IFn$_invoke$arity$1 = radio_button36051__1;
radio_button36051.cljs$core$IFn$_invoke$arity$2 = radio_button36051__2;
radio_button36051.cljs$core$IFn$_invoke$arity$3 = radio_button36051__3;
return radio_button36051;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36051);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options36052 = (function() {
var select_options36052 = null;
var select_options36052__1 = (function (coll){return select_options36052.call(null,coll,null);
});
var select_options36052__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__36061(s__36062){return (new cljs.core.LazySeq(null,(function (){var s__36062__$1 = s__36062;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36062__$1);if(temp__4092__auto__)
{var s__36062__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36062__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36062__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36064 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36063 = 0;while(true){
if((i__36063 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__36063);cljs.core.chunk_append.call(null,b__36064,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36067 = x;var text = cljs.core.nth.call(null,vec__36067,0,null);var val = cljs.core.nth.call(null,vec__36067,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options36052.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__36069 = (i__36063 + 1);
i__36063 = G__36069;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36064),iter__36061.call(null,cljs.core.chunk_rest.call(null,s__36062__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36064),null);
}
} else
{var x = cljs.core.first.call(null,s__36062__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36068 = x;var text = cljs.core.nth.call(null,vec__36068,0,null);var val = cljs.core.nth.call(null,vec__36068,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options36052.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__36061.call(null,cljs.core.rest.call(null,s__36062__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options36052 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options36052__1.call(this,coll);
case 2:
return select_options36052__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options36052.cljs$core$IFn$_invoke$arity$1 = select_options36052__1;
select_options36052.cljs$core$IFn$_invoke$arity$2 = select_options36052__2;
return select_options36052;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36052);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down36070 = (function() {
var drop_down36070 = null;
var drop_down36070__2 = (function (name,options){return drop_down36070.call(null,name,options,null);
});
var drop_down36070__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down36070 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down36070__2.call(this,name,options);
case 3:
return drop_down36070__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down36070.cljs$core$IFn$_invoke$arity$2 = drop_down36070__2;
drop_down36070.cljs$core$IFn$_invoke$arity$3 = drop_down36070__3;
return drop_down36070;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36070);
/**
* Creates a text area element.
*/
sablono.core.text_area36071 = (function() {
var text_area36071 = null;
var text_area36071__1 = (function (name){return text_area36071.call(null,name,null);
});
var text_area36071__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area36071 = function(name,value){
switch(arguments.length){
case 1:
return text_area36071__1.call(this,name);
case 2:
return text_area36071__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area36071.cljs$core$IFn$_invoke$arity$1 = text_area36071__1;
text_area36071.cljs$core$IFn$_invoke$arity$2 = text_area36071__2;
return text_area36071;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36071);
/**
* Creates a file upload input.
*/
sablono.core.file_upload36072 = (function file_upload36072(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload36072);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label36073 = (function label36073(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36073);
/**
* Creates a submit button.
*/
sablono.core.submit_button36074 = (function submit_button36074(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36074);
/**
* Creates a form reset button.
*/
sablono.core.reset_button36075 = (function reset_button36075(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36075);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to36076 = (function() { 
var form_to36076__delegate = function (p__36077,body){var vec__36079 = p__36077;var method = cljs.core.nth.call(null,vec__36079,0,null);var action = cljs.core.nth.call(null,vec__36079,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to36076 = function (p__36077,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to36076__delegate.call(this,p__36077,body);};
form_to36076.cljs$lang$maxFixedArity = 1;
form_to36076.cljs$lang$applyTo = (function (arglist__36080){
var p__36077 = cljs.core.first(arglist__36080);
var body = cljs.core.rest(arglist__36080);
return form_to36076__delegate(p__36077,body);
});
form_to36076.cljs$core$IFn$_invoke$arity$variadic = form_to36076__delegate;
return form_to36076;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36076);
