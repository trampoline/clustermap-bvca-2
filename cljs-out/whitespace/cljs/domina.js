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
var opt_wrapper_36736 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36737 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36738 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36737,table_section_wrapper_36737,opt_wrapper_36736,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36738,table_section_wrapper_36737,cell_wrapper_36738,opt_wrapper_36736,table_section_wrapper_36737,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36737]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36743 = cljs.core.seq.call(null,tbody);var chunk__36744 = null;var count__36745 = 0;var i__36746 = 0;while(true){
if((i__36746 < count__36745))
{var child = cljs.core._nth.call(null,chunk__36744,i__36746);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36747 = seq__36743;
var G__36748 = chunk__36744;
var G__36749 = count__36745;
var G__36750 = (i__36746 + 1);
seq__36743 = G__36747;
chunk__36744 = G__36748;
count__36745 = G__36749;
i__36746 = G__36750;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36743);if(temp__4092__auto__)
{var seq__36743__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36743__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36743__$1);{
var G__36751 = cljs.core.chunk_rest.call(null,seq__36743__$1);
var G__36752 = c__4148__auto__;
var G__36753 = cljs.core.count.call(null,c__4148__auto__);
var G__36754 = 0;
seq__36743 = G__36751;
chunk__36744 = G__36752;
count__36745 = G__36753;
i__36746 = G__36754;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36743__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36755 = cljs.core.next.call(null,seq__36743__$1);
var G__36756 = null;
var G__36757 = 0;
var G__36758 = 0;
seq__36743 = G__36755;
chunk__36744 = G__36756;
count__36745 = G__36757;
i__36746 = G__36758;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36760 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36760,0,null);var start_wrap = cljs.core.nth.call(null,vec__36760,1,null);var end_wrap = cljs.core.nth.call(null,vec__36760,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36761 = wrapper.lastChild;
var G__36762 = (level - 1);
wrapper = G__36761;
level = G__36762;
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
domina.DomContent = (function (){var obj36764 = {};return obj36764;
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
log_debug.cljs$lang$applyTo = (function (arglist__36765){
var mesg = cljs.core.seq(arglist__36765);
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
log.cljs$lang$applyTo = (function (arglist__36766){
var mesg = cljs.core.seq(arglist__36766);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__36767){
var contents = cljs.core.seq(arglist__36767);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36768_SHARP_){return p1__36768_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36769_SHARP_,p2__36770_SHARP_){return goog.dom.insertChildAt(p1__36769_SHARP_,p2__36770_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36772_SHARP_,p2__36771_SHARP_){return goog.dom.insertSiblingBefore(p2__36771_SHARP_,p1__36772_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36774_SHARP_,p2__36773_SHARP_){return goog.dom.insertSiblingAfter(p2__36773_SHARP_,p1__36774_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36776_SHARP_,p2__36775_SHARP_){return goog.dom.replaceNode(p2__36775_SHARP_,p1__36776_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__36781_36785 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36782_36786 = null;var count__36783_36787 = 0;var i__36784_36788 = 0;while(true){
if((i__36784_36788 < count__36783_36787))
{var n_36789 = cljs.core._nth.call(null,chunk__36782_36786,i__36784_36788);goog.style.setStyle(n_36789,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36790 = seq__36781_36785;
var G__36791 = chunk__36782_36786;
var G__36792 = count__36783_36787;
var G__36793 = (i__36784_36788 + 1);
seq__36781_36785 = G__36790;
chunk__36782_36786 = G__36791;
count__36783_36787 = G__36792;
i__36784_36788 = G__36793;
continue;
}
} else
{var temp__4092__auto___36794 = cljs.core.seq.call(null,seq__36781_36785);if(temp__4092__auto___36794)
{var seq__36781_36795__$1 = temp__4092__auto___36794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36781_36795__$1))
{var c__4148__auto___36796 = cljs.core.chunk_first.call(null,seq__36781_36795__$1);{
var G__36797 = cljs.core.chunk_rest.call(null,seq__36781_36795__$1);
var G__36798 = c__4148__auto___36796;
var G__36799 = cljs.core.count.call(null,c__4148__auto___36796);
var G__36800 = 0;
seq__36781_36785 = G__36797;
chunk__36782_36786 = G__36798;
count__36783_36787 = G__36799;
i__36784_36788 = G__36800;
continue;
}
} else
{var n_36801 = cljs.core.first.call(null,seq__36781_36795__$1);goog.style.setStyle(n_36801,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36802 = cljs.core.next.call(null,seq__36781_36795__$1);
var G__36803 = null;
var G__36804 = 0;
var G__36805 = 0;
seq__36781_36785 = G__36802;
chunk__36782_36786 = G__36803;
count__36783_36787 = G__36804;
i__36784_36788 = G__36805;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36806){
var content = cljs.core.first(arglist__36806);
arglist__36806 = cljs.core.next(arglist__36806);
var name = cljs.core.first(arglist__36806);
var value = cljs.core.rest(arglist__36806);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__36811_36815 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36812_36816 = null;var count__36813_36817 = 0;var i__36814_36818 = 0;while(true){
if((i__36814_36818 < count__36813_36817))
{var n_36819 = cljs.core._nth.call(null,chunk__36812_36816,i__36814_36818);n_36819.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36820 = seq__36811_36815;
var G__36821 = chunk__36812_36816;
var G__36822 = count__36813_36817;
var G__36823 = (i__36814_36818 + 1);
seq__36811_36815 = G__36820;
chunk__36812_36816 = G__36821;
count__36813_36817 = G__36822;
i__36814_36818 = G__36823;
continue;
}
} else
{var temp__4092__auto___36824 = cljs.core.seq.call(null,seq__36811_36815);if(temp__4092__auto___36824)
{var seq__36811_36825__$1 = temp__4092__auto___36824;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36811_36825__$1))
{var c__4148__auto___36826 = cljs.core.chunk_first.call(null,seq__36811_36825__$1);{
var G__36827 = cljs.core.chunk_rest.call(null,seq__36811_36825__$1);
var G__36828 = c__4148__auto___36826;
var G__36829 = cljs.core.count.call(null,c__4148__auto___36826);
var G__36830 = 0;
seq__36811_36815 = G__36827;
chunk__36812_36816 = G__36828;
count__36813_36817 = G__36829;
i__36814_36818 = G__36830;
continue;
}
} else
{var n_36831 = cljs.core.first.call(null,seq__36811_36825__$1);n_36831.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36832 = cljs.core.next.call(null,seq__36811_36825__$1);
var G__36833 = null;
var G__36834 = 0;
var G__36835 = 0;
seq__36811_36815 = G__36832;
chunk__36812_36816 = G__36833;
count__36813_36817 = G__36834;
i__36814_36818 = G__36835;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36836){
var content = cljs.core.first(arglist__36836);
arglist__36836 = cljs.core.next(arglist__36836);
var name = cljs.core.first(arglist__36836);
var value = cljs.core.rest(arglist__36836);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36841_36845 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36842_36846 = null;var count__36843_36847 = 0;var i__36844_36848 = 0;while(true){
if((i__36844_36848 < count__36843_36847))
{var n_36849 = cljs.core._nth.call(null,chunk__36842_36846,i__36844_36848);n_36849.removeAttribute(cljs.core.name.call(null,name));
{
var G__36850 = seq__36841_36845;
var G__36851 = chunk__36842_36846;
var G__36852 = count__36843_36847;
var G__36853 = (i__36844_36848 + 1);
seq__36841_36845 = G__36850;
chunk__36842_36846 = G__36851;
count__36843_36847 = G__36852;
i__36844_36848 = G__36853;
continue;
}
} else
{var temp__4092__auto___36854 = cljs.core.seq.call(null,seq__36841_36845);if(temp__4092__auto___36854)
{var seq__36841_36855__$1 = temp__4092__auto___36854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36841_36855__$1))
{var c__4148__auto___36856 = cljs.core.chunk_first.call(null,seq__36841_36855__$1);{
var G__36857 = cljs.core.chunk_rest.call(null,seq__36841_36855__$1);
var G__36858 = c__4148__auto___36856;
var G__36859 = cljs.core.count.call(null,c__4148__auto___36856);
var G__36860 = 0;
seq__36841_36845 = G__36857;
chunk__36842_36846 = G__36858;
count__36843_36847 = G__36859;
i__36844_36848 = G__36860;
continue;
}
} else
{var n_36861 = cljs.core.first.call(null,seq__36841_36855__$1);n_36861.removeAttribute(cljs.core.name.call(null,name));
{
var G__36862 = cljs.core.next.call(null,seq__36841_36855__$1);
var G__36863 = null;
var G__36864 = 0;
var G__36865 = 0;
seq__36841_36845 = G__36862;
chunk__36842_36846 = G__36863;
count__36843_36847 = G__36864;
i__36844_36848 = G__36865;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36867 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36867,0,null);var v = cljs.core.nth.call(null,vec__36867,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36868_SHARP_){var attr = attrs__$1.item(p1__36868_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36875_36881 = cljs.core.seq.call(null,styles);var chunk__36876_36882 = null;var count__36877_36883 = 0;var i__36878_36884 = 0;while(true){
if((i__36878_36884 < count__36877_36883))
{var vec__36879_36885 = cljs.core._nth.call(null,chunk__36876_36882,i__36878_36884);var name_36886 = cljs.core.nth.call(null,vec__36879_36885,0,null);var value_36887 = cljs.core.nth.call(null,vec__36879_36885,1,null);domina.set_style_BANG_.call(null,content,name_36886,value_36887);
{
var G__36888 = seq__36875_36881;
var G__36889 = chunk__36876_36882;
var G__36890 = count__36877_36883;
var G__36891 = (i__36878_36884 + 1);
seq__36875_36881 = G__36888;
chunk__36876_36882 = G__36889;
count__36877_36883 = G__36890;
i__36878_36884 = G__36891;
continue;
}
} else
{var temp__4092__auto___36892 = cljs.core.seq.call(null,seq__36875_36881);if(temp__4092__auto___36892)
{var seq__36875_36893__$1 = temp__4092__auto___36892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36875_36893__$1))
{var c__4148__auto___36894 = cljs.core.chunk_first.call(null,seq__36875_36893__$1);{
var G__36895 = cljs.core.chunk_rest.call(null,seq__36875_36893__$1);
var G__36896 = c__4148__auto___36894;
var G__36897 = cljs.core.count.call(null,c__4148__auto___36894);
var G__36898 = 0;
seq__36875_36881 = G__36895;
chunk__36876_36882 = G__36896;
count__36877_36883 = G__36897;
i__36878_36884 = G__36898;
continue;
}
} else
{var vec__36880_36899 = cljs.core.first.call(null,seq__36875_36893__$1);var name_36900 = cljs.core.nth.call(null,vec__36880_36899,0,null);var value_36901 = cljs.core.nth.call(null,vec__36880_36899,1,null);domina.set_style_BANG_.call(null,content,name_36900,value_36901);
{
var G__36902 = cljs.core.next.call(null,seq__36875_36893__$1);
var G__36903 = null;
var G__36904 = 0;
var G__36905 = 0;
seq__36875_36881 = G__36902;
chunk__36876_36882 = G__36903;
count__36877_36883 = G__36904;
i__36878_36884 = G__36905;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36912_36918 = cljs.core.seq.call(null,attrs);var chunk__36913_36919 = null;var count__36914_36920 = 0;var i__36915_36921 = 0;while(true){
if((i__36915_36921 < count__36914_36920))
{var vec__36916_36922 = cljs.core._nth.call(null,chunk__36913_36919,i__36915_36921);var name_36923 = cljs.core.nth.call(null,vec__36916_36922,0,null);var value_36924 = cljs.core.nth.call(null,vec__36916_36922,1,null);domina.set_attr_BANG_.call(null,content,name_36923,value_36924);
{
var G__36925 = seq__36912_36918;
var G__36926 = chunk__36913_36919;
var G__36927 = count__36914_36920;
var G__36928 = (i__36915_36921 + 1);
seq__36912_36918 = G__36925;
chunk__36913_36919 = G__36926;
count__36914_36920 = G__36927;
i__36915_36921 = G__36928;
continue;
}
} else
{var temp__4092__auto___36929 = cljs.core.seq.call(null,seq__36912_36918);if(temp__4092__auto___36929)
{var seq__36912_36930__$1 = temp__4092__auto___36929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36912_36930__$1))
{var c__4148__auto___36931 = cljs.core.chunk_first.call(null,seq__36912_36930__$1);{
var G__36932 = cljs.core.chunk_rest.call(null,seq__36912_36930__$1);
var G__36933 = c__4148__auto___36931;
var G__36934 = cljs.core.count.call(null,c__4148__auto___36931);
var G__36935 = 0;
seq__36912_36918 = G__36932;
chunk__36913_36919 = G__36933;
count__36914_36920 = G__36934;
i__36915_36921 = G__36935;
continue;
}
} else
{var vec__36917_36936 = cljs.core.first.call(null,seq__36912_36930__$1);var name_36937 = cljs.core.nth.call(null,vec__36917_36936,0,null);var value_36938 = cljs.core.nth.call(null,vec__36917_36936,1,null);domina.set_attr_BANG_.call(null,content,name_36937,value_36938);
{
var G__36939 = cljs.core.next.call(null,seq__36912_36930__$1);
var G__36940 = null;
var G__36941 = 0;
var G__36942 = 0;
seq__36912_36918 = G__36939;
chunk__36913_36919 = G__36940;
count__36914_36920 = G__36941;
i__36915_36921 = G__36942;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36947_36951 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36948_36952 = null;var count__36949_36953 = 0;var i__36950_36954 = 0;while(true){
if((i__36950_36954 < count__36949_36953))
{var node_36955 = cljs.core._nth.call(null,chunk__36948_36952,i__36950_36954);goog.dom.classes.add(node_36955,class$);
{
var G__36956 = seq__36947_36951;
var G__36957 = chunk__36948_36952;
var G__36958 = count__36949_36953;
var G__36959 = (i__36950_36954 + 1);
seq__36947_36951 = G__36956;
chunk__36948_36952 = G__36957;
count__36949_36953 = G__36958;
i__36950_36954 = G__36959;
continue;
}
} else
{var temp__4092__auto___36960 = cljs.core.seq.call(null,seq__36947_36951);if(temp__4092__auto___36960)
{var seq__36947_36961__$1 = temp__4092__auto___36960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36947_36961__$1))
{var c__4148__auto___36962 = cljs.core.chunk_first.call(null,seq__36947_36961__$1);{
var G__36963 = cljs.core.chunk_rest.call(null,seq__36947_36961__$1);
var G__36964 = c__4148__auto___36962;
var G__36965 = cljs.core.count.call(null,c__4148__auto___36962);
var G__36966 = 0;
seq__36947_36951 = G__36963;
chunk__36948_36952 = G__36964;
count__36949_36953 = G__36965;
i__36950_36954 = G__36966;
continue;
}
} else
{var node_36967 = cljs.core.first.call(null,seq__36947_36961__$1);goog.dom.classes.add(node_36967,class$);
{
var G__36968 = cljs.core.next.call(null,seq__36947_36961__$1);
var G__36969 = null;
var G__36970 = 0;
var G__36971 = 0;
seq__36947_36951 = G__36968;
chunk__36948_36952 = G__36969;
count__36949_36953 = G__36970;
i__36950_36954 = G__36971;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36976_36980 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36977_36981 = null;var count__36978_36982 = 0;var i__36979_36983 = 0;while(true){
if((i__36979_36983 < count__36978_36982))
{var node_36984 = cljs.core._nth.call(null,chunk__36977_36981,i__36979_36983);goog.dom.classes.remove(node_36984,class$);
{
var G__36985 = seq__36976_36980;
var G__36986 = chunk__36977_36981;
var G__36987 = count__36978_36982;
var G__36988 = (i__36979_36983 + 1);
seq__36976_36980 = G__36985;
chunk__36977_36981 = G__36986;
count__36978_36982 = G__36987;
i__36979_36983 = G__36988;
continue;
}
} else
{var temp__4092__auto___36989 = cljs.core.seq.call(null,seq__36976_36980);if(temp__4092__auto___36989)
{var seq__36976_36990__$1 = temp__4092__auto___36989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36976_36990__$1))
{var c__4148__auto___36991 = cljs.core.chunk_first.call(null,seq__36976_36990__$1);{
var G__36992 = cljs.core.chunk_rest.call(null,seq__36976_36990__$1);
var G__36993 = c__4148__auto___36991;
var G__36994 = cljs.core.count.call(null,c__4148__auto___36991);
var G__36995 = 0;
seq__36976_36980 = G__36992;
chunk__36977_36981 = G__36993;
count__36978_36982 = G__36994;
i__36979_36983 = G__36995;
continue;
}
} else
{var node_36996 = cljs.core.first.call(null,seq__36976_36990__$1);goog.dom.classes.remove(node_36996,class$);
{
var G__36997 = cljs.core.next.call(null,seq__36976_36990__$1);
var G__36998 = null;
var G__36999 = 0;
var G__37000 = 0;
seq__36976_36980 = G__36997;
chunk__36977_36981 = G__36998;
count__36978_36982 = G__36999;
i__36979_36983 = G__37000;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__37005_37009 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37006_37010 = null;var count__37007_37011 = 0;var i__37008_37012 = 0;while(true){
if((i__37008_37012 < count__37007_37011))
{var node_37013 = cljs.core._nth.call(null,chunk__37006_37010,i__37008_37012);goog.dom.classes.toggle(node_37013,class$);
{
var G__37014 = seq__37005_37009;
var G__37015 = chunk__37006_37010;
var G__37016 = count__37007_37011;
var G__37017 = (i__37008_37012 + 1);
seq__37005_37009 = G__37014;
chunk__37006_37010 = G__37015;
count__37007_37011 = G__37016;
i__37008_37012 = G__37017;
continue;
}
} else
{var temp__4092__auto___37018 = cljs.core.seq.call(null,seq__37005_37009);if(temp__4092__auto___37018)
{var seq__37005_37019__$1 = temp__4092__auto___37018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37005_37019__$1))
{var c__4148__auto___37020 = cljs.core.chunk_first.call(null,seq__37005_37019__$1);{
var G__37021 = cljs.core.chunk_rest.call(null,seq__37005_37019__$1);
var G__37022 = c__4148__auto___37020;
var G__37023 = cljs.core.count.call(null,c__4148__auto___37020);
var G__37024 = 0;
seq__37005_37009 = G__37021;
chunk__37006_37010 = G__37022;
count__37007_37011 = G__37023;
i__37008_37012 = G__37024;
continue;
}
} else
{var node_37025 = cljs.core.first.call(null,seq__37005_37019__$1);goog.dom.classes.toggle(node_37025,class$);
{
var G__37026 = cljs.core.next.call(null,seq__37005_37019__$1);
var G__37027 = null;
var G__37028 = 0;
var G__37029 = 0;
seq__37005_37009 = G__37026;
chunk__37006_37010 = G__37027;
count__37007_37011 = G__37028;
i__37008_37012 = G__37029;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_37038__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__37034_37039 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37035_37040 = null;var count__37036_37041 = 0;var i__37037_37042 = 0;while(true){
if((i__37037_37042 < count__37036_37041))
{var node_37043 = cljs.core._nth.call(null,chunk__37035_37040,i__37037_37042);goog.dom.classes.set(node_37043,classes_37038__$1);
{
var G__37044 = seq__37034_37039;
var G__37045 = chunk__37035_37040;
var G__37046 = count__37036_37041;
var G__37047 = (i__37037_37042 + 1);
seq__37034_37039 = G__37044;
chunk__37035_37040 = G__37045;
count__37036_37041 = G__37046;
i__37037_37042 = G__37047;
continue;
}
} else
{var temp__4092__auto___37048 = cljs.core.seq.call(null,seq__37034_37039);if(temp__4092__auto___37048)
{var seq__37034_37049__$1 = temp__4092__auto___37048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37034_37049__$1))
{var c__4148__auto___37050 = cljs.core.chunk_first.call(null,seq__37034_37049__$1);{
var G__37051 = cljs.core.chunk_rest.call(null,seq__37034_37049__$1);
var G__37052 = c__4148__auto___37050;
var G__37053 = cljs.core.count.call(null,c__4148__auto___37050);
var G__37054 = 0;
seq__37034_37039 = G__37051;
chunk__37035_37040 = G__37052;
count__37036_37041 = G__37053;
i__37037_37042 = G__37054;
continue;
}
} else
{var node_37055 = cljs.core.first.call(null,seq__37034_37049__$1);goog.dom.classes.set(node_37055,classes_37038__$1);
{
var G__37056 = cljs.core.next.call(null,seq__37034_37049__$1);
var G__37057 = null;
var G__37058 = 0;
var G__37059 = 0;
seq__37034_37039 = G__37056;
chunk__37035_37040 = G__37057;
count__37036_37041 = G__37058;
i__37037_37042 = G__37059;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__37064_37068 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37065_37069 = null;var count__37066_37070 = 0;var i__37067_37071 = 0;while(true){
if((i__37067_37071 < count__37066_37070))
{var node_37072 = cljs.core._nth.call(null,chunk__37065_37069,i__37067_37071);goog.dom.setTextContent(node_37072,value);
{
var G__37073 = seq__37064_37068;
var G__37074 = chunk__37065_37069;
var G__37075 = count__37066_37070;
var G__37076 = (i__37067_37071 + 1);
seq__37064_37068 = G__37073;
chunk__37065_37069 = G__37074;
count__37066_37070 = G__37075;
i__37067_37071 = G__37076;
continue;
}
} else
{var temp__4092__auto___37077 = cljs.core.seq.call(null,seq__37064_37068);if(temp__4092__auto___37077)
{var seq__37064_37078__$1 = temp__4092__auto___37077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37064_37078__$1))
{var c__4148__auto___37079 = cljs.core.chunk_first.call(null,seq__37064_37078__$1);{
var G__37080 = cljs.core.chunk_rest.call(null,seq__37064_37078__$1);
var G__37081 = c__4148__auto___37079;
var G__37082 = cljs.core.count.call(null,c__4148__auto___37079);
var G__37083 = 0;
seq__37064_37068 = G__37080;
chunk__37065_37069 = G__37081;
count__37066_37070 = G__37082;
i__37067_37071 = G__37083;
continue;
}
} else
{var node_37084 = cljs.core.first.call(null,seq__37064_37078__$1);goog.dom.setTextContent(node_37084,value);
{
var G__37085 = cljs.core.next.call(null,seq__37064_37078__$1);
var G__37086 = null;
var G__37087 = 0;
var G__37088 = 0;
seq__37064_37068 = G__37085;
chunk__37065_37069 = G__37086;
count__37066_37070 = G__37087;
i__37067_37071 = G__37088;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__37093_37097 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37094_37098 = null;var count__37095_37099 = 0;var i__37096_37100 = 0;while(true){
if((i__37096_37100 < count__37095_37099))
{var node_37101 = cljs.core._nth.call(null,chunk__37094_37098,i__37096_37100);goog.dom.forms.setValue(node_37101,value);
{
var G__37102 = seq__37093_37097;
var G__37103 = chunk__37094_37098;
var G__37104 = count__37095_37099;
var G__37105 = (i__37096_37100 + 1);
seq__37093_37097 = G__37102;
chunk__37094_37098 = G__37103;
count__37095_37099 = G__37104;
i__37096_37100 = G__37105;
continue;
}
} else
{var temp__4092__auto___37106 = cljs.core.seq.call(null,seq__37093_37097);if(temp__4092__auto___37106)
{var seq__37093_37107__$1 = temp__4092__auto___37106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37093_37107__$1))
{var c__4148__auto___37108 = cljs.core.chunk_first.call(null,seq__37093_37107__$1);{
var G__37109 = cljs.core.chunk_rest.call(null,seq__37093_37107__$1);
var G__37110 = c__4148__auto___37108;
var G__37111 = cljs.core.count.call(null,c__4148__auto___37108);
var G__37112 = 0;
seq__37093_37097 = G__37109;
chunk__37094_37098 = G__37110;
count__37095_37099 = G__37111;
i__37096_37100 = G__37112;
continue;
}
} else
{var node_37113 = cljs.core.first.call(null,seq__37093_37107__$1);goog.dom.forms.setValue(node_37113,value);
{
var G__37114 = cljs.core.next.call(null,seq__37093_37107__$1);
var G__37115 = null;
var G__37116 = 0;
var G__37117 = 0;
seq__37093_37097 = G__37114;
chunk__37094_37098 = G__37115;
count__37095_37099 = G__37116;
i__37096_37100 = G__37117;
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
{var value_37128 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__37124_37129 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37125_37130 = null;var count__37126_37131 = 0;var i__37127_37132 = 0;while(true){
if((i__37127_37132 < count__37126_37131))
{var node_37133 = cljs.core._nth.call(null,chunk__37125_37130,i__37127_37132);node_37133.innerHTML = value_37128;
{
var G__37134 = seq__37124_37129;
var G__37135 = chunk__37125_37130;
var G__37136 = count__37126_37131;
var G__37137 = (i__37127_37132 + 1);
seq__37124_37129 = G__37134;
chunk__37125_37130 = G__37135;
count__37126_37131 = G__37136;
i__37127_37132 = G__37137;
continue;
}
} else
{var temp__4092__auto___37138 = cljs.core.seq.call(null,seq__37124_37129);if(temp__4092__auto___37138)
{var seq__37124_37139__$1 = temp__4092__auto___37138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37124_37139__$1))
{var c__4148__auto___37140 = cljs.core.chunk_first.call(null,seq__37124_37139__$1);{
var G__37141 = cljs.core.chunk_rest.call(null,seq__37124_37139__$1);
var G__37142 = c__4148__auto___37140;
var G__37143 = cljs.core.count.call(null,c__4148__auto___37140);
var G__37144 = 0;
seq__37124_37129 = G__37141;
chunk__37125_37130 = G__37142;
count__37126_37131 = G__37143;
i__37127_37132 = G__37144;
continue;
}
} else
{var node_37145 = cljs.core.first.call(null,seq__37124_37139__$1);node_37145.innerHTML = value_37128;
{
var G__37146 = cljs.core.next.call(null,seq__37124_37139__$1);
var G__37147 = null;
var G__37148 = 0;
var G__37149 = 0;
seq__37124_37129 = G__37146;
chunk__37125_37130 = G__37147;
count__37126_37131 = G__37148;
i__37127_37132 = G__37149;
continue;
}
}
} else
{}
}
break;
}
}catch (e37123){if((e37123 instanceof Error))
{var e_37150 = e37123;domina.replace_children_BANG_.call(null,content,value_37128);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37123;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__37157_37161 = cljs.core.seq.call(null,children);var chunk__37158_37162 = null;var count__37159_37163 = 0;var i__37160_37164 = 0;while(true){
if((i__37160_37164 < count__37159_37163))
{var child_37165 = cljs.core._nth.call(null,chunk__37158_37162,i__37160_37164);frag.appendChild(child_37165);
{
var G__37166 = seq__37157_37161;
var G__37167 = chunk__37158_37162;
var G__37168 = count__37159_37163;
var G__37169 = (i__37160_37164 + 1);
seq__37157_37161 = G__37166;
chunk__37158_37162 = G__37167;
count__37159_37163 = G__37168;
i__37160_37164 = G__37169;
continue;
}
} else
{var temp__4092__auto___37170 = cljs.core.seq.call(null,seq__37157_37161);if(temp__4092__auto___37170)
{var seq__37157_37171__$1 = temp__4092__auto___37170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37157_37171__$1))
{var c__4148__auto___37172 = cljs.core.chunk_first.call(null,seq__37157_37171__$1);{
var G__37173 = cljs.core.chunk_rest.call(null,seq__37157_37171__$1);
var G__37174 = c__4148__auto___37172;
var G__37175 = cljs.core.count.call(null,c__4148__auto___37172);
var G__37176 = 0;
seq__37157_37161 = G__37173;
chunk__37158_37162 = G__37174;
count__37159_37163 = G__37175;
i__37160_37164 = G__37176;
continue;
}
} else
{var child_37177 = cljs.core.first.call(null,seq__37157_37171__$1);frag.appendChild(child_37177);
{
var G__37178 = cljs.core.next.call(null,seq__37157_37171__$1);
var G__37179 = null;
var G__37180 = 0;
var G__37181 = 0;
seq__37157_37161 = G__37178;
chunk__37158_37162 = G__37179;
count__37159_37163 = G__37180;
i__37160_37164 = G__37181;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__37151_SHARP_,p2__37152_SHARP_){return f.call(null,p1__37151_SHARP_,p2__37152_SHARP_);
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
{if((function (){var G__37183 = list_thing;if(G__37183)
{var bit__4050__auto__ = (G__37183.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37183.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37183.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37183);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37183);
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
{if((function (){var G__37184 = content;if(G__37184)
{var bit__4050__auto__ = (G__37184.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37184.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37184.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37184);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37184);
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
{if((function (){var G__37185 = content;if(G__37185)
{var bit__4050__auto__ = (G__37185.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37185.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37185.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37185);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37185);
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
