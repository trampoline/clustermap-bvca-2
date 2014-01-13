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
var G__15630__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15629 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15629,0,null);var body = cljs.core.nthnext.call(null,vec__15629,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15630 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15630__delegate.call(this,args);};
G__15630.cljs$lang$maxFixedArity = 0;
G__15630.cljs$lang$applyTo = (function (arglist__15631){
var args = cljs.core.seq(arglist__15631);
return G__15630__delegate(args);
});
G__15630.cljs$core$IFn$_invoke$arity$variadic = G__15630__delegate;
return G__15630;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15636(s__15637){return (new cljs.core.LazySeq(null,(function (){var s__15637__$1 = s__15637;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15637__$1);if(temp__4092__auto__)
{var s__15637__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15637__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15637__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15639 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15638 = 0;while(true){
if((i__15638 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15638);cljs.core.chunk_append.call(null,b__15639,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15640 = (i__15638 + 1);
i__15638 = G__15640;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15639),iter__15636.call(null,cljs.core.chunk_rest.call(null,s__15637__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15639),null);
}
} else
{var args = cljs.core.first.call(null,s__15637__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15636.call(null,cljs.core.rest.call(null,s__15637__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__15645(s__15646){return (new cljs.core.LazySeq(null,(function (){var s__15646__$1 = s__15646;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15646__$1);if(temp__4092__auto__)
{var s__15646__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15646__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15646__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15648 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15647 = 0;while(true){
if((i__15647 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__15647);cljs.core.chunk_append.call(null,b__15648,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__15649 = (i__15647 + 1);
i__15647 = G__15649;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15648),iter__15645.call(null,cljs.core.chunk_rest.call(null,s__15646__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15648),null);
}
} else
{var script = cljs.core.first.call(null,s__15646__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__15645.call(null,cljs.core.rest.call(null,s__15646__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__15650){
var scripts = cljs.core.seq(arglist__15650);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15655(s__15656){return (new cljs.core.LazySeq(null,(function (){var s__15656__$1 = s__15656;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15656__$1);if(temp__4092__auto__)
{var s__15656__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15656__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15656__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15658 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15657 = 0;while(true){
if((i__15657 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15657);cljs.core.chunk_append.call(null,b__15658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15659 = (i__15657 + 1);
i__15657 = G__15659;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15658),iter__15655.call(null,cljs.core.chunk_rest.call(null,s__15656__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15658),null);
}
} else
{var style = cljs.core.first.call(null,s__15656__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15655.call(null,cljs.core.rest.call(null,s__15656__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__15660){
var styles = cljs.core.seq(arglist__15660);
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
sablono.core.link_to15661 = (function() { 
var link_to15661__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15661 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15661__delegate.call(this,url,content);};
link_to15661.cljs$lang$maxFixedArity = 1;
link_to15661.cljs$lang$applyTo = (function (arglist__15662){
var url = cljs.core.first(arglist__15662);
var content = cljs.core.rest(arglist__15662);
return link_to15661__delegate(url,content);
});
link_to15661.cljs$core$IFn$_invoke$arity$variadic = link_to15661__delegate;
return link_to15661;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15661);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15663 = (function() { 
var mail_to15663__delegate = function (e_mail,p__15664){var vec__15666 = p__15664;var content = cljs.core.nth.call(null,vec__15666,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15663 = function (e_mail,var_args){
var p__15664 = null;if (arguments.length > 1) {
  p__15664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15663__delegate.call(this,e_mail,p__15664);};
mail_to15663.cljs$lang$maxFixedArity = 1;
mail_to15663.cljs$lang$applyTo = (function (arglist__15667){
var e_mail = cljs.core.first(arglist__15667);
var p__15664 = cljs.core.rest(arglist__15667);
return mail_to15663__delegate(e_mail,p__15664);
});
mail_to15663.cljs$core$IFn$_invoke$arity$variadic = mail_to15663__delegate;
return mail_to15663;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15663);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15668 = (function unordered_list15668(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15673(s__15674){return (new cljs.core.LazySeq(null,(function (){var s__15674__$1 = s__15674;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15674__$1);if(temp__4092__auto__)
{var s__15674__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15674__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15674__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15676 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15675 = 0;while(true){
if((i__15675 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15675);cljs.core.chunk_append.call(null,b__15676,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15677 = (i__15675 + 1);
i__15675 = G__15677;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15676),iter__15673.call(null,cljs.core.chunk_rest.call(null,s__15674__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15676),null);
}
} else
{var x = cljs.core.first.call(null,s__15674__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15673.call(null,cljs.core.rest.call(null,s__15674__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15668);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15678 = (function ordered_list15678(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15683(s__15684){return (new cljs.core.LazySeq(null,(function (){var s__15684__$1 = s__15684;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15684__$1);if(temp__4092__auto__)
{var s__15684__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15684__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15684__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15686 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15685 = 0;while(true){
if((i__15685 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15685);cljs.core.chunk_append.call(null,b__15686,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15687 = (i__15685 + 1);
i__15685 = G__15687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15686),iter__15683.call(null,cljs.core.chunk_rest.call(null,s__15684__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15686),null);
}
} else
{var x = cljs.core.first.call(null,s__15684__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15683.call(null,cljs.core.rest.call(null,s__15684__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15678);
/**
* Create an image element.
*/
sablono.core.image15688 = (function() {
var image15688 = null;
var image15688__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15688__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15688 = function(src,alt){
switch(arguments.length){
case 1:
return image15688__1.call(this,src);
case 2:
return image15688__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15688.cljs$core$IFn$_invoke$arity$1 = image15688__1;
image15688.cljs$core$IFn$_invoke$arity$2 = image15688__2;
return image15688;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15688);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15689_SHARP_,p2__15690_SHARP_){return [cljs.core.str(p1__15689_SHARP_),cljs.core.str("["),cljs.core.str(p2__15690_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15691_SHARP_,p2__15692_SHARP_){return [cljs.core.str(p1__15691_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15692_SHARP_)].join('');
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
sablono.core.hidden_field15693 = (function() {
var hidden_field15693 = null;
var hidden_field15693__1 = (function (name){return hidden_field15693.call(null,name,null);
});
var hidden_field15693__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15693 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15693__1.call(this,name);
case 2:
return hidden_field15693__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15693.cljs$core$IFn$_invoke$arity$1 = hidden_field15693__1;
hidden_field15693.cljs$core$IFn$_invoke$arity$2 = hidden_field15693__2;
return hidden_field15693;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15693);
/**
* Creates a new text input field.
*/
sablono.core.text_field15694 = (function() {
var text_field15694 = null;
var text_field15694__1 = (function (name){return text_field15694.call(null,name,null);
});
var text_field15694__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15694 = function(name,value){
switch(arguments.length){
case 1:
return text_field15694__1.call(this,name);
case 2:
return text_field15694__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15694.cljs$core$IFn$_invoke$arity$1 = text_field15694__1;
text_field15694.cljs$core$IFn$_invoke$arity$2 = text_field15694__2;
return text_field15694;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15694);
/**
* Creates a new password field.
*/
sablono.core.password_field15695 = (function() {
var password_field15695 = null;
var password_field15695__1 = (function (name){return password_field15695.call(null,name,null);
});
var password_field15695__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15695 = function(name,value){
switch(arguments.length){
case 1:
return password_field15695__1.call(this,name);
case 2:
return password_field15695__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15695.cljs$core$IFn$_invoke$arity$1 = password_field15695__1;
password_field15695.cljs$core$IFn$_invoke$arity$2 = password_field15695__2;
return password_field15695;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15695);
/**
* Creates a new email input field.
*/
sablono.core.email_field15696 = (function() {
var email_field15696 = null;
var email_field15696__1 = (function (name){return email_field15696.call(null,name,null);
});
var email_field15696__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15696 = function(name,value){
switch(arguments.length){
case 1:
return email_field15696__1.call(this,name);
case 2:
return email_field15696__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15696.cljs$core$IFn$_invoke$arity$1 = email_field15696__1;
email_field15696.cljs$core$IFn$_invoke$arity$2 = email_field15696__2;
return email_field15696;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15696);
/**
* Creates a check box.
*/
sablono.core.check_box15697 = (function() {
var check_box15697 = null;
var check_box15697__1 = (function (name){return check_box15697.call(null,name,null);
});
var check_box15697__2 = (function (name,checked_QMARK_){return check_box15697.call(null,name,checked_QMARK_,"true");
});
var check_box15697__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15697 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15697__1.call(this,name);
case 2:
return check_box15697__2.call(this,name,checked_QMARK_);
case 3:
return check_box15697__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15697.cljs$core$IFn$_invoke$arity$1 = check_box15697__1;
check_box15697.cljs$core$IFn$_invoke$arity$2 = check_box15697__2;
check_box15697.cljs$core$IFn$_invoke$arity$3 = check_box15697__3;
return check_box15697;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15697);
/**
* Creates a radio button.
*/
sablono.core.radio_button15698 = (function() {
var radio_button15698 = null;
var radio_button15698__1 = (function (group){return radio_button15698.call(null,group,null);
});
var radio_button15698__2 = (function (group,checked_QMARK_){return radio_button15698.call(null,group,checked_QMARK_,"true");
});
var radio_button15698__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15698 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15698__1.call(this,group);
case 2:
return radio_button15698__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15698__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15698.cljs$core$IFn$_invoke$arity$1 = radio_button15698__1;
radio_button15698.cljs$core$IFn$_invoke$arity$2 = radio_button15698__2;
radio_button15698.cljs$core$IFn$_invoke$arity$3 = radio_button15698__3;
return radio_button15698;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15698);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15699 = (function() {
var select_options15699 = null;
var select_options15699__1 = (function (coll){return select_options15699.call(null,coll,null);
});
var select_options15699__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15708(s__15709){return (new cljs.core.LazySeq(null,(function (){var s__15709__$1 = s__15709;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15709__$1);if(temp__4092__auto__)
{var s__15709__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15709__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15709__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15711 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15710 = 0;while(true){
if((i__15710 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15710);cljs.core.chunk_append.call(null,b__15711,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15714 = x;var text = cljs.core.nth.call(null,vec__15714,0,null);var val = cljs.core.nth.call(null,vec__15714,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15699.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15716 = (i__15710 + 1);
i__15710 = G__15716;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15711),iter__15708.call(null,cljs.core.chunk_rest.call(null,s__15709__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15711),null);
}
} else
{var x = cljs.core.first.call(null,s__15709__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15715 = x;var text = cljs.core.nth.call(null,vec__15715,0,null);var val = cljs.core.nth.call(null,vec__15715,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15699.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15708.call(null,cljs.core.rest.call(null,s__15709__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15699 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15699__1.call(this,coll);
case 2:
return select_options15699__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15699.cljs$core$IFn$_invoke$arity$1 = select_options15699__1;
select_options15699.cljs$core$IFn$_invoke$arity$2 = select_options15699__2;
return select_options15699;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15699);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15717 = (function() {
var drop_down15717 = null;
var drop_down15717__2 = (function (name,options){return drop_down15717.call(null,name,options,null);
});
var drop_down15717__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15717 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15717__2.call(this,name,options);
case 3:
return drop_down15717__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15717.cljs$core$IFn$_invoke$arity$2 = drop_down15717__2;
drop_down15717.cljs$core$IFn$_invoke$arity$3 = drop_down15717__3;
return drop_down15717;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15717);
/**
* Creates a text area element.
*/
sablono.core.text_area15718 = (function() {
var text_area15718 = null;
var text_area15718__1 = (function (name){return text_area15718.call(null,name,null);
});
var text_area15718__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15718 = function(name,value){
switch(arguments.length){
case 1:
return text_area15718__1.call(this,name);
case 2:
return text_area15718__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15718.cljs$core$IFn$_invoke$arity$1 = text_area15718__1;
text_area15718.cljs$core$IFn$_invoke$arity$2 = text_area15718__2;
return text_area15718;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15718);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15719 = (function file_upload15719(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15719);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15720 = (function label15720(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15720);
/**
* Creates a submit button.
*/
sablono.core.submit_button15721 = (function submit_button15721(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15721);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15722 = (function reset_button15722(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15722);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15723 = (function() { 
var form_to15723__delegate = function (p__15724,body){var vec__15726 = p__15724;var method = cljs.core.nth.call(null,vec__15726,0,null);var action = cljs.core.nth.call(null,vec__15726,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15723 = function (p__15724,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15723__delegate.call(this,p__15724,body);};
form_to15723.cljs$lang$maxFixedArity = 1;
form_to15723.cljs$lang$applyTo = (function (arglist__15727){
var p__15724 = cljs.core.first(arglist__15727);
var body = cljs.core.rest(arglist__15727);
return form_to15723__delegate(p__15724,body);
});
form_to15723.cljs$core$IFn$_invoke$arity$variadic = form_to15723__delegate;
return form_to15723;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15723);

//# sourceMappingURL=core.js.map