// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_50372 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_50373 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_50374 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_50373,table_section_wrapper_50373,opt_wrapper_50372,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_50374,table_section_wrapper_50373,cell_wrapper_50374,opt_wrapper_50372,table_section_wrapper_50373,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_50373]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__50379 = cljs.core.seq.call(null,tbody);var chunk__50380 = null;var count__50381 = 0;var i__50382 = 0;while(true){
if((i__50382 < count__50381))
{var child = cljs.core._nth.call(null,chunk__50380,i__50382);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50383 = seq__50379;
var G__50384 = chunk__50380;
var G__50385 = count__50381;
var G__50386 = (i__50382 + 1);
seq__50379 = G__50383;
chunk__50380 = G__50384;
count__50381 = G__50385;
i__50382 = G__50386;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50379);if(temp__4092__auto__)
{var seq__50379__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50379__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50379__$1);{
var G__50387 = cljs.core.chunk_rest.call(null,seq__50379__$1);
var G__50388 = c__4189__auto__;
var G__50389 = cljs.core.count.call(null,c__4189__auto__);
var G__50390 = 0;
seq__50379 = G__50387;
chunk__50380 = G__50388;
count__50381 = G__50389;
i__50382 = G__50390;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__50379__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50391 = cljs.core.next.call(null,seq__50379__$1);
var G__50392 = null;
var G__50393 = 0;
var G__50394 = 0;
seq__50379 = G__50391;
chunk__50380 = G__50392;
count__50381 = G__50393;
i__50382 = G__50394;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__50396 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__50396,0,null);var start_wrap = cljs.core.nth.call(null,vec__50396,1,null);var end_wrap = cljs.core.nth.call(null,vec__50396,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__50397 = wrapper.lastChild;
var G__50398 = (level - 1);
wrapper = G__50397;
level = G__50398;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj50400 = {};return obj50400;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__50401){
var mesg = cljs.core.seq(arglist__50401);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__50402){
var mesg = cljs.core.seq(arglist__50402);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__50403){
var contents = cljs.core.seq(arglist__50403);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__50404_SHARP_){return p1__50404_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__50405_SHARP_,p2__50406_SHARP_){return goog.dom.insertChildAt(p1__50405_SHARP_,p2__50406_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50408_SHARP_,p2__50407_SHARP_){return goog.dom.insertSiblingBefore(p2__50407_SHARP_,p1__50408_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50410_SHARP_,p2__50409_SHARP_){return goog.dom.insertSiblingAfter(p2__50409_SHARP_,p1__50410_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__50412_SHARP_,p2__50411_SHARP_){return goog.dom.replaceNode(p2__50411_SHARP_,p1__50412_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__50417_50421 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50418_50422 = null;var count__50419_50423 = 0;var i__50420_50424 = 0;while(true){
if((i__50420_50424 < count__50419_50423))
{var n_50425 = cljs.core._nth.call(null,chunk__50418_50422,i__50420_50424);goog.style.setStyle(n_50425,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50426 = seq__50417_50421;
var G__50427 = chunk__50418_50422;
var G__50428 = count__50419_50423;
var G__50429 = (i__50420_50424 + 1);
seq__50417_50421 = G__50426;
chunk__50418_50422 = G__50427;
count__50419_50423 = G__50428;
i__50420_50424 = G__50429;
continue;
}
} else
{var temp__4092__auto___50430 = cljs.core.seq.call(null,seq__50417_50421);if(temp__4092__auto___50430)
{var seq__50417_50431__$1 = temp__4092__auto___50430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50417_50431__$1))
{var c__4189__auto___50432 = cljs.core.chunk_first.call(null,seq__50417_50431__$1);{
var G__50433 = cljs.core.chunk_rest.call(null,seq__50417_50431__$1);
var G__50434 = c__4189__auto___50432;
var G__50435 = cljs.core.count.call(null,c__4189__auto___50432);
var G__50436 = 0;
seq__50417_50421 = G__50433;
chunk__50418_50422 = G__50434;
count__50419_50423 = G__50435;
i__50420_50424 = G__50436;
continue;
}
} else
{var n_50437 = cljs.core.first.call(null,seq__50417_50431__$1);goog.style.setStyle(n_50437,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50438 = cljs.core.next.call(null,seq__50417_50431__$1);
var G__50439 = null;
var G__50440 = 0;
var G__50441 = 0;
seq__50417_50421 = G__50438;
chunk__50418_50422 = G__50439;
count__50419_50423 = G__50440;
i__50420_50424 = G__50441;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__50442){
var content = cljs.core.first(arglist__50442);
arglist__50442 = cljs.core.next(arglist__50442);
var name = cljs.core.first(arglist__50442);
var value = cljs.core.rest(arglist__50442);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__50447_50451 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50448_50452 = null;var count__50449_50453 = 0;var i__50450_50454 = 0;while(true){
if((i__50450_50454 < count__50449_50453))
{var n_50455 = cljs.core._nth.call(null,chunk__50448_50452,i__50450_50454);n_50455.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50456 = seq__50447_50451;
var G__50457 = chunk__50448_50452;
var G__50458 = count__50449_50453;
var G__50459 = (i__50450_50454 + 1);
seq__50447_50451 = G__50456;
chunk__50448_50452 = G__50457;
count__50449_50453 = G__50458;
i__50450_50454 = G__50459;
continue;
}
} else
{var temp__4092__auto___50460 = cljs.core.seq.call(null,seq__50447_50451);if(temp__4092__auto___50460)
{var seq__50447_50461__$1 = temp__4092__auto___50460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50447_50461__$1))
{var c__4189__auto___50462 = cljs.core.chunk_first.call(null,seq__50447_50461__$1);{
var G__50463 = cljs.core.chunk_rest.call(null,seq__50447_50461__$1);
var G__50464 = c__4189__auto___50462;
var G__50465 = cljs.core.count.call(null,c__4189__auto___50462);
var G__50466 = 0;
seq__50447_50451 = G__50463;
chunk__50448_50452 = G__50464;
count__50449_50453 = G__50465;
i__50450_50454 = G__50466;
continue;
}
} else
{var n_50467 = cljs.core.first.call(null,seq__50447_50461__$1);n_50467.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50468 = cljs.core.next.call(null,seq__50447_50461__$1);
var G__50469 = null;
var G__50470 = 0;
var G__50471 = 0;
seq__50447_50451 = G__50468;
chunk__50448_50452 = G__50469;
count__50449_50453 = G__50470;
i__50450_50454 = G__50471;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__50472){
var content = cljs.core.first(arglist__50472);
arglist__50472 = cljs.core.next(arglist__50472);
var name = cljs.core.first(arglist__50472);
var value = cljs.core.rest(arglist__50472);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__50477_50481 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50478_50482 = null;var count__50479_50483 = 0;var i__50480_50484 = 0;while(true){
if((i__50480_50484 < count__50479_50483))
{var n_50485 = cljs.core._nth.call(null,chunk__50478_50482,i__50480_50484);n_50485.removeAttribute(cljs.core.name.call(null,name));
{
var G__50486 = seq__50477_50481;
var G__50487 = chunk__50478_50482;
var G__50488 = count__50479_50483;
var G__50489 = (i__50480_50484 + 1);
seq__50477_50481 = G__50486;
chunk__50478_50482 = G__50487;
count__50479_50483 = G__50488;
i__50480_50484 = G__50489;
continue;
}
} else
{var temp__4092__auto___50490 = cljs.core.seq.call(null,seq__50477_50481);if(temp__4092__auto___50490)
{var seq__50477_50491__$1 = temp__4092__auto___50490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50477_50491__$1))
{var c__4189__auto___50492 = cljs.core.chunk_first.call(null,seq__50477_50491__$1);{
var G__50493 = cljs.core.chunk_rest.call(null,seq__50477_50491__$1);
var G__50494 = c__4189__auto___50492;
var G__50495 = cljs.core.count.call(null,c__4189__auto___50492);
var G__50496 = 0;
seq__50477_50481 = G__50493;
chunk__50478_50482 = G__50494;
count__50479_50483 = G__50495;
i__50480_50484 = G__50496;
continue;
}
} else
{var n_50497 = cljs.core.first.call(null,seq__50477_50491__$1);n_50497.removeAttribute(cljs.core.name.call(null,name));
{
var G__50498 = cljs.core.next.call(null,seq__50477_50491__$1);
var G__50499 = null;
var G__50500 = 0;
var G__50501 = 0;
seq__50477_50481 = G__50498;
chunk__50478_50482 = G__50499;
count__50479_50483 = G__50500;
i__50480_50484 = G__50501;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__50503 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__50503,0,null);var v = cljs.core.nth.call(null,vec__50503,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__50504_SHARP_){var attr = attrs__$1.item(p1__50504_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__50511_50517 = cljs.core.seq.call(null,styles);var chunk__50512_50518 = null;var count__50513_50519 = 0;var i__50514_50520 = 0;while(true){
if((i__50514_50520 < count__50513_50519))
{var vec__50515_50521 = cljs.core._nth.call(null,chunk__50512_50518,i__50514_50520);var name_50522 = cljs.core.nth.call(null,vec__50515_50521,0,null);var value_50523 = cljs.core.nth.call(null,vec__50515_50521,1,null);domina.set_style_BANG_.call(null,content,name_50522,value_50523);
{
var G__50524 = seq__50511_50517;
var G__50525 = chunk__50512_50518;
var G__50526 = count__50513_50519;
var G__50527 = (i__50514_50520 + 1);
seq__50511_50517 = G__50524;
chunk__50512_50518 = G__50525;
count__50513_50519 = G__50526;
i__50514_50520 = G__50527;
continue;
}
} else
{var temp__4092__auto___50528 = cljs.core.seq.call(null,seq__50511_50517);if(temp__4092__auto___50528)
{var seq__50511_50529__$1 = temp__4092__auto___50528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50511_50529__$1))
{var c__4189__auto___50530 = cljs.core.chunk_first.call(null,seq__50511_50529__$1);{
var G__50531 = cljs.core.chunk_rest.call(null,seq__50511_50529__$1);
var G__50532 = c__4189__auto___50530;
var G__50533 = cljs.core.count.call(null,c__4189__auto___50530);
var G__50534 = 0;
seq__50511_50517 = G__50531;
chunk__50512_50518 = G__50532;
count__50513_50519 = G__50533;
i__50514_50520 = G__50534;
continue;
}
} else
{var vec__50516_50535 = cljs.core.first.call(null,seq__50511_50529__$1);var name_50536 = cljs.core.nth.call(null,vec__50516_50535,0,null);var value_50537 = cljs.core.nth.call(null,vec__50516_50535,1,null);domina.set_style_BANG_.call(null,content,name_50536,value_50537);
{
var G__50538 = cljs.core.next.call(null,seq__50511_50529__$1);
var G__50539 = null;
var G__50540 = 0;
var G__50541 = 0;
seq__50511_50517 = G__50538;
chunk__50512_50518 = G__50539;
count__50513_50519 = G__50540;
i__50514_50520 = G__50541;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__50548_50554 = cljs.core.seq.call(null,attrs);var chunk__50549_50555 = null;var count__50550_50556 = 0;var i__50551_50557 = 0;while(true){
if((i__50551_50557 < count__50550_50556))
{var vec__50552_50558 = cljs.core._nth.call(null,chunk__50549_50555,i__50551_50557);var name_50559 = cljs.core.nth.call(null,vec__50552_50558,0,null);var value_50560 = cljs.core.nth.call(null,vec__50552_50558,1,null);domina.set_attr_BANG_.call(null,content,name_50559,value_50560);
{
var G__50561 = seq__50548_50554;
var G__50562 = chunk__50549_50555;
var G__50563 = count__50550_50556;
var G__50564 = (i__50551_50557 + 1);
seq__50548_50554 = G__50561;
chunk__50549_50555 = G__50562;
count__50550_50556 = G__50563;
i__50551_50557 = G__50564;
continue;
}
} else
{var temp__4092__auto___50565 = cljs.core.seq.call(null,seq__50548_50554);if(temp__4092__auto___50565)
{var seq__50548_50566__$1 = temp__4092__auto___50565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50548_50566__$1))
{var c__4189__auto___50567 = cljs.core.chunk_first.call(null,seq__50548_50566__$1);{
var G__50568 = cljs.core.chunk_rest.call(null,seq__50548_50566__$1);
var G__50569 = c__4189__auto___50567;
var G__50570 = cljs.core.count.call(null,c__4189__auto___50567);
var G__50571 = 0;
seq__50548_50554 = G__50568;
chunk__50549_50555 = G__50569;
count__50550_50556 = G__50570;
i__50551_50557 = G__50571;
continue;
}
} else
{var vec__50553_50572 = cljs.core.first.call(null,seq__50548_50566__$1);var name_50573 = cljs.core.nth.call(null,vec__50553_50572,0,null);var value_50574 = cljs.core.nth.call(null,vec__50553_50572,1,null);domina.set_attr_BANG_.call(null,content,name_50573,value_50574);
{
var G__50575 = cljs.core.next.call(null,seq__50548_50566__$1);
var G__50576 = null;
var G__50577 = 0;
var G__50578 = 0;
seq__50548_50554 = G__50575;
chunk__50549_50555 = G__50576;
count__50550_50556 = G__50577;
i__50551_50557 = G__50578;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__50583_50587 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50584_50588 = null;var count__50585_50589 = 0;var i__50586_50590 = 0;while(true){
if((i__50586_50590 < count__50585_50589))
{var node_50591 = cljs.core._nth.call(null,chunk__50584_50588,i__50586_50590);goog.dom.classes.add(node_50591,class$);
{
var G__50592 = seq__50583_50587;
var G__50593 = chunk__50584_50588;
var G__50594 = count__50585_50589;
var G__50595 = (i__50586_50590 + 1);
seq__50583_50587 = G__50592;
chunk__50584_50588 = G__50593;
count__50585_50589 = G__50594;
i__50586_50590 = G__50595;
continue;
}
} else
{var temp__4092__auto___50596 = cljs.core.seq.call(null,seq__50583_50587);if(temp__4092__auto___50596)
{var seq__50583_50597__$1 = temp__4092__auto___50596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50583_50597__$1))
{var c__4189__auto___50598 = cljs.core.chunk_first.call(null,seq__50583_50597__$1);{
var G__50599 = cljs.core.chunk_rest.call(null,seq__50583_50597__$1);
var G__50600 = c__4189__auto___50598;
var G__50601 = cljs.core.count.call(null,c__4189__auto___50598);
var G__50602 = 0;
seq__50583_50587 = G__50599;
chunk__50584_50588 = G__50600;
count__50585_50589 = G__50601;
i__50586_50590 = G__50602;
continue;
}
} else
{var node_50603 = cljs.core.first.call(null,seq__50583_50597__$1);goog.dom.classes.add(node_50603,class$);
{
var G__50604 = cljs.core.next.call(null,seq__50583_50597__$1);
var G__50605 = null;
var G__50606 = 0;
var G__50607 = 0;
seq__50583_50587 = G__50604;
chunk__50584_50588 = G__50605;
count__50585_50589 = G__50606;
i__50586_50590 = G__50607;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__50612_50616 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50613_50617 = null;var count__50614_50618 = 0;var i__50615_50619 = 0;while(true){
if((i__50615_50619 < count__50614_50618))
{var node_50620 = cljs.core._nth.call(null,chunk__50613_50617,i__50615_50619);goog.dom.classes.remove(node_50620,class$);
{
var G__50621 = seq__50612_50616;
var G__50622 = chunk__50613_50617;
var G__50623 = count__50614_50618;
var G__50624 = (i__50615_50619 + 1);
seq__50612_50616 = G__50621;
chunk__50613_50617 = G__50622;
count__50614_50618 = G__50623;
i__50615_50619 = G__50624;
continue;
}
} else
{var temp__4092__auto___50625 = cljs.core.seq.call(null,seq__50612_50616);if(temp__4092__auto___50625)
{var seq__50612_50626__$1 = temp__4092__auto___50625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50612_50626__$1))
{var c__4189__auto___50627 = cljs.core.chunk_first.call(null,seq__50612_50626__$1);{
var G__50628 = cljs.core.chunk_rest.call(null,seq__50612_50626__$1);
var G__50629 = c__4189__auto___50627;
var G__50630 = cljs.core.count.call(null,c__4189__auto___50627);
var G__50631 = 0;
seq__50612_50616 = G__50628;
chunk__50613_50617 = G__50629;
count__50614_50618 = G__50630;
i__50615_50619 = G__50631;
continue;
}
} else
{var node_50632 = cljs.core.first.call(null,seq__50612_50626__$1);goog.dom.classes.remove(node_50632,class$);
{
var G__50633 = cljs.core.next.call(null,seq__50612_50626__$1);
var G__50634 = null;
var G__50635 = 0;
var G__50636 = 0;
seq__50612_50616 = G__50633;
chunk__50613_50617 = G__50634;
count__50614_50618 = G__50635;
i__50615_50619 = G__50636;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__50641_50645 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50642_50646 = null;var count__50643_50647 = 0;var i__50644_50648 = 0;while(true){
if((i__50644_50648 < count__50643_50647))
{var node_50649 = cljs.core._nth.call(null,chunk__50642_50646,i__50644_50648);goog.dom.classes.toggle(node_50649,class$);
{
var G__50650 = seq__50641_50645;
var G__50651 = chunk__50642_50646;
var G__50652 = count__50643_50647;
var G__50653 = (i__50644_50648 + 1);
seq__50641_50645 = G__50650;
chunk__50642_50646 = G__50651;
count__50643_50647 = G__50652;
i__50644_50648 = G__50653;
continue;
}
} else
{var temp__4092__auto___50654 = cljs.core.seq.call(null,seq__50641_50645);if(temp__4092__auto___50654)
{var seq__50641_50655__$1 = temp__4092__auto___50654;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50641_50655__$1))
{var c__4189__auto___50656 = cljs.core.chunk_first.call(null,seq__50641_50655__$1);{
var G__50657 = cljs.core.chunk_rest.call(null,seq__50641_50655__$1);
var G__50658 = c__4189__auto___50656;
var G__50659 = cljs.core.count.call(null,c__4189__auto___50656);
var G__50660 = 0;
seq__50641_50645 = G__50657;
chunk__50642_50646 = G__50658;
count__50643_50647 = G__50659;
i__50644_50648 = G__50660;
continue;
}
} else
{var node_50661 = cljs.core.first.call(null,seq__50641_50655__$1);goog.dom.classes.toggle(node_50661,class$);
{
var G__50662 = cljs.core.next.call(null,seq__50641_50655__$1);
var G__50663 = null;
var G__50664 = 0;
var G__50665 = 0;
seq__50641_50645 = G__50662;
chunk__50642_50646 = G__50663;
count__50643_50647 = G__50664;
i__50644_50648 = G__50665;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_50674__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__50670_50675 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50671_50676 = null;var count__50672_50677 = 0;var i__50673_50678 = 0;while(true){
if((i__50673_50678 < count__50672_50677))
{var node_50679 = cljs.core._nth.call(null,chunk__50671_50676,i__50673_50678);goog.dom.classes.set(node_50679,classes_50674__$1);
{
var G__50680 = seq__50670_50675;
var G__50681 = chunk__50671_50676;
var G__50682 = count__50672_50677;
var G__50683 = (i__50673_50678 + 1);
seq__50670_50675 = G__50680;
chunk__50671_50676 = G__50681;
count__50672_50677 = G__50682;
i__50673_50678 = G__50683;
continue;
}
} else
{var temp__4092__auto___50684 = cljs.core.seq.call(null,seq__50670_50675);if(temp__4092__auto___50684)
{var seq__50670_50685__$1 = temp__4092__auto___50684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50670_50685__$1))
{var c__4189__auto___50686 = cljs.core.chunk_first.call(null,seq__50670_50685__$1);{
var G__50687 = cljs.core.chunk_rest.call(null,seq__50670_50685__$1);
var G__50688 = c__4189__auto___50686;
var G__50689 = cljs.core.count.call(null,c__4189__auto___50686);
var G__50690 = 0;
seq__50670_50675 = G__50687;
chunk__50671_50676 = G__50688;
count__50672_50677 = G__50689;
i__50673_50678 = G__50690;
continue;
}
} else
{var node_50691 = cljs.core.first.call(null,seq__50670_50685__$1);goog.dom.classes.set(node_50691,classes_50674__$1);
{
var G__50692 = cljs.core.next.call(null,seq__50670_50685__$1);
var G__50693 = null;
var G__50694 = 0;
var G__50695 = 0;
seq__50670_50675 = G__50692;
chunk__50671_50676 = G__50693;
count__50672_50677 = G__50694;
i__50673_50678 = G__50695;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__50700_50704 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50701_50705 = null;var count__50702_50706 = 0;var i__50703_50707 = 0;while(true){
if((i__50703_50707 < count__50702_50706))
{var node_50708 = cljs.core._nth.call(null,chunk__50701_50705,i__50703_50707);goog.dom.setTextContent(node_50708,value);
{
var G__50709 = seq__50700_50704;
var G__50710 = chunk__50701_50705;
var G__50711 = count__50702_50706;
var G__50712 = (i__50703_50707 + 1);
seq__50700_50704 = G__50709;
chunk__50701_50705 = G__50710;
count__50702_50706 = G__50711;
i__50703_50707 = G__50712;
continue;
}
} else
{var temp__4092__auto___50713 = cljs.core.seq.call(null,seq__50700_50704);if(temp__4092__auto___50713)
{var seq__50700_50714__$1 = temp__4092__auto___50713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50700_50714__$1))
{var c__4189__auto___50715 = cljs.core.chunk_first.call(null,seq__50700_50714__$1);{
var G__50716 = cljs.core.chunk_rest.call(null,seq__50700_50714__$1);
var G__50717 = c__4189__auto___50715;
var G__50718 = cljs.core.count.call(null,c__4189__auto___50715);
var G__50719 = 0;
seq__50700_50704 = G__50716;
chunk__50701_50705 = G__50717;
count__50702_50706 = G__50718;
i__50703_50707 = G__50719;
continue;
}
} else
{var node_50720 = cljs.core.first.call(null,seq__50700_50714__$1);goog.dom.setTextContent(node_50720,value);
{
var G__50721 = cljs.core.next.call(null,seq__50700_50714__$1);
var G__50722 = null;
var G__50723 = 0;
var G__50724 = 0;
seq__50700_50704 = G__50721;
chunk__50701_50705 = G__50722;
count__50702_50706 = G__50723;
i__50703_50707 = G__50724;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__50729_50733 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50730_50734 = null;var count__50731_50735 = 0;var i__50732_50736 = 0;while(true){
if((i__50732_50736 < count__50731_50735))
{var node_50737 = cljs.core._nth.call(null,chunk__50730_50734,i__50732_50736);goog.dom.forms.setValue(node_50737,value);
{
var G__50738 = seq__50729_50733;
var G__50739 = chunk__50730_50734;
var G__50740 = count__50731_50735;
var G__50741 = (i__50732_50736 + 1);
seq__50729_50733 = G__50738;
chunk__50730_50734 = G__50739;
count__50731_50735 = G__50740;
i__50732_50736 = G__50741;
continue;
}
} else
{var temp__4092__auto___50742 = cljs.core.seq.call(null,seq__50729_50733);if(temp__4092__auto___50742)
{var seq__50729_50743__$1 = temp__4092__auto___50742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50729_50743__$1))
{var c__4189__auto___50744 = cljs.core.chunk_first.call(null,seq__50729_50743__$1);{
var G__50745 = cljs.core.chunk_rest.call(null,seq__50729_50743__$1);
var G__50746 = c__4189__auto___50744;
var G__50747 = cljs.core.count.call(null,c__4189__auto___50744);
var G__50748 = 0;
seq__50729_50733 = G__50745;
chunk__50730_50734 = G__50746;
count__50731_50735 = G__50747;
i__50732_50736 = G__50748;
continue;
}
} else
{var node_50749 = cljs.core.first.call(null,seq__50729_50743__$1);goog.dom.forms.setValue(node_50749,value);
{
var G__50750 = cljs.core.next.call(null,seq__50729_50743__$1);
var G__50751 = null;
var G__50752 = 0;
var G__50753 = 0;
seq__50729_50733 = G__50750;
chunk__50730_50734 = G__50751;
count__50731_50735 = G__50752;
i__50732_50736 = G__50753;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_50764 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__50760_50765 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50761_50766 = null;var count__50762_50767 = 0;var i__50763_50768 = 0;while(true){
if((i__50763_50768 < count__50762_50767))
{var node_50769 = cljs.core._nth.call(null,chunk__50761_50766,i__50763_50768);node_50769.innerHTML = value_50764;
{
var G__50770 = seq__50760_50765;
var G__50771 = chunk__50761_50766;
var G__50772 = count__50762_50767;
var G__50773 = (i__50763_50768 + 1);
seq__50760_50765 = G__50770;
chunk__50761_50766 = G__50771;
count__50762_50767 = G__50772;
i__50763_50768 = G__50773;
continue;
}
} else
{var temp__4092__auto___50774 = cljs.core.seq.call(null,seq__50760_50765);if(temp__4092__auto___50774)
{var seq__50760_50775__$1 = temp__4092__auto___50774;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50760_50775__$1))
{var c__4189__auto___50776 = cljs.core.chunk_first.call(null,seq__50760_50775__$1);{
var G__50777 = cljs.core.chunk_rest.call(null,seq__50760_50775__$1);
var G__50778 = c__4189__auto___50776;
var G__50779 = cljs.core.count.call(null,c__4189__auto___50776);
var G__50780 = 0;
seq__50760_50765 = G__50777;
chunk__50761_50766 = G__50778;
count__50762_50767 = G__50779;
i__50763_50768 = G__50780;
continue;
}
} else
{var node_50781 = cljs.core.first.call(null,seq__50760_50775__$1);node_50781.innerHTML = value_50764;
{
var G__50782 = cljs.core.next.call(null,seq__50760_50775__$1);
var G__50783 = null;
var G__50784 = 0;
var G__50785 = 0;
seq__50760_50765 = G__50782;
chunk__50761_50766 = G__50783;
count__50762_50767 = G__50784;
i__50763_50768 = G__50785;
continue;
}
}
} else
{}
}
break;
}
}catch (e50759){if((e50759 instanceof Error))
{var e_50786 = e50759;domina.replace_children_BANG_.call(null,content,value_50764);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50759;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__50793_50797 = cljs.core.seq.call(null,children);var chunk__50794_50798 = null;var count__50795_50799 = 0;var i__50796_50800 = 0;while(true){
if((i__50796_50800 < count__50795_50799))
{var child_50801 = cljs.core._nth.call(null,chunk__50794_50798,i__50796_50800);frag.appendChild(child_50801);
{
var G__50802 = seq__50793_50797;
var G__50803 = chunk__50794_50798;
var G__50804 = count__50795_50799;
var G__50805 = (i__50796_50800 + 1);
seq__50793_50797 = G__50802;
chunk__50794_50798 = G__50803;
count__50795_50799 = G__50804;
i__50796_50800 = G__50805;
continue;
}
} else
{var temp__4092__auto___50806 = cljs.core.seq.call(null,seq__50793_50797);if(temp__4092__auto___50806)
{var seq__50793_50807__$1 = temp__4092__auto___50806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50793_50807__$1))
{var c__4189__auto___50808 = cljs.core.chunk_first.call(null,seq__50793_50807__$1);{
var G__50809 = cljs.core.chunk_rest.call(null,seq__50793_50807__$1);
var G__50810 = c__4189__auto___50808;
var G__50811 = cljs.core.count.call(null,c__4189__auto___50808);
var G__50812 = 0;
seq__50793_50797 = G__50809;
chunk__50794_50798 = G__50810;
count__50795_50799 = G__50811;
i__50796_50800 = G__50812;
continue;
}
} else
{var child_50813 = cljs.core.first.call(null,seq__50793_50807__$1);frag.appendChild(child_50813);
{
var G__50814 = cljs.core.next.call(null,seq__50793_50807__$1);
var G__50815 = null;
var G__50816 = 0;
var G__50817 = 0;
seq__50793_50797 = G__50814;
chunk__50794_50798 = G__50815;
count__50795_50799 = G__50816;
i__50796_50800 = G__50817;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__50787_SHARP_,p2__50788_SHARP_){return f.call(null,p1__50787_SHARP_,p2__50788_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__50819 = list_thing;if(G__50819)
{var bit__4091__auto__ = (G__50819.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50819.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50819.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50819);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50819);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__50820 = content;if(G__50820)
{var bit__4091__auto__ = (G__50820.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50820.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50820.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50820);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50820);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__50821 = content;if(G__50821)
{var bit__4091__auto__ = (G__50821.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50821.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50821.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50821);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50821);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
