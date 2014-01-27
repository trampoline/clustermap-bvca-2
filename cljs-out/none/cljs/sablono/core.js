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
var G__15792__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15791 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15791,0,null);var body = cljs.core.nthnext.call(null,vec__15791,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15792 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15792__delegate.call(this,args);};
G__15792.cljs$lang$maxFixedArity = 0;
G__15792.cljs$lang$applyTo = (function (arglist__15793){
var args = cljs.core.seq(arglist__15793);
return G__15792__delegate(args);
});
G__15792.cljs$core$IFn$_invoke$arity$variadic = G__15792__delegate;
return G__15792;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15798(s__15799){return (new cljs.core.LazySeq(null,(function (){var s__15799__$1 = s__15799;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15799__$1);if(temp__4092__auto__)
{var s__15799__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15799__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15799__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15801 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15800 = 0;while(true){
if((i__15800 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15800);cljs.core.chunk_append.call(null,b__15801,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15802 = (i__15800 + 1);
i__15800 = G__15802;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15801),iter__15798.call(null,cljs.core.chunk_rest.call(null,s__15799__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15801),null);
}
} else
{var args = cljs.core.first.call(null,s__15799__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15798.call(null,cljs.core.rest.call(null,s__15799__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__15803_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__15803_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15808(s__15809){return (new cljs.core.LazySeq(null,(function (){var s__15809__$1 = s__15809;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15809__$1);if(temp__4092__auto__)
{var s__15809__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15809__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15809__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15811 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15810 = 0;while(true){
if((i__15810 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15810);cljs.core.chunk_append.call(null,b__15811,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15812 = (i__15810 + 1);
i__15810 = G__15812;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15811),iter__15808.call(null,cljs.core.chunk_rest.call(null,s__15809__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15811),null);
}
} else
{var style = cljs.core.first.call(null,s__15809__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15808.call(null,cljs.core.rest.call(null,s__15809__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__15813){
var styles = cljs.core.seq(arglist__15813);
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
sablono.core.link_to15814 = (function() { 
var link_to15814__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15814 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15814__delegate.call(this,url,content);};
link_to15814.cljs$lang$maxFixedArity = 1;
link_to15814.cljs$lang$applyTo = (function (arglist__15815){
var url = cljs.core.first(arglist__15815);
var content = cljs.core.rest(arglist__15815);
return link_to15814__delegate(url,content);
});
link_to15814.cljs$core$IFn$_invoke$arity$variadic = link_to15814__delegate;
return link_to15814;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15814);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15816 = (function() { 
var mail_to15816__delegate = function (e_mail,p__15817){var vec__15819 = p__15817;var content = cljs.core.nth.call(null,vec__15819,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15816 = function (e_mail,var_args){
var p__15817 = null;if (arguments.length > 1) {
  p__15817 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15816__delegate.call(this,e_mail,p__15817);};
mail_to15816.cljs$lang$maxFixedArity = 1;
mail_to15816.cljs$lang$applyTo = (function (arglist__15820){
var e_mail = cljs.core.first(arglist__15820);
var p__15817 = cljs.core.rest(arglist__15820);
return mail_to15816__delegate(e_mail,p__15817);
});
mail_to15816.cljs$core$IFn$_invoke$arity$variadic = mail_to15816__delegate;
return mail_to15816;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15816);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15821 = (function unordered_list15821(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15826(s__15827){return (new cljs.core.LazySeq(null,(function (){var s__15827__$1 = s__15827;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15827__$1);if(temp__4092__auto__)
{var s__15827__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15827__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15827__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15829 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15828 = 0;while(true){
if((i__15828 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15828);cljs.core.chunk_append.call(null,b__15829,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15830 = (i__15828 + 1);
i__15828 = G__15830;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15829),iter__15826.call(null,cljs.core.chunk_rest.call(null,s__15827__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15829),null);
}
} else
{var x = cljs.core.first.call(null,s__15827__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15826.call(null,cljs.core.rest.call(null,s__15827__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15821);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15831 = (function ordered_list15831(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15836(s__15837){return (new cljs.core.LazySeq(null,(function (){var s__15837__$1 = s__15837;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15837__$1);if(temp__4092__auto__)
{var s__15837__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15837__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15837__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15839 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15838 = 0;while(true){
if((i__15838 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15838);cljs.core.chunk_append.call(null,b__15839,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15840 = (i__15838 + 1);
i__15838 = G__15840;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15839),iter__15836.call(null,cljs.core.chunk_rest.call(null,s__15837__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15839),null);
}
} else
{var x = cljs.core.first.call(null,s__15837__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15836.call(null,cljs.core.rest.call(null,s__15837__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15831);
/**
* Create an image element.
*/
sablono.core.image15841 = (function() {
var image15841 = null;
var image15841__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15841__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15841 = function(src,alt){
switch(arguments.length){
case 1:
return image15841__1.call(this,src);
case 2:
return image15841__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15841.cljs$core$IFn$_invoke$arity$1 = image15841__1;
image15841.cljs$core$IFn$_invoke$arity$2 = image15841__2;
return image15841;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15841);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15842_SHARP_,p2__15843_SHARP_){return [cljs.core.str(p1__15842_SHARP_),cljs.core.str("["),cljs.core.str(p2__15843_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15844_SHARP_,p2__15845_SHARP_){return [cljs.core.str(p1__15844_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15845_SHARP_)].join('');
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
sablono.core.hidden_field15846 = (function() {
var hidden_field15846 = null;
var hidden_field15846__1 = (function (name){return hidden_field15846.call(null,name,null);
});
var hidden_field15846__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15846 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15846__1.call(this,name);
case 2:
return hidden_field15846__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15846.cljs$core$IFn$_invoke$arity$1 = hidden_field15846__1;
hidden_field15846.cljs$core$IFn$_invoke$arity$2 = hidden_field15846__2;
return hidden_field15846;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15846);
/**
* Creates a new text input field.
*/
sablono.core.text_field15847 = (function() {
var text_field15847 = null;
var text_field15847__1 = (function (name){return text_field15847.call(null,name,null);
});
var text_field15847__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15847 = function(name,value){
switch(arguments.length){
case 1:
return text_field15847__1.call(this,name);
case 2:
return text_field15847__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15847.cljs$core$IFn$_invoke$arity$1 = text_field15847__1;
text_field15847.cljs$core$IFn$_invoke$arity$2 = text_field15847__2;
return text_field15847;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15847);
/**
* Creates a new password field.
*/
sablono.core.password_field15848 = (function() {
var password_field15848 = null;
var password_field15848__1 = (function (name){return password_field15848.call(null,name,null);
});
var password_field15848__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15848 = function(name,value){
switch(arguments.length){
case 1:
return password_field15848__1.call(this,name);
case 2:
return password_field15848__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15848.cljs$core$IFn$_invoke$arity$1 = password_field15848__1;
password_field15848.cljs$core$IFn$_invoke$arity$2 = password_field15848__2;
return password_field15848;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15848);
/**
* Creates a new email input field.
*/
sablono.core.email_field15849 = (function() {
var email_field15849 = null;
var email_field15849__1 = (function (name){return email_field15849.call(null,name,null);
});
var email_field15849__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15849 = function(name,value){
switch(arguments.length){
case 1:
return email_field15849__1.call(this,name);
case 2:
return email_field15849__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15849.cljs$core$IFn$_invoke$arity$1 = email_field15849__1;
email_field15849.cljs$core$IFn$_invoke$arity$2 = email_field15849__2;
return email_field15849;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15849);
/**
* Creates a check box.
*/
sablono.core.check_box15850 = (function() {
var check_box15850 = null;
var check_box15850__1 = (function (name){return check_box15850.call(null,name,null);
});
var check_box15850__2 = (function (name,checked_QMARK_){return check_box15850.call(null,name,checked_QMARK_,"true");
});
var check_box15850__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15850 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15850__1.call(this,name);
case 2:
return check_box15850__2.call(this,name,checked_QMARK_);
case 3:
return check_box15850__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15850.cljs$core$IFn$_invoke$arity$1 = check_box15850__1;
check_box15850.cljs$core$IFn$_invoke$arity$2 = check_box15850__2;
check_box15850.cljs$core$IFn$_invoke$arity$3 = check_box15850__3;
return check_box15850;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15850);
/**
* Creates a radio button.
*/
sablono.core.radio_button15851 = (function() {
var radio_button15851 = null;
var radio_button15851__1 = (function (group){return radio_button15851.call(null,group,null);
});
var radio_button15851__2 = (function (group,checked_QMARK_){return radio_button15851.call(null,group,checked_QMARK_,"true");
});
var radio_button15851__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15851 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15851__1.call(this,group);
case 2:
return radio_button15851__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15851__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15851.cljs$core$IFn$_invoke$arity$1 = radio_button15851__1;
radio_button15851.cljs$core$IFn$_invoke$arity$2 = radio_button15851__2;
radio_button15851.cljs$core$IFn$_invoke$arity$3 = radio_button15851__3;
return radio_button15851;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15851);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15852 = (function() {
var select_options15852 = null;
var select_options15852__1 = (function (coll){return select_options15852.call(null,coll,null);
});
var select_options15852__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15861(s__15862){return (new cljs.core.LazySeq(null,(function (){var s__15862__$1 = s__15862;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15862__$1);if(temp__4092__auto__)
{var s__15862__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15862__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15862__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15864 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15863 = 0;while(true){
if((i__15863 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15863);cljs.core.chunk_append.call(null,b__15864,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15867 = x;var text = cljs.core.nth.call(null,vec__15867,0,null);var val = cljs.core.nth.call(null,vec__15867,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15852.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15869 = (i__15863 + 1);
i__15863 = G__15869;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15864),iter__15861.call(null,cljs.core.chunk_rest.call(null,s__15862__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15864),null);
}
} else
{var x = cljs.core.first.call(null,s__15862__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15868 = x;var text = cljs.core.nth.call(null,vec__15868,0,null);var val = cljs.core.nth.call(null,vec__15868,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15852.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15861.call(null,cljs.core.rest.call(null,s__15862__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15852 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15852__1.call(this,coll);
case 2:
return select_options15852__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15852.cljs$core$IFn$_invoke$arity$1 = select_options15852__1;
select_options15852.cljs$core$IFn$_invoke$arity$2 = select_options15852__2;
return select_options15852;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15852);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15870 = (function() {
var drop_down15870 = null;
var drop_down15870__2 = (function (name,options){return drop_down15870.call(null,name,options,null);
});
var drop_down15870__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15870 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15870__2.call(this,name,options);
case 3:
return drop_down15870__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15870.cljs$core$IFn$_invoke$arity$2 = drop_down15870__2;
drop_down15870.cljs$core$IFn$_invoke$arity$3 = drop_down15870__3;
return drop_down15870;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15870);
/**
* Creates a text area element.
*/
sablono.core.text_area15871 = (function() {
var text_area15871 = null;
var text_area15871__1 = (function (name){return text_area15871.call(null,name,null);
});
var text_area15871__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15871 = function(name,value){
switch(arguments.length){
case 1:
return text_area15871__1.call(this,name);
case 2:
return text_area15871__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15871.cljs$core$IFn$_invoke$arity$1 = text_area15871__1;
text_area15871.cljs$core$IFn$_invoke$arity$2 = text_area15871__2;
return text_area15871;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15871);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15872 = (function file_upload15872(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15872);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15873 = (function label15873(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15873);
/**
* Creates a submit button.
*/
sablono.core.submit_button15874 = (function submit_button15874(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15874);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15875 = (function reset_button15875(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15875);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15876 = (function() { 
var form_to15876__delegate = function (p__15877,body){var vec__15879 = p__15877;var method = cljs.core.nth.call(null,vec__15879,0,null);var action = cljs.core.nth.call(null,vec__15879,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15876 = function (p__15877,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15876__delegate.call(this,p__15877,body);};
form_to15876.cljs$lang$maxFixedArity = 1;
form_to15876.cljs$lang$applyTo = (function (arglist__15880){
var p__15877 = cljs.core.first(arglist__15880);
var body = cljs.core.rest(arglist__15880);
return form_to15876__delegate(p__15877,body);
});
form_to15876.cljs$core$IFn$_invoke$arity$variadic = form_to15876__delegate;
return form_to15876;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15876);

//# sourceMappingURL=core.js.map