// Compiled by ClojureScript 0.0-2138
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
var opt_wrapper_16624 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16625 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16626 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16625,table_section_wrapper_16625,opt_wrapper_16624,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16626,table_section_wrapper_16625,cell_wrapper_16626,opt_wrapper_16624,table_section_wrapper_16625,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16625]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16631 = cljs.core.seq.call(null,tbody);var chunk__16632 = null;var count__16633 = 0;var i__16634 = 0;while(true){
if((i__16634 < count__16633))
{var child = cljs.core._nth.call(null,chunk__16632,i__16634);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16635 = seq__16631;
var G__16636 = chunk__16632;
var G__16637 = count__16633;
var G__16638 = (i__16634 + 1);
seq__16631 = G__16635;
chunk__16632 = G__16636;
count__16633 = G__16637;
i__16634 = G__16638;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16631);if(temp__4092__auto__)
{var seq__16631__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16631__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16631__$1);{
var G__16639 = cljs.core.chunk_rest.call(null,seq__16631__$1);
var G__16640 = c__4148__auto__;
var G__16641 = cljs.core.count.call(null,c__4148__auto__);
var G__16642 = 0;
seq__16631 = G__16639;
chunk__16632 = G__16640;
count__16633 = G__16641;
i__16634 = G__16642;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16631__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16643 = cljs.core.next.call(null,seq__16631__$1);
var G__16644 = null;
var G__16645 = 0;
var G__16646 = 0;
seq__16631 = G__16643;
chunk__16632 = G__16644;
count__16633 = G__16645;
i__16634 = G__16646;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16648 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16648,0,null);var start_wrap = cljs.core.nth.call(null,vec__16648,1,null);var end_wrap = cljs.core.nth.call(null,vec__16648,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16649 = wrapper.lastChild;
var G__16650 = (level - 1);
wrapper = G__16649;
level = G__16650;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj16652 = {};return obj16652;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__16653){
var mesg = cljs.core.seq(arglist__16653);
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
log.cljs$lang$applyTo = (function (arglist__16654){
var mesg = cljs.core.seq(arglist__16654);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16655){
var contents = cljs.core.seq(arglist__16655);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16656_SHARP_){return p1__16656_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16657_SHARP_,p2__16658_SHARP_){return goog.dom.insertChildAt(p1__16657_SHARP_,p2__16658_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16660_SHARP_,p2__16659_SHARP_){return goog.dom.insertSiblingBefore(p2__16659_SHARP_,p1__16660_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16662_SHARP_,p2__16661_SHARP_){return goog.dom.insertSiblingAfter(p2__16661_SHARP_,p1__16662_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16664_SHARP_,p2__16663_SHARP_){return goog.dom.replaceNode(p2__16663_SHARP_,p1__16664_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16669_16673 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16670_16674 = null;var count__16671_16675 = 0;var i__16672_16676 = 0;while(true){
if((i__16672_16676 < count__16671_16675))
{var n_16677 = cljs.core._nth.call(null,chunk__16670_16674,i__16672_16676);goog.style.setStyle(n_16677,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16678 = seq__16669_16673;
var G__16679 = chunk__16670_16674;
var G__16680 = count__16671_16675;
var G__16681 = (i__16672_16676 + 1);
seq__16669_16673 = G__16678;
chunk__16670_16674 = G__16679;
count__16671_16675 = G__16680;
i__16672_16676 = G__16681;
continue;
}
} else
{var temp__4092__auto___16682 = cljs.core.seq.call(null,seq__16669_16673);if(temp__4092__auto___16682)
{var seq__16669_16683__$1 = temp__4092__auto___16682;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16669_16683__$1))
{var c__4148__auto___16684 = cljs.core.chunk_first.call(null,seq__16669_16683__$1);{
var G__16685 = cljs.core.chunk_rest.call(null,seq__16669_16683__$1);
var G__16686 = c__4148__auto___16684;
var G__16687 = cljs.core.count.call(null,c__4148__auto___16684);
var G__16688 = 0;
seq__16669_16673 = G__16685;
chunk__16670_16674 = G__16686;
count__16671_16675 = G__16687;
i__16672_16676 = G__16688;
continue;
}
} else
{var n_16689 = cljs.core.first.call(null,seq__16669_16683__$1);goog.style.setStyle(n_16689,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16690 = cljs.core.next.call(null,seq__16669_16683__$1);
var G__16691 = null;
var G__16692 = 0;
var G__16693 = 0;
seq__16669_16673 = G__16690;
chunk__16670_16674 = G__16691;
count__16671_16675 = G__16692;
i__16672_16676 = G__16693;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16694){
var content = cljs.core.first(arglist__16694);
arglist__16694 = cljs.core.next(arglist__16694);
var name = cljs.core.first(arglist__16694);
var value = cljs.core.rest(arglist__16694);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16699_16703 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16700_16704 = null;var count__16701_16705 = 0;var i__16702_16706 = 0;while(true){
if((i__16702_16706 < count__16701_16705))
{var n_16707 = cljs.core._nth.call(null,chunk__16700_16704,i__16702_16706);n_16707.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16708 = seq__16699_16703;
var G__16709 = chunk__16700_16704;
var G__16710 = count__16701_16705;
var G__16711 = (i__16702_16706 + 1);
seq__16699_16703 = G__16708;
chunk__16700_16704 = G__16709;
count__16701_16705 = G__16710;
i__16702_16706 = G__16711;
continue;
}
} else
{var temp__4092__auto___16712 = cljs.core.seq.call(null,seq__16699_16703);if(temp__4092__auto___16712)
{var seq__16699_16713__$1 = temp__4092__auto___16712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16699_16713__$1))
{var c__4148__auto___16714 = cljs.core.chunk_first.call(null,seq__16699_16713__$1);{
var G__16715 = cljs.core.chunk_rest.call(null,seq__16699_16713__$1);
var G__16716 = c__4148__auto___16714;
var G__16717 = cljs.core.count.call(null,c__4148__auto___16714);
var G__16718 = 0;
seq__16699_16703 = G__16715;
chunk__16700_16704 = G__16716;
count__16701_16705 = G__16717;
i__16702_16706 = G__16718;
continue;
}
} else
{var n_16719 = cljs.core.first.call(null,seq__16699_16713__$1);n_16719.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16720 = cljs.core.next.call(null,seq__16699_16713__$1);
var G__16721 = null;
var G__16722 = 0;
var G__16723 = 0;
seq__16699_16703 = G__16720;
chunk__16700_16704 = G__16721;
count__16701_16705 = G__16722;
i__16702_16706 = G__16723;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16724){
var content = cljs.core.first(arglist__16724);
arglist__16724 = cljs.core.next(arglist__16724);
var name = cljs.core.first(arglist__16724);
var value = cljs.core.rest(arglist__16724);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16729_16733 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16730_16734 = null;var count__16731_16735 = 0;var i__16732_16736 = 0;while(true){
if((i__16732_16736 < count__16731_16735))
{var n_16737 = cljs.core._nth.call(null,chunk__16730_16734,i__16732_16736);n_16737.removeAttribute(cljs.core.name.call(null,name));
{
var G__16738 = seq__16729_16733;
var G__16739 = chunk__16730_16734;
var G__16740 = count__16731_16735;
var G__16741 = (i__16732_16736 + 1);
seq__16729_16733 = G__16738;
chunk__16730_16734 = G__16739;
count__16731_16735 = G__16740;
i__16732_16736 = G__16741;
continue;
}
} else
{var temp__4092__auto___16742 = cljs.core.seq.call(null,seq__16729_16733);if(temp__4092__auto___16742)
{var seq__16729_16743__$1 = temp__4092__auto___16742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16729_16743__$1))
{var c__4148__auto___16744 = cljs.core.chunk_first.call(null,seq__16729_16743__$1);{
var G__16745 = cljs.core.chunk_rest.call(null,seq__16729_16743__$1);
var G__16746 = c__4148__auto___16744;
var G__16747 = cljs.core.count.call(null,c__4148__auto___16744);
var G__16748 = 0;
seq__16729_16733 = G__16745;
chunk__16730_16734 = G__16746;
count__16731_16735 = G__16747;
i__16732_16736 = G__16748;
continue;
}
} else
{var n_16749 = cljs.core.first.call(null,seq__16729_16743__$1);n_16749.removeAttribute(cljs.core.name.call(null,name));
{
var G__16750 = cljs.core.next.call(null,seq__16729_16743__$1);
var G__16751 = null;
var G__16752 = 0;
var G__16753 = 0;
seq__16729_16733 = G__16750;
chunk__16730_16734 = G__16751;
count__16731_16735 = G__16752;
i__16732_16736 = G__16753;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16755 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16755,0,null);var v = cljs.core.nth.call(null,vec__16755,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16756_SHARP_){var attr = attrs__$1.item(p1__16756_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16763_16769 = cljs.core.seq.call(null,styles);var chunk__16764_16770 = null;var count__16765_16771 = 0;var i__16766_16772 = 0;while(true){
if((i__16766_16772 < count__16765_16771))
{var vec__16767_16773 = cljs.core._nth.call(null,chunk__16764_16770,i__16766_16772);var name_16774 = cljs.core.nth.call(null,vec__16767_16773,0,null);var value_16775 = cljs.core.nth.call(null,vec__16767_16773,1,null);domina.set_style_BANG_.call(null,content,name_16774,value_16775);
{
var G__16776 = seq__16763_16769;
var G__16777 = chunk__16764_16770;
var G__16778 = count__16765_16771;
var G__16779 = (i__16766_16772 + 1);
seq__16763_16769 = G__16776;
chunk__16764_16770 = G__16777;
count__16765_16771 = G__16778;
i__16766_16772 = G__16779;
continue;
}
} else
{var temp__4092__auto___16780 = cljs.core.seq.call(null,seq__16763_16769);if(temp__4092__auto___16780)
{var seq__16763_16781__$1 = temp__4092__auto___16780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16763_16781__$1))
{var c__4148__auto___16782 = cljs.core.chunk_first.call(null,seq__16763_16781__$1);{
var G__16783 = cljs.core.chunk_rest.call(null,seq__16763_16781__$1);
var G__16784 = c__4148__auto___16782;
var G__16785 = cljs.core.count.call(null,c__4148__auto___16782);
var G__16786 = 0;
seq__16763_16769 = G__16783;
chunk__16764_16770 = G__16784;
count__16765_16771 = G__16785;
i__16766_16772 = G__16786;
continue;
}
} else
{var vec__16768_16787 = cljs.core.first.call(null,seq__16763_16781__$1);var name_16788 = cljs.core.nth.call(null,vec__16768_16787,0,null);var value_16789 = cljs.core.nth.call(null,vec__16768_16787,1,null);domina.set_style_BANG_.call(null,content,name_16788,value_16789);
{
var G__16790 = cljs.core.next.call(null,seq__16763_16781__$1);
var G__16791 = null;
var G__16792 = 0;
var G__16793 = 0;
seq__16763_16769 = G__16790;
chunk__16764_16770 = G__16791;
count__16765_16771 = G__16792;
i__16766_16772 = G__16793;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16800_16806 = cljs.core.seq.call(null,attrs);var chunk__16801_16807 = null;var count__16802_16808 = 0;var i__16803_16809 = 0;while(true){
if((i__16803_16809 < count__16802_16808))
{var vec__16804_16810 = cljs.core._nth.call(null,chunk__16801_16807,i__16803_16809);var name_16811 = cljs.core.nth.call(null,vec__16804_16810,0,null);var value_16812 = cljs.core.nth.call(null,vec__16804_16810,1,null);domina.set_attr_BANG_.call(null,content,name_16811,value_16812);
{
var G__16813 = seq__16800_16806;
var G__16814 = chunk__16801_16807;
var G__16815 = count__16802_16808;
var G__16816 = (i__16803_16809 + 1);
seq__16800_16806 = G__16813;
chunk__16801_16807 = G__16814;
count__16802_16808 = G__16815;
i__16803_16809 = G__16816;
continue;
}
} else
{var temp__4092__auto___16817 = cljs.core.seq.call(null,seq__16800_16806);if(temp__4092__auto___16817)
{var seq__16800_16818__$1 = temp__4092__auto___16817;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16800_16818__$1))
{var c__4148__auto___16819 = cljs.core.chunk_first.call(null,seq__16800_16818__$1);{
var G__16820 = cljs.core.chunk_rest.call(null,seq__16800_16818__$1);
var G__16821 = c__4148__auto___16819;
var G__16822 = cljs.core.count.call(null,c__4148__auto___16819);
var G__16823 = 0;
seq__16800_16806 = G__16820;
chunk__16801_16807 = G__16821;
count__16802_16808 = G__16822;
i__16803_16809 = G__16823;
continue;
}
} else
{var vec__16805_16824 = cljs.core.first.call(null,seq__16800_16818__$1);var name_16825 = cljs.core.nth.call(null,vec__16805_16824,0,null);var value_16826 = cljs.core.nth.call(null,vec__16805_16824,1,null);domina.set_attr_BANG_.call(null,content,name_16825,value_16826);
{
var G__16827 = cljs.core.next.call(null,seq__16800_16818__$1);
var G__16828 = null;
var G__16829 = 0;
var G__16830 = 0;
seq__16800_16806 = G__16827;
chunk__16801_16807 = G__16828;
count__16802_16808 = G__16829;
i__16803_16809 = G__16830;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16835_16839 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16836_16840 = null;var count__16837_16841 = 0;var i__16838_16842 = 0;while(true){
if((i__16838_16842 < count__16837_16841))
{var node_16843 = cljs.core._nth.call(null,chunk__16836_16840,i__16838_16842);goog.dom.classes.add(node_16843,class$);
{
var G__16844 = seq__16835_16839;
var G__16845 = chunk__16836_16840;
var G__16846 = count__16837_16841;
var G__16847 = (i__16838_16842 + 1);
seq__16835_16839 = G__16844;
chunk__16836_16840 = G__16845;
count__16837_16841 = G__16846;
i__16838_16842 = G__16847;
continue;
}
} else
{var temp__4092__auto___16848 = cljs.core.seq.call(null,seq__16835_16839);if(temp__4092__auto___16848)
{var seq__16835_16849__$1 = temp__4092__auto___16848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16835_16849__$1))
{var c__4148__auto___16850 = cljs.core.chunk_first.call(null,seq__16835_16849__$1);{
var G__16851 = cljs.core.chunk_rest.call(null,seq__16835_16849__$1);
var G__16852 = c__4148__auto___16850;
var G__16853 = cljs.core.count.call(null,c__4148__auto___16850);
var G__16854 = 0;
seq__16835_16839 = G__16851;
chunk__16836_16840 = G__16852;
count__16837_16841 = G__16853;
i__16838_16842 = G__16854;
continue;
}
} else
{var node_16855 = cljs.core.first.call(null,seq__16835_16849__$1);goog.dom.classes.add(node_16855,class$);
{
var G__16856 = cljs.core.next.call(null,seq__16835_16849__$1);
var G__16857 = null;
var G__16858 = 0;
var G__16859 = 0;
seq__16835_16839 = G__16856;
chunk__16836_16840 = G__16857;
count__16837_16841 = G__16858;
i__16838_16842 = G__16859;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16864_16868 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16865_16869 = null;var count__16866_16870 = 0;var i__16867_16871 = 0;while(true){
if((i__16867_16871 < count__16866_16870))
{var node_16872 = cljs.core._nth.call(null,chunk__16865_16869,i__16867_16871);goog.dom.classes.remove(node_16872,class$);
{
var G__16873 = seq__16864_16868;
var G__16874 = chunk__16865_16869;
var G__16875 = count__16866_16870;
var G__16876 = (i__16867_16871 + 1);
seq__16864_16868 = G__16873;
chunk__16865_16869 = G__16874;
count__16866_16870 = G__16875;
i__16867_16871 = G__16876;
continue;
}
} else
{var temp__4092__auto___16877 = cljs.core.seq.call(null,seq__16864_16868);if(temp__4092__auto___16877)
{var seq__16864_16878__$1 = temp__4092__auto___16877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16864_16878__$1))
{var c__4148__auto___16879 = cljs.core.chunk_first.call(null,seq__16864_16878__$1);{
var G__16880 = cljs.core.chunk_rest.call(null,seq__16864_16878__$1);
var G__16881 = c__4148__auto___16879;
var G__16882 = cljs.core.count.call(null,c__4148__auto___16879);
var G__16883 = 0;
seq__16864_16868 = G__16880;
chunk__16865_16869 = G__16881;
count__16866_16870 = G__16882;
i__16867_16871 = G__16883;
continue;
}
} else
{var node_16884 = cljs.core.first.call(null,seq__16864_16878__$1);goog.dom.classes.remove(node_16884,class$);
{
var G__16885 = cljs.core.next.call(null,seq__16864_16878__$1);
var G__16886 = null;
var G__16887 = 0;
var G__16888 = 0;
seq__16864_16868 = G__16885;
chunk__16865_16869 = G__16886;
count__16866_16870 = G__16887;
i__16867_16871 = G__16888;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16893_16897 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16894_16898 = null;var count__16895_16899 = 0;var i__16896_16900 = 0;while(true){
if((i__16896_16900 < count__16895_16899))
{var node_16901 = cljs.core._nth.call(null,chunk__16894_16898,i__16896_16900);goog.dom.classes.toggle(node_16901,class$);
{
var G__16902 = seq__16893_16897;
var G__16903 = chunk__16894_16898;
var G__16904 = count__16895_16899;
var G__16905 = (i__16896_16900 + 1);
seq__16893_16897 = G__16902;
chunk__16894_16898 = G__16903;
count__16895_16899 = G__16904;
i__16896_16900 = G__16905;
continue;
}
} else
{var temp__4092__auto___16906 = cljs.core.seq.call(null,seq__16893_16897);if(temp__4092__auto___16906)
{var seq__16893_16907__$1 = temp__4092__auto___16906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16893_16907__$1))
{var c__4148__auto___16908 = cljs.core.chunk_first.call(null,seq__16893_16907__$1);{
var G__16909 = cljs.core.chunk_rest.call(null,seq__16893_16907__$1);
var G__16910 = c__4148__auto___16908;
var G__16911 = cljs.core.count.call(null,c__4148__auto___16908);
var G__16912 = 0;
seq__16893_16897 = G__16909;
chunk__16894_16898 = G__16910;
count__16895_16899 = G__16911;
i__16896_16900 = G__16912;
continue;
}
} else
{var node_16913 = cljs.core.first.call(null,seq__16893_16907__$1);goog.dom.classes.toggle(node_16913,class$);
{
var G__16914 = cljs.core.next.call(null,seq__16893_16907__$1);
var G__16915 = null;
var G__16916 = 0;
var G__16917 = 0;
seq__16893_16897 = G__16914;
chunk__16894_16898 = G__16915;
count__16895_16899 = G__16916;
i__16896_16900 = G__16917;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16926__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16922_16927 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16923_16928 = null;var count__16924_16929 = 0;var i__16925_16930 = 0;while(true){
if((i__16925_16930 < count__16924_16929))
{var node_16931 = cljs.core._nth.call(null,chunk__16923_16928,i__16925_16930);goog.dom.classes.set(node_16931,classes_16926__$1);
{
var G__16932 = seq__16922_16927;
var G__16933 = chunk__16923_16928;
var G__16934 = count__16924_16929;
var G__16935 = (i__16925_16930 + 1);
seq__16922_16927 = G__16932;
chunk__16923_16928 = G__16933;
count__16924_16929 = G__16934;
i__16925_16930 = G__16935;
continue;
}
} else
{var temp__4092__auto___16936 = cljs.core.seq.call(null,seq__16922_16927);if(temp__4092__auto___16936)
{var seq__16922_16937__$1 = temp__4092__auto___16936;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16922_16937__$1))
{var c__4148__auto___16938 = cljs.core.chunk_first.call(null,seq__16922_16937__$1);{
var G__16939 = cljs.core.chunk_rest.call(null,seq__16922_16937__$1);
var G__16940 = c__4148__auto___16938;
var G__16941 = cljs.core.count.call(null,c__4148__auto___16938);
var G__16942 = 0;
seq__16922_16927 = G__16939;
chunk__16923_16928 = G__16940;
count__16924_16929 = G__16941;
i__16925_16930 = G__16942;
continue;
}
} else
{var node_16943 = cljs.core.first.call(null,seq__16922_16937__$1);goog.dom.classes.set(node_16943,classes_16926__$1);
{
var G__16944 = cljs.core.next.call(null,seq__16922_16937__$1);
var G__16945 = null;
var G__16946 = 0;
var G__16947 = 0;
seq__16922_16927 = G__16944;
chunk__16923_16928 = G__16945;
count__16924_16929 = G__16946;
i__16925_16930 = G__16947;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16952_16956 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16953_16957 = null;var count__16954_16958 = 0;var i__16955_16959 = 0;while(true){
if((i__16955_16959 < count__16954_16958))
{var node_16960 = cljs.core._nth.call(null,chunk__16953_16957,i__16955_16959);goog.dom.setTextContent(node_16960,value);
{
var G__16961 = seq__16952_16956;
var G__16962 = chunk__16953_16957;
var G__16963 = count__16954_16958;
var G__16964 = (i__16955_16959 + 1);
seq__16952_16956 = G__16961;
chunk__16953_16957 = G__16962;
count__16954_16958 = G__16963;
i__16955_16959 = G__16964;
continue;
}
} else
{var temp__4092__auto___16965 = cljs.core.seq.call(null,seq__16952_16956);if(temp__4092__auto___16965)
{var seq__16952_16966__$1 = temp__4092__auto___16965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16952_16966__$1))
{var c__4148__auto___16967 = cljs.core.chunk_first.call(null,seq__16952_16966__$1);{
var G__16968 = cljs.core.chunk_rest.call(null,seq__16952_16966__$1);
var G__16969 = c__4148__auto___16967;
var G__16970 = cljs.core.count.call(null,c__4148__auto___16967);
var G__16971 = 0;
seq__16952_16956 = G__16968;
chunk__16953_16957 = G__16969;
count__16954_16958 = G__16970;
i__16955_16959 = G__16971;
continue;
}
} else
{var node_16972 = cljs.core.first.call(null,seq__16952_16966__$1);goog.dom.setTextContent(node_16972,value);
{
var G__16973 = cljs.core.next.call(null,seq__16952_16966__$1);
var G__16974 = null;
var G__16975 = 0;
var G__16976 = 0;
seq__16952_16956 = G__16973;
chunk__16953_16957 = G__16974;
count__16954_16958 = G__16975;
i__16955_16959 = G__16976;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16981_16985 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16982_16986 = null;var count__16983_16987 = 0;var i__16984_16988 = 0;while(true){
if((i__16984_16988 < count__16983_16987))
{var node_16989 = cljs.core._nth.call(null,chunk__16982_16986,i__16984_16988);goog.dom.forms.setValue(node_16989,value);
{
var G__16990 = seq__16981_16985;
var G__16991 = chunk__16982_16986;
var G__16992 = count__16983_16987;
var G__16993 = (i__16984_16988 + 1);
seq__16981_16985 = G__16990;
chunk__16982_16986 = G__16991;
count__16983_16987 = G__16992;
i__16984_16988 = G__16993;
continue;
}
} else
{var temp__4092__auto___16994 = cljs.core.seq.call(null,seq__16981_16985);if(temp__4092__auto___16994)
{var seq__16981_16995__$1 = temp__4092__auto___16994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16981_16995__$1))
{var c__4148__auto___16996 = cljs.core.chunk_first.call(null,seq__16981_16995__$1);{
var G__16997 = cljs.core.chunk_rest.call(null,seq__16981_16995__$1);
var G__16998 = c__4148__auto___16996;
var G__16999 = cljs.core.count.call(null,c__4148__auto___16996);
var G__17000 = 0;
seq__16981_16985 = G__16997;
chunk__16982_16986 = G__16998;
count__16983_16987 = G__16999;
i__16984_16988 = G__17000;
continue;
}
} else
{var node_17001 = cljs.core.first.call(null,seq__16981_16995__$1);goog.dom.forms.setValue(node_17001,value);
{
var G__17002 = cljs.core.next.call(null,seq__16981_16995__$1);
var G__17003 = null;
var G__17004 = 0;
var G__17005 = 0;
seq__16981_16985 = G__17002;
chunk__16982_16986 = G__17003;
count__16983_16987 = G__17004;
i__16984_16988 = G__17005;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_17016 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17012_17017 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17013_17018 = null;var count__17014_17019 = 0;var i__17015_17020 = 0;while(true){
if((i__17015_17020 < count__17014_17019))
{var node_17021 = cljs.core._nth.call(null,chunk__17013_17018,i__17015_17020);node_17021.innerHTML = value_17016;
{
var G__17022 = seq__17012_17017;
var G__17023 = chunk__17013_17018;
var G__17024 = count__17014_17019;
var G__17025 = (i__17015_17020 + 1);
seq__17012_17017 = G__17022;
chunk__17013_17018 = G__17023;
count__17014_17019 = G__17024;
i__17015_17020 = G__17025;
continue;
}
} else
{var temp__4092__auto___17026 = cljs.core.seq.call(null,seq__17012_17017);if(temp__4092__auto___17026)
{var seq__17012_17027__$1 = temp__4092__auto___17026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17012_17027__$1))
{var c__4148__auto___17028 = cljs.core.chunk_first.call(null,seq__17012_17027__$1);{
var G__17029 = cljs.core.chunk_rest.call(null,seq__17012_17027__$1);
var G__17030 = c__4148__auto___17028;
var G__17031 = cljs.core.count.call(null,c__4148__auto___17028);
var G__17032 = 0;
seq__17012_17017 = G__17029;
chunk__17013_17018 = G__17030;
count__17014_17019 = G__17031;
i__17015_17020 = G__17032;
continue;
}
} else
{var node_17033 = cljs.core.first.call(null,seq__17012_17027__$1);node_17033.innerHTML = value_17016;
{
var G__17034 = cljs.core.next.call(null,seq__17012_17027__$1);
var G__17035 = null;
var G__17036 = 0;
var G__17037 = 0;
seq__17012_17017 = G__17034;
chunk__17013_17018 = G__17035;
count__17014_17019 = G__17036;
i__17015_17020 = G__17037;
continue;
}
}
} else
{}
}
break;
}
}catch (e17011){if((e17011 instanceof Error))
{var e_17038 = e17011;domina.replace_children_BANG_.call(null,content,value_17016);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17011;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17045_17049 = cljs.core.seq.call(null,children);var chunk__17046_17050 = null;var count__17047_17051 = 0;var i__17048_17052 = 0;while(true){
if((i__17048_17052 < count__17047_17051))
{var child_17053 = cljs.core._nth.call(null,chunk__17046_17050,i__17048_17052);frag.appendChild(child_17053);
{
var G__17054 = seq__17045_17049;
var G__17055 = chunk__17046_17050;
var G__17056 = count__17047_17051;
var G__17057 = (i__17048_17052 + 1);
seq__17045_17049 = G__17054;
chunk__17046_17050 = G__17055;
count__17047_17051 = G__17056;
i__17048_17052 = G__17057;
continue;
}
} else
{var temp__4092__auto___17058 = cljs.core.seq.call(null,seq__17045_17049);if(temp__4092__auto___17058)
{var seq__17045_17059__$1 = temp__4092__auto___17058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17045_17059__$1))
{var c__4148__auto___17060 = cljs.core.chunk_first.call(null,seq__17045_17059__$1);{
var G__17061 = cljs.core.chunk_rest.call(null,seq__17045_17059__$1);
var G__17062 = c__4148__auto___17060;
var G__17063 = cljs.core.count.call(null,c__4148__auto___17060);
var G__17064 = 0;
seq__17045_17049 = G__17061;
chunk__17046_17050 = G__17062;
count__17047_17051 = G__17063;
i__17048_17052 = G__17064;
continue;
}
} else
{var child_17065 = cljs.core.first.call(null,seq__17045_17059__$1);frag.appendChild(child_17065);
{
var G__17066 = cljs.core.next.call(null,seq__17045_17059__$1);
var G__17067 = null;
var G__17068 = 0;
var G__17069 = 0;
seq__17045_17049 = G__17066;
chunk__17046_17050 = G__17067;
count__17047_17051 = G__17068;
i__17048_17052 = G__17069;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17039_SHARP_,p2__17040_SHARP_){return f.call(null,p1__17039_SHARP_,p2__17040_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__17071 = list_thing;if(G__17071)
{var bit__4050__auto__ = (G__17071.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17071.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17071.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17071);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17071);
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
{if((function (){var G__17072 = content;if(G__17072)
{var bit__4050__auto__ = (G__17072.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17072.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17072.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17072);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17072);
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
{if((function (){var G__17073 = content;if(G__17073)
{var bit__4050__auto__ = (G__17073.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17073.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17073.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17073);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17073);
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