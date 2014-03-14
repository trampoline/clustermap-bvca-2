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
var opt_wrapper_28466 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_28467 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_28468 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_28467,table_section_wrapper_28467,opt_wrapper_28466,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_28468,table_section_wrapper_28467,cell_wrapper_28468,opt_wrapper_28466,table_section_wrapper_28467,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_28467]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__28473 = cljs.core.seq.call(null,tbody);var chunk__28474 = null;var count__28475 = 0;var i__28476 = 0;while(true){
if((i__28476 < count__28475))
{var child = cljs.core._nth.call(null,chunk__28474,i__28476);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28477 = seq__28473;
var G__28478 = chunk__28474;
var G__28479 = count__28475;
var G__28480 = (i__28476 + 1);
seq__28473 = G__28477;
chunk__28474 = G__28478;
count__28475 = G__28479;
i__28476 = G__28480;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28473);if(temp__4092__auto__)
{var seq__28473__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28473__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28473__$1);{
var G__28481 = cljs.core.chunk_rest.call(null,seq__28473__$1);
var G__28482 = c__4189__auto__;
var G__28483 = cljs.core.count.call(null,c__4189__auto__);
var G__28484 = 0;
seq__28473 = G__28481;
chunk__28474 = G__28482;
count__28475 = G__28483;
i__28476 = G__28484;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__28473__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28485 = cljs.core.next.call(null,seq__28473__$1);
var G__28486 = null;
var G__28487 = 0;
var G__28488 = 0;
seq__28473 = G__28485;
chunk__28474 = G__28486;
count__28475 = G__28487;
i__28476 = G__28488;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__28490 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__28490,0,null);var start_wrap = cljs.core.nth.call(null,vec__28490,1,null);var end_wrap = cljs.core.nth.call(null,vec__28490,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__28491 = wrapper.lastChild;
var G__28492 = (level - 1);
wrapper = G__28491;
level = G__28492;
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
domina.DomContent = (function (){var obj28494 = {};return obj28494;
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
log_debug.cljs$lang$applyTo = (function (arglist__28495){
var mesg = cljs.core.seq(arglist__28495);
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
log.cljs$lang$applyTo = (function (arglist__28496){
var mesg = cljs.core.seq(arglist__28496);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__28497){
var contents = cljs.core.seq(arglist__28497);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__28498_SHARP_){return p1__28498_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__28499_SHARP_,p2__28500_SHARP_){return goog.dom.insertChildAt(p1__28499_SHARP_,p2__28500_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28502_SHARP_,p2__28501_SHARP_){return goog.dom.insertSiblingBefore(p2__28501_SHARP_,p1__28502_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28504_SHARP_,p2__28503_SHARP_){return goog.dom.insertSiblingAfter(p2__28503_SHARP_,p1__28504_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__28506_SHARP_,p2__28505_SHARP_){return goog.dom.replaceNode(p2__28505_SHARP_,p1__28506_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__28511_28515 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28512_28516 = null;var count__28513_28517 = 0;var i__28514_28518 = 0;while(true){
if((i__28514_28518 < count__28513_28517))
{var n_28519 = cljs.core._nth.call(null,chunk__28512_28516,i__28514_28518);goog.style.setStyle(n_28519,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28520 = seq__28511_28515;
var G__28521 = chunk__28512_28516;
var G__28522 = count__28513_28517;
var G__28523 = (i__28514_28518 + 1);
seq__28511_28515 = G__28520;
chunk__28512_28516 = G__28521;
count__28513_28517 = G__28522;
i__28514_28518 = G__28523;
continue;
}
} else
{var temp__4092__auto___28524 = cljs.core.seq.call(null,seq__28511_28515);if(temp__4092__auto___28524)
{var seq__28511_28525__$1 = temp__4092__auto___28524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28511_28525__$1))
{var c__4189__auto___28526 = cljs.core.chunk_first.call(null,seq__28511_28525__$1);{
var G__28527 = cljs.core.chunk_rest.call(null,seq__28511_28525__$1);
var G__28528 = c__4189__auto___28526;
var G__28529 = cljs.core.count.call(null,c__4189__auto___28526);
var G__28530 = 0;
seq__28511_28515 = G__28527;
chunk__28512_28516 = G__28528;
count__28513_28517 = G__28529;
i__28514_28518 = G__28530;
continue;
}
} else
{var n_28531 = cljs.core.first.call(null,seq__28511_28525__$1);goog.style.setStyle(n_28531,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28532 = cljs.core.next.call(null,seq__28511_28525__$1);
var G__28533 = null;
var G__28534 = 0;
var G__28535 = 0;
seq__28511_28515 = G__28532;
chunk__28512_28516 = G__28533;
count__28513_28517 = G__28534;
i__28514_28518 = G__28535;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28536){
var content = cljs.core.first(arglist__28536);
arglist__28536 = cljs.core.next(arglist__28536);
var name = cljs.core.first(arglist__28536);
var value = cljs.core.rest(arglist__28536);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__28541_28545 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28542_28546 = null;var count__28543_28547 = 0;var i__28544_28548 = 0;while(true){
if((i__28544_28548 < count__28543_28547))
{var n_28549 = cljs.core._nth.call(null,chunk__28542_28546,i__28544_28548);n_28549.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28550 = seq__28541_28545;
var G__28551 = chunk__28542_28546;
var G__28552 = count__28543_28547;
var G__28553 = (i__28544_28548 + 1);
seq__28541_28545 = G__28550;
chunk__28542_28546 = G__28551;
count__28543_28547 = G__28552;
i__28544_28548 = G__28553;
continue;
}
} else
{var temp__4092__auto___28554 = cljs.core.seq.call(null,seq__28541_28545);if(temp__4092__auto___28554)
{var seq__28541_28555__$1 = temp__4092__auto___28554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28541_28555__$1))
{var c__4189__auto___28556 = cljs.core.chunk_first.call(null,seq__28541_28555__$1);{
var G__28557 = cljs.core.chunk_rest.call(null,seq__28541_28555__$1);
var G__28558 = c__4189__auto___28556;
var G__28559 = cljs.core.count.call(null,c__4189__auto___28556);
var G__28560 = 0;
seq__28541_28545 = G__28557;
chunk__28542_28546 = G__28558;
count__28543_28547 = G__28559;
i__28544_28548 = G__28560;
continue;
}
} else
{var n_28561 = cljs.core.first.call(null,seq__28541_28555__$1);n_28561.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28562 = cljs.core.next.call(null,seq__28541_28555__$1);
var G__28563 = null;
var G__28564 = 0;
var G__28565 = 0;
seq__28541_28545 = G__28562;
chunk__28542_28546 = G__28563;
count__28543_28547 = G__28564;
i__28544_28548 = G__28565;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__28566){
var content = cljs.core.first(arglist__28566);
arglist__28566 = cljs.core.next(arglist__28566);
var name = cljs.core.first(arglist__28566);
var value = cljs.core.rest(arglist__28566);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__28571_28575 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28572_28576 = null;var count__28573_28577 = 0;var i__28574_28578 = 0;while(true){
if((i__28574_28578 < count__28573_28577))
{var n_28579 = cljs.core._nth.call(null,chunk__28572_28576,i__28574_28578);n_28579.removeAttribute(cljs.core.name.call(null,name));
{
var G__28580 = seq__28571_28575;
var G__28581 = chunk__28572_28576;
var G__28582 = count__28573_28577;
var G__28583 = (i__28574_28578 + 1);
seq__28571_28575 = G__28580;
chunk__28572_28576 = G__28581;
count__28573_28577 = G__28582;
i__28574_28578 = G__28583;
continue;
}
} else
{var temp__4092__auto___28584 = cljs.core.seq.call(null,seq__28571_28575);if(temp__4092__auto___28584)
{var seq__28571_28585__$1 = temp__4092__auto___28584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28571_28585__$1))
{var c__4189__auto___28586 = cljs.core.chunk_first.call(null,seq__28571_28585__$1);{
var G__28587 = cljs.core.chunk_rest.call(null,seq__28571_28585__$1);
var G__28588 = c__4189__auto___28586;
var G__28589 = cljs.core.count.call(null,c__4189__auto___28586);
var G__28590 = 0;
seq__28571_28575 = G__28587;
chunk__28572_28576 = G__28588;
count__28573_28577 = G__28589;
i__28574_28578 = G__28590;
continue;
}
} else
{var n_28591 = cljs.core.first.call(null,seq__28571_28585__$1);n_28591.removeAttribute(cljs.core.name.call(null,name));
{
var G__28592 = cljs.core.next.call(null,seq__28571_28585__$1);
var G__28593 = null;
var G__28594 = 0;
var G__28595 = 0;
seq__28571_28575 = G__28592;
chunk__28572_28576 = G__28593;
count__28573_28577 = G__28594;
i__28574_28578 = G__28595;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__28597 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__28597,0,null);var v = cljs.core.nth.call(null,vec__28597,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__28598_SHARP_){var attr = attrs__$1.item(p1__28598_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__28605_28611 = cljs.core.seq.call(null,styles);var chunk__28606_28612 = null;var count__28607_28613 = 0;var i__28608_28614 = 0;while(true){
if((i__28608_28614 < count__28607_28613))
{var vec__28609_28615 = cljs.core._nth.call(null,chunk__28606_28612,i__28608_28614);var name_28616 = cljs.core.nth.call(null,vec__28609_28615,0,null);var value_28617 = cljs.core.nth.call(null,vec__28609_28615,1,null);domina.set_style_BANG_.call(null,content,name_28616,value_28617);
{
var G__28618 = seq__28605_28611;
var G__28619 = chunk__28606_28612;
var G__28620 = count__28607_28613;
var G__28621 = (i__28608_28614 + 1);
seq__28605_28611 = G__28618;
chunk__28606_28612 = G__28619;
count__28607_28613 = G__28620;
i__28608_28614 = G__28621;
continue;
}
} else
{var temp__4092__auto___28622 = cljs.core.seq.call(null,seq__28605_28611);if(temp__4092__auto___28622)
{var seq__28605_28623__$1 = temp__4092__auto___28622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28605_28623__$1))
{var c__4189__auto___28624 = cljs.core.chunk_first.call(null,seq__28605_28623__$1);{
var G__28625 = cljs.core.chunk_rest.call(null,seq__28605_28623__$1);
var G__28626 = c__4189__auto___28624;
var G__28627 = cljs.core.count.call(null,c__4189__auto___28624);
var G__28628 = 0;
seq__28605_28611 = G__28625;
chunk__28606_28612 = G__28626;
count__28607_28613 = G__28627;
i__28608_28614 = G__28628;
continue;
}
} else
{var vec__28610_28629 = cljs.core.first.call(null,seq__28605_28623__$1);var name_28630 = cljs.core.nth.call(null,vec__28610_28629,0,null);var value_28631 = cljs.core.nth.call(null,vec__28610_28629,1,null);domina.set_style_BANG_.call(null,content,name_28630,value_28631);
{
var G__28632 = cljs.core.next.call(null,seq__28605_28623__$1);
var G__28633 = null;
var G__28634 = 0;
var G__28635 = 0;
seq__28605_28611 = G__28632;
chunk__28606_28612 = G__28633;
count__28607_28613 = G__28634;
i__28608_28614 = G__28635;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__28642_28648 = cljs.core.seq.call(null,attrs);var chunk__28643_28649 = null;var count__28644_28650 = 0;var i__28645_28651 = 0;while(true){
if((i__28645_28651 < count__28644_28650))
{var vec__28646_28652 = cljs.core._nth.call(null,chunk__28643_28649,i__28645_28651);var name_28653 = cljs.core.nth.call(null,vec__28646_28652,0,null);var value_28654 = cljs.core.nth.call(null,vec__28646_28652,1,null);domina.set_attr_BANG_.call(null,content,name_28653,value_28654);
{
var G__28655 = seq__28642_28648;
var G__28656 = chunk__28643_28649;
var G__28657 = count__28644_28650;
var G__28658 = (i__28645_28651 + 1);
seq__28642_28648 = G__28655;
chunk__28643_28649 = G__28656;
count__28644_28650 = G__28657;
i__28645_28651 = G__28658;
continue;
}
} else
{var temp__4092__auto___28659 = cljs.core.seq.call(null,seq__28642_28648);if(temp__4092__auto___28659)
{var seq__28642_28660__$1 = temp__4092__auto___28659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28642_28660__$1))
{var c__4189__auto___28661 = cljs.core.chunk_first.call(null,seq__28642_28660__$1);{
var G__28662 = cljs.core.chunk_rest.call(null,seq__28642_28660__$1);
var G__28663 = c__4189__auto___28661;
var G__28664 = cljs.core.count.call(null,c__4189__auto___28661);
var G__28665 = 0;
seq__28642_28648 = G__28662;
chunk__28643_28649 = G__28663;
count__28644_28650 = G__28664;
i__28645_28651 = G__28665;
continue;
}
} else
{var vec__28647_28666 = cljs.core.first.call(null,seq__28642_28660__$1);var name_28667 = cljs.core.nth.call(null,vec__28647_28666,0,null);var value_28668 = cljs.core.nth.call(null,vec__28647_28666,1,null);domina.set_attr_BANG_.call(null,content,name_28667,value_28668);
{
var G__28669 = cljs.core.next.call(null,seq__28642_28660__$1);
var G__28670 = null;
var G__28671 = 0;
var G__28672 = 0;
seq__28642_28648 = G__28669;
chunk__28643_28649 = G__28670;
count__28644_28650 = G__28671;
i__28645_28651 = G__28672;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__28677_28681 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28678_28682 = null;var count__28679_28683 = 0;var i__28680_28684 = 0;while(true){
if((i__28680_28684 < count__28679_28683))
{var node_28685 = cljs.core._nth.call(null,chunk__28678_28682,i__28680_28684);goog.dom.classes.add(node_28685,class$);
{
var G__28686 = seq__28677_28681;
var G__28687 = chunk__28678_28682;
var G__28688 = count__28679_28683;
var G__28689 = (i__28680_28684 + 1);
seq__28677_28681 = G__28686;
chunk__28678_28682 = G__28687;
count__28679_28683 = G__28688;
i__28680_28684 = G__28689;
continue;
}
} else
{var temp__4092__auto___28690 = cljs.core.seq.call(null,seq__28677_28681);if(temp__4092__auto___28690)
{var seq__28677_28691__$1 = temp__4092__auto___28690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28677_28691__$1))
{var c__4189__auto___28692 = cljs.core.chunk_first.call(null,seq__28677_28691__$1);{
var G__28693 = cljs.core.chunk_rest.call(null,seq__28677_28691__$1);
var G__28694 = c__4189__auto___28692;
var G__28695 = cljs.core.count.call(null,c__4189__auto___28692);
var G__28696 = 0;
seq__28677_28681 = G__28693;
chunk__28678_28682 = G__28694;
count__28679_28683 = G__28695;
i__28680_28684 = G__28696;
continue;
}
} else
{var node_28697 = cljs.core.first.call(null,seq__28677_28691__$1);goog.dom.classes.add(node_28697,class$);
{
var G__28698 = cljs.core.next.call(null,seq__28677_28691__$1);
var G__28699 = null;
var G__28700 = 0;
var G__28701 = 0;
seq__28677_28681 = G__28698;
chunk__28678_28682 = G__28699;
count__28679_28683 = G__28700;
i__28680_28684 = G__28701;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__28706_28710 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28707_28711 = null;var count__28708_28712 = 0;var i__28709_28713 = 0;while(true){
if((i__28709_28713 < count__28708_28712))
{var node_28714 = cljs.core._nth.call(null,chunk__28707_28711,i__28709_28713);goog.dom.classes.remove(node_28714,class$);
{
var G__28715 = seq__28706_28710;
var G__28716 = chunk__28707_28711;
var G__28717 = count__28708_28712;
var G__28718 = (i__28709_28713 + 1);
seq__28706_28710 = G__28715;
chunk__28707_28711 = G__28716;
count__28708_28712 = G__28717;
i__28709_28713 = G__28718;
continue;
}
} else
{var temp__4092__auto___28719 = cljs.core.seq.call(null,seq__28706_28710);if(temp__4092__auto___28719)
{var seq__28706_28720__$1 = temp__4092__auto___28719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28706_28720__$1))
{var c__4189__auto___28721 = cljs.core.chunk_first.call(null,seq__28706_28720__$1);{
var G__28722 = cljs.core.chunk_rest.call(null,seq__28706_28720__$1);
var G__28723 = c__4189__auto___28721;
var G__28724 = cljs.core.count.call(null,c__4189__auto___28721);
var G__28725 = 0;
seq__28706_28710 = G__28722;
chunk__28707_28711 = G__28723;
count__28708_28712 = G__28724;
i__28709_28713 = G__28725;
continue;
}
} else
{var node_28726 = cljs.core.first.call(null,seq__28706_28720__$1);goog.dom.classes.remove(node_28726,class$);
{
var G__28727 = cljs.core.next.call(null,seq__28706_28720__$1);
var G__28728 = null;
var G__28729 = 0;
var G__28730 = 0;
seq__28706_28710 = G__28727;
chunk__28707_28711 = G__28728;
count__28708_28712 = G__28729;
i__28709_28713 = G__28730;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28735_28739 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28736_28740 = null;var count__28737_28741 = 0;var i__28738_28742 = 0;while(true){
if((i__28738_28742 < count__28737_28741))
{var node_28743 = cljs.core._nth.call(null,chunk__28736_28740,i__28738_28742);goog.dom.classes.toggle(node_28743,class$);
{
var G__28744 = seq__28735_28739;
var G__28745 = chunk__28736_28740;
var G__28746 = count__28737_28741;
var G__28747 = (i__28738_28742 + 1);
seq__28735_28739 = G__28744;
chunk__28736_28740 = G__28745;
count__28737_28741 = G__28746;
i__28738_28742 = G__28747;
continue;
}
} else
{var temp__4092__auto___28748 = cljs.core.seq.call(null,seq__28735_28739);if(temp__4092__auto___28748)
{var seq__28735_28749__$1 = temp__4092__auto___28748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28735_28749__$1))
{var c__4189__auto___28750 = cljs.core.chunk_first.call(null,seq__28735_28749__$1);{
var G__28751 = cljs.core.chunk_rest.call(null,seq__28735_28749__$1);
var G__28752 = c__4189__auto___28750;
var G__28753 = cljs.core.count.call(null,c__4189__auto___28750);
var G__28754 = 0;
seq__28735_28739 = G__28751;
chunk__28736_28740 = G__28752;
count__28737_28741 = G__28753;
i__28738_28742 = G__28754;
continue;
}
} else
{var node_28755 = cljs.core.first.call(null,seq__28735_28749__$1);goog.dom.classes.toggle(node_28755,class$);
{
var G__28756 = cljs.core.next.call(null,seq__28735_28749__$1);
var G__28757 = null;
var G__28758 = 0;
var G__28759 = 0;
seq__28735_28739 = G__28756;
chunk__28736_28740 = G__28757;
count__28737_28741 = G__28758;
i__28738_28742 = G__28759;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28768__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__28764_28769 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28765_28770 = null;var count__28766_28771 = 0;var i__28767_28772 = 0;while(true){
if((i__28767_28772 < count__28766_28771))
{var node_28773 = cljs.core._nth.call(null,chunk__28765_28770,i__28767_28772);goog.dom.classes.set(node_28773,classes_28768__$1);
{
var G__28774 = seq__28764_28769;
var G__28775 = chunk__28765_28770;
var G__28776 = count__28766_28771;
var G__28777 = (i__28767_28772 + 1);
seq__28764_28769 = G__28774;
chunk__28765_28770 = G__28775;
count__28766_28771 = G__28776;
i__28767_28772 = G__28777;
continue;
}
} else
{var temp__4092__auto___28778 = cljs.core.seq.call(null,seq__28764_28769);if(temp__4092__auto___28778)
{var seq__28764_28779__$1 = temp__4092__auto___28778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28764_28779__$1))
{var c__4189__auto___28780 = cljs.core.chunk_first.call(null,seq__28764_28779__$1);{
var G__28781 = cljs.core.chunk_rest.call(null,seq__28764_28779__$1);
var G__28782 = c__4189__auto___28780;
var G__28783 = cljs.core.count.call(null,c__4189__auto___28780);
var G__28784 = 0;
seq__28764_28769 = G__28781;
chunk__28765_28770 = G__28782;
count__28766_28771 = G__28783;
i__28767_28772 = G__28784;
continue;
}
} else
{var node_28785 = cljs.core.first.call(null,seq__28764_28779__$1);goog.dom.classes.set(node_28785,classes_28768__$1);
{
var G__28786 = cljs.core.next.call(null,seq__28764_28779__$1);
var G__28787 = null;
var G__28788 = 0;
var G__28789 = 0;
seq__28764_28769 = G__28786;
chunk__28765_28770 = G__28787;
count__28766_28771 = G__28788;
i__28767_28772 = G__28789;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28794_28798 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28795_28799 = null;var count__28796_28800 = 0;var i__28797_28801 = 0;while(true){
if((i__28797_28801 < count__28796_28800))
{var node_28802 = cljs.core._nth.call(null,chunk__28795_28799,i__28797_28801);goog.dom.setTextContent(node_28802,value);
{
var G__28803 = seq__28794_28798;
var G__28804 = chunk__28795_28799;
var G__28805 = count__28796_28800;
var G__28806 = (i__28797_28801 + 1);
seq__28794_28798 = G__28803;
chunk__28795_28799 = G__28804;
count__28796_28800 = G__28805;
i__28797_28801 = G__28806;
continue;
}
} else
{var temp__4092__auto___28807 = cljs.core.seq.call(null,seq__28794_28798);if(temp__4092__auto___28807)
{var seq__28794_28808__$1 = temp__4092__auto___28807;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28794_28808__$1))
{var c__4189__auto___28809 = cljs.core.chunk_first.call(null,seq__28794_28808__$1);{
var G__28810 = cljs.core.chunk_rest.call(null,seq__28794_28808__$1);
var G__28811 = c__4189__auto___28809;
var G__28812 = cljs.core.count.call(null,c__4189__auto___28809);
var G__28813 = 0;
seq__28794_28798 = G__28810;
chunk__28795_28799 = G__28811;
count__28796_28800 = G__28812;
i__28797_28801 = G__28813;
continue;
}
} else
{var node_28814 = cljs.core.first.call(null,seq__28794_28808__$1);goog.dom.setTextContent(node_28814,value);
{
var G__28815 = cljs.core.next.call(null,seq__28794_28808__$1);
var G__28816 = null;
var G__28817 = 0;
var G__28818 = 0;
seq__28794_28798 = G__28815;
chunk__28795_28799 = G__28816;
count__28796_28800 = G__28817;
i__28797_28801 = G__28818;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28823_28827 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28824_28828 = null;var count__28825_28829 = 0;var i__28826_28830 = 0;while(true){
if((i__28826_28830 < count__28825_28829))
{var node_28831 = cljs.core._nth.call(null,chunk__28824_28828,i__28826_28830);goog.dom.forms.setValue(node_28831,value);
{
var G__28832 = seq__28823_28827;
var G__28833 = chunk__28824_28828;
var G__28834 = count__28825_28829;
var G__28835 = (i__28826_28830 + 1);
seq__28823_28827 = G__28832;
chunk__28824_28828 = G__28833;
count__28825_28829 = G__28834;
i__28826_28830 = G__28835;
continue;
}
} else
{var temp__4092__auto___28836 = cljs.core.seq.call(null,seq__28823_28827);if(temp__4092__auto___28836)
{var seq__28823_28837__$1 = temp__4092__auto___28836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28823_28837__$1))
{var c__4189__auto___28838 = cljs.core.chunk_first.call(null,seq__28823_28837__$1);{
var G__28839 = cljs.core.chunk_rest.call(null,seq__28823_28837__$1);
var G__28840 = c__4189__auto___28838;
var G__28841 = cljs.core.count.call(null,c__4189__auto___28838);
var G__28842 = 0;
seq__28823_28827 = G__28839;
chunk__28824_28828 = G__28840;
count__28825_28829 = G__28841;
i__28826_28830 = G__28842;
continue;
}
} else
{var node_28843 = cljs.core.first.call(null,seq__28823_28837__$1);goog.dom.forms.setValue(node_28843,value);
{
var G__28844 = cljs.core.next.call(null,seq__28823_28837__$1);
var G__28845 = null;
var G__28846 = 0;
var G__28847 = 0;
seq__28823_28827 = G__28844;
chunk__28824_28828 = G__28845;
count__28825_28829 = G__28846;
i__28826_28830 = G__28847;
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
{var value_28858 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28854_28859 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28855_28860 = null;var count__28856_28861 = 0;var i__28857_28862 = 0;while(true){
if((i__28857_28862 < count__28856_28861))
{var node_28863 = cljs.core._nth.call(null,chunk__28855_28860,i__28857_28862);node_28863.innerHTML = value_28858;
{
var G__28864 = seq__28854_28859;
var G__28865 = chunk__28855_28860;
var G__28866 = count__28856_28861;
var G__28867 = (i__28857_28862 + 1);
seq__28854_28859 = G__28864;
chunk__28855_28860 = G__28865;
count__28856_28861 = G__28866;
i__28857_28862 = G__28867;
continue;
}
} else
{var temp__4092__auto___28868 = cljs.core.seq.call(null,seq__28854_28859);if(temp__4092__auto___28868)
{var seq__28854_28869__$1 = temp__4092__auto___28868;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28854_28869__$1))
{var c__4189__auto___28870 = cljs.core.chunk_first.call(null,seq__28854_28869__$1);{
var G__28871 = cljs.core.chunk_rest.call(null,seq__28854_28869__$1);
var G__28872 = c__4189__auto___28870;
var G__28873 = cljs.core.count.call(null,c__4189__auto___28870);
var G__28874 = 0;
seq__28854_28859 = G__28871;
chunk__28855_28860 = G__28872;
count__28856_28861 = G__28873;
i__28857_28862 = G__28874;
continue;
}
} else
{var node_28875 = cljs.core.first.call(null,seq__28854_28869__$1);node_28875.innerHTML = value_28858;
{
var G__28876 = cljs.core.next.call(null,seq__28854_28869__$1);
var G__28877 = null;
var G__28878 = 0;
var G__28879 = 0;
seq__28854_28859 = G__28876;
chunk__28855_28860 = G__28877;
count__28856_28861 = G__28878;
i__28857_28862 = G__28879;
continue;
}
}
} else
{}
}
break;
}
}catch (e28853){if((e28853 instanceof Error))
{var e_28880 = e28853;domina.replace_children_BANG_.call(null,content,value_28858);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28853;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28887_28891 = cljs.core.seq.call(null,children);var chunk__28888_28892 = null;var count__28889_28893 = 0;var i__28890_28894 = 0;while(true){
if((i__28890_28894 < count__28889_28893))
{var child_28895 = cljs.core._nth.call(null,chunk__28888_28892,i__28890_28894);frag.appendChild(child_28895);
{
var G__28896 = seq__28887_28891;
var G__28897 = chunk__28888_28892;
var G__28898 = count__28889_28893;
var G__28899 = (i__28890_28894 + 1);
seq__28887_28891 = G__28896;
chunk__28888_28892 = G__28897;
count__28889_28893 = G__28898;
i__28890_28894 = G__28899;
continue;
}
} else
{var temp__4092__auto___28900 = cljs.core.seq.call(null,seq__28887_28891);if(temp__4092__auto___28900)
{var seq__28887_28901__$1 = temp__4092__auto___28900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28887_28901__$1))
{var c__4189__auto___28902 = cljs.core.chunk_first.call(null,seq__28887_28901__$1);{
var G__28903 = cljs.core.chunk_rest.call(null,seq__28887_28901__$1);
var G__28904 = c__4189__auto___28902;
var G__28905 = cljs.core.count.call(null,c__4189__auto___28902);
var G__28906 = 0;
seq__28887_28891 = G__28903;
chunk__28888_28892 = G__28904;
count__28889_28893 = G__28905;
i__28890_28894 = G__28906;
continue;
}
} else
{var child_28907 = cljs.core.first.call(null,seq__28887_28901__$1);frag.appendChild(child_28907);
{
var G__28908 = cljs.core.next.call(null,seq__28887_28901__$1);
var G__28909 = null;
var G__28910 = 0;
var G__28911 = 0;
seq__28887_28891 = G__28908;
chunk__28888_28892 = G__28909;
count__28889_28893 = G__28910;
i__28890_28894 = G__28911;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__28881_SHARP_,p2__28882_SHARP_){return f.call(null,p1__28881_SHARP_,p2__28882_SHARP_);
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
{if((function (){var G__28913 = list_thing;if(G__28913)
{var bit__4091__auto__ = (G__28913.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28913.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28913.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28913);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28913);
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
{if((function (){var G__28914 = content;if(G__28914)
{var bit__4091__auto__ = (G__28914.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28914.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28914.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28914);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28914);
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
{if((function (){var G__28915 = content;if(G__28915)
{var bit__4091__auto__ = (G__28915.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28915.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28915.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28915);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28915);
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

//# sourceMappingURL=domina.js.map