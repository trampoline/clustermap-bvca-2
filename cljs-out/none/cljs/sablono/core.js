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
var G__15718__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15717 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15717,0,null);var body = cljs.core.nthnext.call(null,vec__15717,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15718 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15718__delegate.call(this,args);};
G__15718.cljs$lang$maxFixedArity = 0;
G__15718.cljs$lang$applyTo = (function (arglist__15719){
var args = cljs.core.seq(arglist__15719);
return G__15718__delegate(args);
});
G__15718.cljs$core$IFn$_invoke$arity$variadic = G__15718__delegate;
return G__15718;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15724(s__15725){return (new cljs.core.LazySeq(null,(function (){var s__15725__$1 = s__15725;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15725__$1);if(temp__4092__auto__)
{var s__15725__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15725__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15725__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15727 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15726 = 0;while(true){
if((i__15726 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15726);cljs.core.chunk_append.call(null,b__15727,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15728 = (i__15726 + 1);
i__15726 = G__15728;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15727),iter__15724.call(null,cljs.core.chunk_rest.call(null,s__15725__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15727),null);
}
} else
{var args = cljs.core.first.call(null,s__15725__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15724.call(null,cljs.core.rest.call(null,s__15725__$2)));
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
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__15733(s__15734){return (new cljs.core.LazySeq(null,(function (){var s__15734__$1 = s__15734;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15734__$1);if(temp__4092__auto__)
{var s__15734__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15734__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15734__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15736 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15735 = 0;while(true){
if((i__15735 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__15735);cljs.core.chunk_append.call(null,b__15736,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__15737 = (i__15735 + 1);
i__15735 = G__15737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15736),iter__15733.call(null,cljs.core.chunk_rest.call(null,s__15734__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15736),null);
}
} else
{var script = cljs.core.first.call(null,s__15734__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__15733.call(null,cljs.core.rest.call(null,s__15734__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__15738){
var scripts = cljs.core.seq(arglist__15738);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15743(s__15744){return (new cljs.core.LazySeq(null,(function (){var s__15744__$1 = s__15744;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15744__$1);if(temp__4092__auto__)
{var s__15744__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15744__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15744__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15746 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15745 = 0;while(true){
if((i__15745 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15745);cljs.core.chunk_append.call(null,b__15746,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15747 = (i__15745 + 1);
i__15745 = G__15747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15746),iter__15743.call(null,cljs.core.chunk_rest.call(null,s__15744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15746),null);
}
} else
{var style = cljs.core.first.call(null,s__15744__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15743.call(null,cljs.core.rest.call(null,s__15744__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__15748){
var styles = cljs.core.seq(arglist__15748);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to15749 = (function() { 
var link_to15749__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15749 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15749__delegate.call(this,url,content);};
link_to15749.cljs$lang$maxFixedArity = 1;
link_to15749.cljs$lang$applyTo = (function (arglist__15750){
var url = cljs.core.first(arglist__15750);
var content = cljs.core.rest(arglist__15750);
return link_to15749__delegate(url,content);
});
link_to15749.cljs$core$IFn$_invoke$arity$variadic = link_to15749__delegate;
return link_to15749;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15749);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15751 = (function() { 
var mail_to15751__delegate = function (e_mail,p__15752){var vec__15754 = p__15752;var content = cljs.core.nth.call(null,vec__15754,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15751 = function (e_mail,var_args){
var p__15752 = null;if (arguments.length > 1) {
  p__15752 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15751__delegate.call(this,e_mail,p__15752);};
mail_to15751.cljs$lang$maxFixedArity = 1;
mail_to15751.cljs$lang$applyTo = (function (arglist__15755){
var e_mail = cljs.core.first(arglist__15755);
var p__15752 = cljs.core.rest(arglist__15755);
return mail_to15751__delegate(e_mail,p__15752);
});
mail_to15751.cljs$core$IFn$_invoke$arity$variadic = mail_to15751__delegate;
return mail_to15751;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15751);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15756 = (function unordered_list15756(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15761(s__15762){return (new cljs.core.LazySeq(null,(function (){var s__15762__$1 = s__15762;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15762__$1);if(temp__4092__auto__)
{var s__15762__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15762__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15762__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15764 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15763 = 0;while(true){
if((i__15763 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15763);cljs.core.chunk_append.call(null,b__15764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15765 = (i__15763 + 1);
i__15763 = G__15765;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15764),iter__15761.call(null,cljs.core.chunk_rest.call(null,s__15762__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15764),null);
}
} else
{var x = cljs.core.first.call(null,s__15762__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15761.call(null,cljs.core.rest.call(null,s__15762__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15756);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15766 = (function ordered_list15766(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15771(s__15772){return (new cljs.core.LazySeq(null,(function (){var s__15772__$1 = s__15772;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15772__$1);if(temp__4092__auto__)
{var s__15772__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15772__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15772__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15774 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15773 = 0;while(true){
if((i__15773 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15773);cljs.core.chunk_append.call(null,b__15774,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15775 = (i__15773 + 1);
i__15773 = G__15775;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15774),iter__15771.call(null,cljs.core.chunk_rest.call(null,s__15772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15774),null);
}
} else
{var x = cljs.core.first.call(null,s__15772__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15771.call(null,cljs.core.rest.call(null,s__15772__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15766);
/**
* Create an image element.
*/
sablono.core.image15776 = (function() {
var image15776 = null;
var image15776__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15776__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15776 = function(src,alt){
switch(arguments.length){
case 1:
return image15776__1.call(this,src);
case 2:
return image15776__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15776.cljs$core$IFn$_invoke$arity$1 = image15776__1;
image15776.cljs$core$IFn$_invoke$arity$2 = image15776__2;
return image15776;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15776);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15777_SHARP_,p2__15778_SHARP_){return [cljs.core.str(p1__15777_SHARP_),cljs.core.str("["),cljs.core.str(p2__15778_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15779_SHARP_,p2__15780_SHARP_){return [cljs.core.str(p1__15779_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15780_SHARP_)].join('');
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
sablono.core.hidden_field15781 = (function() {
var hidden_field15781 = null;
var hidden_field15781__1 = (function (name){return hidden_field15781.call(null,name,null);
});
var hidden_field15781__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15781 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15781__1.call(this,name);
case 2:
return hidden_field15781__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15781.cljs$core$IFn$_invoke$arity$1 = hidden_field15781__1;
hidden_field15781.cljs$core$IFn$_invoke$arity$2 = hidden_field15781__2;
return hidden_field15781;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15781);
/**
* Creates a new text input field.
*/
sablono.core.text_field15782 = (function() {
var text_field15782 = null;
var text_field15782__1 = (function (name){return text_field15782.call(null,name,null);
});
var text_field15782__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15782 = function(name,value){
switch(arguments.length){
case 1:
return text_field15782__1.call(this,name);
case 2:
return text_field15782__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15782.cljs$core$IFn$_invoke$arity$1 = text_field15782__1;
text_field15782.cljs$core$IFn$_invoke$arity$2 = text_field15782__2;
return text_field15782;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15782);
/**
* Creates a new password field.
*/
sablono.core.password_field15783 = (function() {
var password_field15783 = null;
var password_field15783__1 = (function (name){return password_field15783.call(null,name,null);
});
var password_field15783__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15783 = function(name,value){
switch(arguments.length){
case 1:
return password_field15783__1.call(this,name);
case 2:
return password_field15783__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15783.cljs$core$IFn$_invoke$arity$1 = password_field15783__1;
password_field15783.cljs$core$IFn$_invoke$arity$2 = password_field15783__2;
return password_field15783;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15783);
/**
* Creates a new email input field.
*/
sablono.core.email_field15784 = (function() {
var email_field15784 = null;
var email_field15784__1 = (function (name){return email_field15784.call(null,name,null);
});
var email_field15784__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15784 = function(name,value){
switch(arguments.length){
case 1:
return email_field15784__1.call(this,name);
case 2:
return email_field15784__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15784.cljs$core$IFn$_invoke$arity$1 = email_field15784__1;
email_field15784.cljs$core$IFn$_invoke$arity$2 = email_field15784__2;
return email_field15784;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15784);
/**
* Creates a check box.
*/
sablono.core.check_box15785 = (function() {
var check_box15785 = null;
var check_box15785__1 = (function (name){return check_box15785.call(null,name,null);
});
var check_box15785__2 = (function (name,checked_QMARK_){return check_box15785.call(null,name,checked_QMARK_,"true");
});
var check_box15785__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15785 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15785__1.call(this,name);
case 2:
return check_box15785__2.call(this,name,checked_QMARK_);
case 3:
return check_box15785__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15785.cljs$core$IFn$_invoke$arity$1 = check_box15785__1;
check_box15785.cljs$core$IFn$_invoke$arity$2 = check_box15785__2;
check_box15785.cljs$core$IFn$_invoke$arity$3 = check_box15785__3;
return check_box15785;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15785);
/**
* Creates a radio button.
*/
sablono.core.radio_button15786 = (function() {
var radio_button15786 = null;
var radio_button15786__1 = (function (group){return radio_button15786.call(null,group,null);
});
var radio_button15786__2 = (function (group,checked_QMARK_){return radio_button15786.call(null,group,checked_QMARK_,"true");
});
var radio_button15786__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15786 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15786__1.call(this,group);
case 2:
return radio_button15786__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15786__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15786.cljs$core$IFn$_invoke$arity$1 = radio_button15786__1;
radio_button15786.cljs$core$IFn$_invoke$arity$2 = radio_button15786__2;
radio_button15786.cljs$core$IFn$_invoke$arity$3 = radio_button15786__3;
return radio_button15786;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15786);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15787 = (function() {
var select_options15787 = null;
var select_options15787__1 = (function (coll){return select_options15787.call(null,coll,null);
});
var select_options15787__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15796(s__15797){return (new cljs.core.LazySeq(null,(function (){var s__15797__$1 = s__15797;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15797__$1);if(temp__4092__auto__)
{var s__15797__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15797__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15797__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15799 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15798 = 0;while(true){
if((i__15798 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15798);cljs.core.chunk_append.call(null,b__15799,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15802 = x;var text = cljs.core.nth.call(null,vec__15802,0,null);var val = cljs.core.nth.call(null,vec__15802,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15787.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15804 = (i__15798 + 1);
i__15798 = G__15804;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15799),iter__15796.call(null,cljs.core.chunk_rest.call(null,s__15797__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15799),null);
}
} else
{var x = cljs.core.first.call(null,s__15797__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15803 = x;var text = cljs.core.nth.call(null,vec__15803,0,null);var val = cljs.core.nth.call(null,vec__15803,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15787.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15796.call(null,cljs.core.rest.call(null,s__15797__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15787 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15787__1.call(this,coll);
case 2:
return select_options15787__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15787.cljs$core$IFn$_invoke$arity$1 = select_options15787__1;
select_options15787.cljs$core$IFn$_invoke$arity$2 = select_options15787__2;
return select_options15787;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15787);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15805 = (function() {
var drop_down15805 = null;
var drop_down15805__2 = (function (name,options){return drop_down15805.call(null,name,options,null);
});
var drop_down15805__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15805 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15805__2.call(this,name,options);
case 3:
return drop_down15805__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15805.cljs$core$IFn$_invoke$arity$2 = drop_down15805__2;
drop_down15805.cljs$core$IFn$_invoke$arity$3 = drop_down15805__3;
return drop_down15805;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15805);
/**
* Creates a text area element.
*/
sablono.core.text_area15806 = (function() {
var text_area15806 = null;
var text_area15806__1 = (function (name){return text_area15806.call(null,name,null);
});
var text_area15806__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15806 = function(name,value){
switch(arguments.length){
case 1:
return text_area15806__1.call(this,name);
case 2:
return text_area15806__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15806.cljs$core$IFn$_invoke$arity$1 = text_area15806__1;
text_area15806.cljs$core$IFn$_invoke$arity$2 = text_area15806__2;
return text_area15806;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15806);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15807 = (function file_upload15807(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15807);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15808 = (function label15808(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15808);
/**
* Creates a submit button.
*/
sablono.core.submit_button15809 = (function submit_button15809(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15809);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15810 = (function reset_button15810(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15810);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15811 = (function() { 
var form_to15811__delegate = function (p__15812,body){var vec__15814 = p__15812;var method = cljs.core.nth.call(null,vec__15814,0,null);var action = cljs.core.nth.call(null,vec__15814,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15811 = function (p__15812,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15811__delegate.call(this,p__15812,body);};
form_to15811.cljs$lang$maxFixedArity = 1;
form_to15811.cljs$lang$applyTo = (function (arglist__15815){
var p__15812 = cljs.core.first(arglist__15815);
var body = cljs.core.rest(arglist__15815);
return form_to15811__delegate(p__15812,body);
});
form_to15811.cljs$core$IFn$_invoke$arity$variadic = form_to15811__delegate;
return form_to15811;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15811);

//# sourceMappingURL=core.js.map