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
var G__15691__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15690 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15690,0,null);var body = cljs.core.nthnext.call(null,vec__15690,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15691 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15691__delegate.call(this,args);};
G__15691.cljs$lang$maxFixedArity = 0;
G__15691.cljs$lang$applyTo = (function (arglist__15692){
var args = cljs.core.seq(arglist__15692);
return G__15691__delegate(args);
});
G__15691.cljs$core$IFn$_invoke$arity$variadic = G__15691__delegate;
return G__15691;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15697(s__15698){return (new cljs.core.LazySeq(null,(function (){var s__15698__$1 = s__15698;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15698__$1);if(temp__4092__auto__)
{var s__15698__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15698__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15698__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15700 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15699 = 0;while(true){
if((i__15699 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15699);cljs.core.chunk_append.call(null,b__15700,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15701 = (i__15699 + 1);
i__15699 = G__15701;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15700),iter__15697.call(null,cljs.core.chunk_rest.call(null,s__15698__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15700),null);
}
} else
{var args = cljs.core.first.call(null,s__15698__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15697.call(null,cljs.core.rest.call(null,s__15698__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__15702_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__15702_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15707(s__15708){return (new cljs.core.LazySeq(null,(function (){var s__15708__$1 = s__15708;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15708__$1);if(temp__4092__auto__)
{var s__15708__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15708__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15708__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15710 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15709 = 0;while(true){
if((i__15709 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15709);cljs.core.chunk_append.call(null,b__15710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15711 = (i__15709 + 1);
i__15709 = G__15711;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15710),iter__15707.call(null,cljs.core.chunk_rest.call(null,s__15708__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15710),null);
}
} else
{var style = cljs.core.first.call(null,s__15708__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15707.call(null,cljs.core.rest.call(null,s__15708__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__15712){
var styles = cljs.core.seq(arglist__15712);
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
sablono.core.link_to15713 = (function() { 
var link_to15713__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15713 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15713__delegate.call(this,url,content);};
link_to15713.cljs$lang$maxFixedArity = 1;
link_to15713.cljs$lang$applyTo = (function (arglist__15714){
var url = cljs.core.first(arglist__15714);
var content = cljs.core.rest(arglist__15714);
return link_to15713__delegate(url,content);
});
link_to15713.cljs$core$IFn$_invoke$arity$variadic = link_to15713__delegate;
return link_to15713;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15713);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15715 = (function() { 
var mail_to15715__delegate = function (e_mail,p__15716){var vec__15718 = p__15716;var content = cljs.core.nth.call(null,vec__15718,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15715 = function (e_mail,var_args){
var p__15716 = null;if (arguments.length > 1) {
  p__15716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15715__delegate.call(this,e_mail,p__15716);};
mail_to15715.cljs$lang$maxFixedArity = 1;
mail_to15715.cljs$lang$applyTo = (function (arglist__15719){
var e_mail = cljs.core.first(arglist__15719);
var p__15716 = cljs.core.rest(arglist__15719);
return mail_to15715__delegate(e_mail,p__15716);
});
mail_to15715.cljs$core$IFn$_invoke$arity$variadic = mail_to15715__delegate;
return mail_to15715;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15715);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15720 = (function unordered_list15720(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15725(s__15726){return (new cljs.core.LazySeq(null,(function (){var s__15726__$1 = s__15726;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15726__$1);if(temp__4092__auto__)
{var s__15726__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15726__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15726__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15728 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15727 = 0;while(true){
if((i__15727 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15727);cljs.core.chunk_append.call(null,b__15728,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15729 = (i__15727 + 1);
i__15727 = G__15729;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15728),iter__15725.call(null,cljs.core.chunk_rest.call(null,s__15726__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15728),null);
}
} else
{var x = cljs.core.first.call(null,s__15726__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15725.call(null,cljs.core.rest.call(null,s__15726__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15720);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15730 = (function ordered_list15730(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15735(s__15736){return (new cljs.core.LazySeq(null,(function (){var s__15736__$1 = s__15736;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15736__$1);if(temp__4092__auto__)
{var s__15736__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15736__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15736__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15738 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15737 = 0;while(true){
if((i__15737 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15737);cljs.core.chunk_append.call(null,b__15738,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15739 = (i__15737 + 1);
i__15737 = G__15739;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15738),iter__15735.call(null,cljs.core.chunk_rest.call(null,s__15736__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15738),null);
}
} else
{var x = cljs.core.first.call(null,s__15736__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15735.call(null,cljs.core.rest.call(null,s__15736__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15730);
/**
* Create an image element.
*/
sablono.core.image15740 = (function() {
var image15740 = null;
var image15740__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15740__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15740 = function(src,alt){
switch(arguments.length){
case 1:
return image15740__1.call(this,src);
case 2:
return image15740__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15740.cljs$core$IFn$_invoke$arity$1 = image15740__1;
image15740.cljs$core$IFn$_invoke$arity$2 = image15740__2;
return image15740;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15740);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15741_SHARP_,p2__15742_SHARP_){return [cljs.core.str(p1__15741_SHARP_),cljs.core.str("["),cljs.core.str(p2__15742_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15743_SHARP_,p2__15744_SHARP_){return [cljs.core.str(p1__15743_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15744_SHARP_)].join('');
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
sablono.core.hidden_field15745 = (function() {
var hidden_field15745 = null;
var hidden_field15745__1 = (function (name){return hidden_field15745.call(null,name,null);
});
var hidden_field15745__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15745 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15745__1.call(this,name);
case 2:
return hidden_field15745__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15745.cljs$core$IFn$_invoke$arity$1 = hidden_field15745__1;
hidden_field15745.cljs$core$IFn$_invoke$arity$2 = hidden_field15745__2;
return hidden_field15745;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15745);
/**
* Creates a new text input field.
*/
sablono.core.text_field15746 = (function() {
var text_field15746 = null;
var text_field15746__1 = (function (name){return text_field15746.call(null,name,null);
});
var text_field15746__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15746 = function(name,value){
switch(arguments.length){
case 1:
return text_field15746__1.call(this,name);
case 2:
return text_field15746__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15746.cljs$core$IFn$_invoke$arity$1 = text_field15746__1;
text_field15746.cljs$core$IFn$_invoke$arity$2 = text_field15746__2;
return text_field15746;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15746);
/**
* Creates a new password field.
*/
sablono.core.password_field15747 = (function() {
var password_field15747 = null;
var password_field15747__1 = (function (name){return password_field15747.call(null,name,null);
});
var password_field15747__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15747 = function(name,value){
switch(arguments.length){
case 1:
return password_field15747__1.call(this,name);
case 2:
return password_field15747__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15747.cljs$core$IFn$_invoke$arity$1 = password_field15747__1;
password_field15747.cljs$core$IFn$_invoke$arity$2 = password_field15747__2;
return password_field15747;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15747);
/**
* Creates a new email input field.
*/
sablono.core.email_field15748 = (function() {
var email_field15748 = null;
var email_field15748__1 = (function (name){return email_field15748.call(null,name,null);
});
var email_field15748__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15748 = function(name,value){
switch(arguments.length){
case 1:
return email_field15748__1.call(this,name);
case 2:
return email_field15748__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15748.cljs$core$IFn$_invoke$arity$1 = email_field15748__1;
email_field15748.cljs$core$IFn$_invoke$arity$2 = email_field15748__2;
return email_field15748;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15748);
/**
* Creates a check box.
*/
sablono.core.check_box15749 = (function() {
var check_box15749 = null;
var check_box15749__1 = (function (name){return check_box15749.call(null,name,null);
});
var check_box15749__2 = (function (name,checked_QMARK_){return check_box15749.call(null,name,checked_QMARK_,"true");
});
var check_box15749__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15749 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15749__1.call(this,name);
case 2:
return check_box15749__2.call(this,name,checked_QMARK_);
case 3:
return check_box15749__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15749.cljs$core$IFn$_invoke$arity$1 = check_box15749__1;
check_box15749.cljs$core$IFn$_invoke$arity$2 = check_box15749__2;
check_box15749.cljs$core$IFn$_invoke$arity$3 = check_box15749__3;
return check_box15749;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15749);
/**
* Creates a radio button.
*/
sablono.core.radio_button15750 = (function() {
var radio_button15750 = null;
var radio_button15750__1 = (function (group){return radio_button15750.call(null,group,null);
});
var radio_button15750__2 = (function (group,checked_QMARK_){return radio_button15750.call(null,group,checked_QMARK_,"true");
});
var radio_button15750__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15750 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15750__1.call(this,group);
case 2:
return radio_button15750__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15750__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15750.cljs$core$IFn$_invoke$arity$1 = radio_button15750__1;
radio_button15750.cljs$core$IFn$_invoke$arity$2 = radio_button15750__2;
radio_button15750.cljs$core$IFn$_invoke$arity$3 = radio_button15750__3;
return radio_button15750;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15750);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15751 = (function() {
var select_options15751 = null;
var select_options15751__1 = (function (coll){return select_options15751.call(null,coll,null);
});
var select_options15751__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15760(s__15761){return (new cljs.core.LazySeq(null,(function (){var s__15761__$1 = s__15761;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15761__$1);if(temp__4092__auto__)
{var s__15761__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15761__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15761__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15763 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15762 = 0;while(true){
if((i__15762 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15762);cljs.core.chunk_append.call(null,b__15763,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15766 = x;var text = cljs.core.nth.call(null,vec__15766,0,null);var val = cljs.core.nth.call(null,vec__15766,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15751.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15768 = (i__15762 + 1);
i__15762 = G__15768;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15763),iter__15760.call(null,cljs.core.chunk_rest.call(null,s__15761__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15763),null);
}
} else
{var x = cljs.core.first.call(null,s__15761__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15767 = x;var text = cljs.core.nth.call(null,vec__15767,0,null);var val = cljs.core.nth.call(null,vec__15767,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15751.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15760.call(null,cljs.core.rest.call(null,s__15761__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15751 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15751__1.call(this,coll);
case 2:
return select_options15751__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15751.cljs$core$IFn$_invoke$arity$1 = select_options15751__1;
select_options15751.cljs$core$IFn$_invoke$arity$2 = select_options15751__2;
return select_options15751;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15751);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15769 = (function() {
var drop_down15769 = null;
var drop_down15769__2 = (function (name,options){return drop_down15769.call(null,name,options,null);
});
var drop_down15769__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15769 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15769__2.call(this,name,options);
case 3:
return drop_down15769__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15769.cljs$core$IFn$_invoke$arity$2 = drop_down15769__2;
drop_down15769.cljs$core$IFn$_invoke$arity$3 = drop_down15769__3;
return drop_down15769;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15769);
/**
* Creates a text area element.
*/
sablono.core.text_area15770 = (function() {
var text_area15770 = null;
var text_area15770__1 = (function (name){return text_area15770.call(null,name,null);
});
var text_area15770__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15770 = function(name,value){
switch(arguments.length){
case 1:
return text_area15770__1.call(this,name);
case 2:
return text_area15770__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15770.cljs$core$IFn$_invoke$arity$1 = text_area15770__1;
text_area15770.cljs$core$IFn$_invoke$arity$2 = text_area15770__2;
return text_area15770;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15770);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15771 = (function file_upload15771(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15771);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15772 = (function label15772(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15772);
/**
* Creates a submit button.
*/
sablono.core.submit_button15773 = (function submit_button15773(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15773);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15774 = (function reset_button15774(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15774);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15775 = (function() { 
var form_to15775__delegate = function (p__15776,body){var vec__15778 = p__15776;var method = cljs.core.nth.call(null,vec__15778,0,null);var action = cljs.core.nth.call(null,vec__15778,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15775 = function (p__15776,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15775__delegate.call(this,p__15776,body);};
form_to15775.cljs$lang$maxFixedArity = 1;
form_to15775.cljs$lang$applyTo = (function (arglist__15779){
var p__15776 = cljs.core.first(arglist__15779);
var body = cljs.core.rest(arglist__15779);
return form_to15775__delegate(p__15776,body);
});
form_to15775.cljs$core$IFn$_invoke$arity$variadic = form_to15775__delegate;
return form_to15775;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15775);

//# sourceMappingURL=core.js.map