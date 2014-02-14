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
var opt_wrapper_37792 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_37793 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_37794 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_37793,table_section_wrapper_37793,opt_wrapper_37792,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_37794,table_section_wrapper_37793,cell_wrapper_37794,opt_wrapper_37792,table_section_wrapper_37793,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_37793]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__37799 = cljs.core.seq.call(null,tbody);var chunk__37800 = null;var count__37801 = 0;var i__37802 = 0;while(true){
if((i__37802 < count__37801))
{var child = cljs.core._nth.call(null,chunk__37800,i__37802);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37803 = seq__37799;
var G__37804 = chunk__37800;
var G__37805 = count__37801;
var G__37806 = (i__37802 + 1);
seq__37799 = G__37803;
chunk__37800 = G__37804;
count__37801 = G__37805;
i__37802 = G__37806;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37799);if(temp__4092__auto__)
{var seq__37799__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37799__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37799__$1);{
var G__37807 = cljs.core.chunk_rest.call(null,seq__37799__$1);
var G__37808 = c__4148__auto__;
var G__37809 = cljs.core.count.call(null,c__4148__auto__);
var G__37810 = 0;
seq__37799 = G__37807;
chunk__37800 = G__37808;
count__37801 = G__37809;
i__37802 = G__37810;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__37799__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37811 = cljs.core.next.call(null,seq__37799__$1);
var G__37812 = null;
var G__37813 = 0;
var G__37814 = 0;
seq__37799 = G__37811;
chunk__37800 = G__37812;
count__37801 = G__37813;
i__37802 = G__37814;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__37816 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__37816,0,null);var start_wrap = cljs.core.nth.call(null,vec__37816,1,null);var end_wrap = cljs.core.nth.call(null,vec__37816,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__37817 = wrapper.lastChild;
var G__37818 = (level - 1);
wrapper = G__37817;
level = G__37818;
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
domina.DomContent = (function (){var obj37820 = {};return obj37820;
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
log_debug.cljs$lang$applyTo = (function (arglist__37821){
var mesg = cljs.core.seq(arglist__37821);
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
log.cljs$lang$applyTo = (function (arglist__37822){
var mesg = cljs.core.seq(arglist__37822);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__37823){
var contents = cljs.core.seq(arglist__37823);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__37824_SHARP_){return p1__37824_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__37825_SHARP_,p2__37826_SHARP_){return goog.dom.insertChildAt(p1__37825_SHARP_,p2__37826_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37828_SHARP_,p2__37827_SHARP_){return goog.dom.insertSiblingBefore(p2__37827_SHARP_,p1__37828_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37830_SHARP_,p2__37829_SHARP_){return goog.dom.insertSiblingAfter(p2__37829_SHARP_,p1__37830_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__37832_SHARP_,p2__37831_SHARP_){return goog.dom.replaceNode(p2__37831_SHARP_,p1__37832_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__37837_37841 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37838_37842 = null;var count__37839_37843 = 0;var i__37840_37844 = 0;while(true){
if((i__37840_37844 < count__37839_37843))
{var n_37845 = cljs.core._nth.call(null,chunk__37838_37842,i__37840_37844);goog.style.setStyle(n_37845,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37846 = seq__37837_37841;
var G__37847 = chunk__37838_37842;
var G__37848 = count__37839_37843;
var G__37849 = (i__37840_37844 + 1);
seq__37837_37841 = G__37846;
chunk__37838_37842 = G__37847;
count__37839_37843 = G__37848;
i__37840_37844 = G__37849;
continue;
}
} else
{var temp__4092__auto___37850 = cljs.core.seq.call(null,seq__37837_37841);if(temp__4092__auto___37850)
{var seq__37837_37851__$1 = temp__4092__auto___37850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37837_37851__$1))
{var c__4148__auto___37852 = cljs.core.chunk_first.call(null,seq__37837_37851__$1);{
var G__37853 = cljs.core.chunk_rest.call(null,seq__37837_37851__$1);
var G__37854 = c__4148__auto___37852;
var G__37855 = cljs.core.count.call(null,c__4148__auto___37852);
var G__37856 = 0;
seq__37837_37841 = G__37853;
chunk__37838_37842 = G__37854;
count__37839_37843 = G__37855;
i__37840_37844 = G__37856;
continue;
}
} else
{var n_37857 = cljs.core.first.call(null,seq__37837_37851__$1);goog.style.setStyle(n_37857,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37858 = cljs.core.next.call(null,seq__37837_37851__$1);
var G__37859 = null;
var G__37860 = 0;
var G__37861 = 0;
seq__37837_37841 = G__37858;
chunk__37838_37842 = G__37859;
count__37839_37843 = G__37860;
i__37840_37844 = G__37861;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__37862){
var content = cljs.core.first(arglist__37862);
arglist__37862 = cljs.core.next(arglist__37862);
var name = cljs.core.first(arglist__37862);
var value = cljs.core.rest(arglist__37862);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__37867_37871 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37868_37872 = null;var count__37869_37873 = 0;var i__37870_37874 = 0;while(true){
if((i__37870_37874 < count__37869_37873))
{var n_37875 = cljs.core._nth.call(null,chunk__37868_37872,i__37870_37874);n_37875.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37876 = seq__37867_37871;
var G__37877 = chunk__37868_37872;
var G__37878 = count__37869_37873;
var G__37879 = (i__37870_37874 + 1);
seq__37867_37871 = G__37876;
chunk__37868_37872 = G__37877;
count__37869_37873 = G__37878;
i__37870_37874 = G__37879;
continue;
}
} else
{var temp__4092__auto___37880 = cljs.core.seq.call(null,seq__37867_37871);if(temp__4092__auto___37880)
{var seq__37867_37881__$1 = temp__4092__auto___37880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37867_37881__$1))
{var c__4148__auto___37882 = cljs.core.chunk_first.call(null,seq__37867_37881__$1);{
var G__37883 = cljs.core.chunk_rest.call(null,seq__37867_37881__$1);
var G__37884 = c__4148__auto___37882;
var G__37885 = cljs.core.count.call(null,c__4148__auto___37882);
var G__37886 = 0;
seq__37867_37871 = G__37883;
chunk__37868_37872 = G__37884;
count__37869_37873 = G__37885;
i__37870_37874 = G__37886;
continue;
}
} else
{var n_37887 = cljs.core.first.call(null,seq__37867_37881__$1);n_37887.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37888 = cljs.core.next.call(null,seq__37867_37881__$1);
var G__37889 = null;
var G__37890 = 0;
var G__37891 = 0;
seq__37867_37871 = G__37888;
chunk__37868_37872 = G__37889;
count__37869_37873 = G__37890;
i__37870_37874 = G__37891;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__37892){
var content = cljs.core.first(arglist__37892);
arglist__37892 = cljs.core.next(arglist__37892);
var name = cljs.core.first(arglist__37892);
var value = cljs.core.rest(arglist__37892);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__37897_37901 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37898_37902 = null;var count__37899_37903 = 0;var i__37900_37904 = 0;while(true){
if((i__37900_37904 < count__37899_37903))
{var n_37905 = cljs.core._nth.call(null,chunk__37898_37902,i__37900_37904);n_37905.removeAttribute(cljs.core.name.call(null,name));
{
var G__37906 = seq__37897_37901;
var G__37907 = chunk__37898_37902;
var G__37908 = count__37899_37903;
var G__37909 = (i__37900_37904 + 1);
seq__37897_37901 = G__37906;
chunk__37898_37902 = G__37907;
count__37899_37903 = G__37908;
i__37900_37904 = G__37909;
continue;
}
} else
{var temp__4092__auto___37910 = cljs.core.seq.call(null,seq__37897_37901);if(temp__4092__auto___37910)
{var seq__37897_37911__$1 = temp__4092__auto___37910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37897_37911__$1))
{var c__4148__auto___37912 = cljs.core.chunk_first.call(null,seq__37897_37911__$1);{
var G__37913 = cljs.core.chunk_rest.call(null,seq__37897_37911__$1);
var G__37914 = c__4148__auto___37912;
var G__37915 = cljs.core.count.call(null,c__4148__auto___37912);
var G__37916 = 0;
seq__37897_37901 = G__37913;
chunk__37898_37902 = G__37914;
count__37899_37903 = G__37915;
i__37900_37904 = G__37916;
continue;
}
} else
{var n_37917 = cljs.core.first.call(null,seq__37897_37911__$1);n_37917.removeAttribute(cljs.core.name.call(null,name));
{
var G__37918 = cljs.core.next.call(null,seq__37897_37911__$1);
var G__37919 = null;
var G__37920 = 0;
var G__37921 = 0;
seq__37897_37901 = G__37918;
chunk__37898_37902 = G__37919;
count__37899_37903 = G__37920;
i__37900_37904 = G__37921;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__37923 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__37923,0,null);var v = cljs.core.nth.call(null,vec__37923,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__37924_SHARP_){var attr = attrs__$1.item(p1__37924_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__37931_37937 = cljs.core.seq.call(null,styles);var chunk__37932_37938 = null;var count__37933_37939 = 0;var i__37934_37940 = 0;while(true){
if((i__37934_37940 < count__37933_37939))
{var vec__37935_37941 = cljs.core._nth.call(null,chunk__37932_37938,i__37934_37940);var name_37942 = cljs.core.nth.call(null,vec__37935_37941,0,null);var value_37943 = cljs.core.nth.call(null,vec__37935_37941,1,null);domina.set_style_BANG_.call(null,content,name_37942,value_37943);
{
var G__37944 = seq__37931_37937;
var G__37945 = chunk__37932_37938;
var G__37946 = count__37933_37939;
var G__37947 = (i__37934_37940 + 1);
seq__37931_37937 = G__37944;
chunk__37932_37938 = G__37945;
count__37933_37939 = G__37946;
i__37934_37940 = G__37947;
continue;
}
} else
{var temp__4092__auto___37948 = cljs.core.seq.call(null,seq__37931_37937);if(temp__4092__auto___37948)
{var seq__37931_37949__$1 = temp__4092__auto___37948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37931_37949__$1))
{var c__4148__auto___37950 = cljs.core.chunk_first.call(null,seq__37931_37949__$1);{
var G__37951 = cljs.core.chunk_rest.call(null,seq__37931_37949__$1);
var G__37952 = c__4148__auto___37950;
var G__37953 = cljs.core.count.call(null,c__4148__auto___37950);
var G__37954 = 0;
seq__37931_37937 = G__37951;
chunk__37932_37938 = G__37952;
count__37933_37939 = G__37953;
i__37934_37940 = G__37954;
continue;
}
} else
{var vec__37936_37955 = cljs.core.first.call(null,seq__37931_37949__$1);var name_37956 = cljs.core.nth.call(null,vec__37936_37955,0,null);var value_37957 = cljs.core.nth.call(null,vec__37936_37955,1,null);domina.set_style_BANG_.call(null,content,name_37956,value_37957);
{
var G__37958 = cljs.core.next.call(null,seq__37931_37949__$1);
var G__37959 = null;
var G__37960 = 0;
var G__37961 = 0;
seq__37931_37937 = G__37958;
chunk__37932_37938 = G__37959;
count__37933_37939 = G__37960;
i__37934_37940 = G__37961;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__37968_37974 = cljs.core.seq.call(null,attrs);var chunk__37969_37975 = null;var count__37970_37976 = 0;var i__37971_37977 = 0;while(true){
if((i__37971_37977 < count__37970_37976))
{var vec__37972_37978 = cljs.core._nth.call(null,chunk__37969_37975,i__37971_37977);var name_37979 = cljs.core.nth.call(null,vec__37972_37978,0,null);var value_37980 = cljs.core.nth.call(null,vec__37972_37978,1,null);domina.set_attr_BANG_.call(null,content,name_37979,value_37980);
{
var G__37981 = seq__37968_37974;
var G__37982 = chunk__37969_37975;
var G__37983 = count__37970_37976;
var G__37984 = (i__37971_37977 + 1);
seq__37968_37974 = G__37981;
chunk__37969_37975 = G__37982;
count__37970_37976 = G__37983;
i__37971_37977 = G__37984;
continue;
}
} else
{var temp__4092__auto___37985 = cljs.core.seq.call(null,seq__37968_37974);if(temp__4092__auto___37985)
{var seq__37968_37986__$1 = temp__4092__auto___37985;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37968_37986__$1))
{var c__4148__auto___37987 = cljs.core.chunk_first.call(null,seq__37968_37986__$1);{
var G__37988 = cljs.core.chunk_rest.call(null,seq__37968_37986__$1);
var G__37989 = c__4148__auto___37987;
var G__37990 = cljs.core.count.call(null,c__4148__auto___37987);
var G__37991 = 0;
seq__37968_37974 = G__37988;
chunk__37969_37975 = G__37989;
count__37970_37976 = G__37990;
i__37971_37977 = G__37991;
continue;
}
} else
{var vec__37973_37992 = cljs.core.first.call(null,seq__37968_37986__$1);var name_37993 = cljs.core.nth.call(null,vec__37973_37992,0,null);var value_37994 = cljs.core.nth.call(null,vec__37973_37992,1,null);domina.set_attr_BANG_.call(null,content,name_37993,value_37994);
{
var G__37995 = cljs.core.next.call(null,seq__37968_37986__$1);
var G__37996 = null;
var G__37997 = 0;
var G__37998 = 0;
seq__37968_37974 = G__37995;
chunk__37969_37975 = G__37996;
count__37970_37976 = G__37997;
i__37971_37977 = G__37998;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38003_38007 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38004_38008 = null;var count__38005_38009 = 0;var i__38006_38010 = 0;while(true){
if((i__38006_38010 < count__38005_38009))
{var node_38011 = cljs.core._nth.call(null,chunk__38004_38008,i__38006_38010);goog.dom.classes.add(node_38011,class$);
{
var G__38012 = seq__38003_38007;
var G__38013 = chunk__38004_38008;
var G__38014 = count__38005_38009;
var G__38015 = (i__38006_38010 + 1);
seq__38003_38007 = G__38012;
chunk__38004_38008 = G__38013;
count__38005_38009 = G__38014;
i__38006_38010 = G__38015;
continue;
}
} else
{var temp__4092__auto___38016 = cljs.core.seq.call(null,seq__38003_38007);if(temp__4092__auto___38016)
{var seq__38003_38017__$1 = temp__4092__auto___38016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38003_38017__$1))
{var c__4148__auto___38018 = cljs.core.chunk_first.call(null,seq__38003_38017__$1);{
var G__38019 = cljs.core.chunk_rest.call(null,seq__38003_38017__$1);
var G__38020 = c__4148__auto___38018;
var G__38021 = cljs.core.count.call(null,c__4148__auto___38018);
var G__38022 = 0;
seq__38003_38007 = G__38019;
chunk__38004_38008 = G__38020;
count__38005_38009 = G__38021;
i__38006_38010 = G__38022;
continue;
}
} else
{var node_38023 = cljs.core.first.call(null,seq__38003_38017__$1);goog.dom.classes.add(node_38023,class$);
{
var G__38024 = cljs.core.next.call(null,seq__38003_38017__$1);
var G__38025 = null;
var G__38026 = 0;
var G__38027 = 0;
seq__38003_38007 = G__38024;
chunk__38004_38008 = G__38025;
count__38005_38009 = G__38026;
i__38006_38010 = G__38027;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38032_38036 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38033_38037 = null;var count__38034_38038 = 0;var i__38035_38039 = 0;while(true){
if((i__38035_38039 < count__38034_38038))
{var node_38040 = cljs.core._nth.call(null,chunk__38033_38037,i__38035_38039);goog.dom.classes.remove(node_38040,class$);
{
var G__38041 = seq__38032_38036;
var G__38042 = chunk__38033_38037;
var G__38043 = count__38034_38038;
var G__38044 = (i__38035_38039 + 1);
seq__38032_38036 = G__38041;
chunk__38033_38037 = G__38042;
count__38034_38038 = G__38043;
i__38035_38039 = G__38044;
continue;
}
} else
{var temp__4092__auto___38045 = cljs.core.seq.call(null,seq__38032_38036);if(temp__4092__auto___38045)
{var seq__38032_38046__$1 = temp__4092__auto___38045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38032_38046__$1))
{var c__4148__auto___38047 = cljs.core.chunk_first.call(null,seq__38032_38046__$1);{
var G__38048 = cljs.core.chunk_rest.call(null,seq__38032_38046__$1);
var G__38049 = c__4148__auto___38047;
var G__38050 = cljs.core.count.call(null,c__4148__auto___38047);
var G__38051 = 0;
seq__38032_38036 = G__38048;
chunk__38033_38037 = G__38049;
count__38034_38038 = G__38050;
i__38035_38039 = G__38051;
continue;
}
} else
{var node_38052 = cljs.core.first.call(null,seq__38032_38046__$1);goog.dom.classes.remove(node_38052,class$);
{
var G__38053 = cljs.core.next.call(null,seq__38032_38046__$1);
var G__38054 = null;
var G__38055 = 0;
var G__38056 = 0;
seq__38032_38036 = G__38053;
chunk__38033_38037 = G__38054;
count__38034_38038 = G__38055;
i__38035_38039 = G__38056;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38061_38065 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38062_38066 = null;var count__38063_38067 = 0;var i__38064_38068 = 0;while(true){
if((i__38064_38068 < count__38063_38067))
{var node_38069 = cljs.core._nth.call(null,chunk__38062_38066,i__38064_38068);goog.dom.classes.toggle(node_38069,class$);
{
var G__38070 = seq__38061_38065;
var G__38071 = chunk__38062_38066;
var G__38072 = count__38063_38067;
var G__38073 = (i__38064_38068 + 1);
seq__38061_38065 = G__38070;
chunk__38062_38066 = G__38071;
count__38063_38067 = G__38072;
i__38064_38068 = G__38073;
continue;
}
} else
{var temp__4092__auto___38074 = cljs.core.seq.call(null,seq__38061_38065);if(temp__4092__auto___38074)
{var seq__38061_38075__$1 = temp__4092__auto___38074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38061_38075__$1))
{var c__4148__auto___38076 = cljs.core.chunk_first.call(null,seq__38061_38075__$1);{
var G__38077 = cljs.core.chunk_rest.call(null,seq__38061_38075__$1);
var G__38078 = c__4148__auto___38076;
var G__38079 = cljs.core.count.call(null,c__4148__auto___38076);
var G__38080 = 0;
seq__38061_38065 = G__38077;
chunk__38062_38066 = G__38078;
count__38063_38067 = G__38079;
i__38064_38068 = G__38080;
continue;
}
} else
{var node_38081 = cljs.core.first.call(null,seq__38061_38075__$1);goog.dom.classes.toggle(node_38081,class$);
{
var G__38082 = cljs.core.next.call(null,seq__38061_38075__$1);
var G__38083 = null;
var G__38084 = 0;
var G__38085 = 0;
seq__38061_38065 = G__38082;
chunk__38062_38066 = G__38083;
count__38063_38067 = G__38084;
i__38064_38068 = G__38085;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38094__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38090_38095 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38091_38096 = null;var count__38092_38097 = 0;var i__38093_38098 = 0;while(true){
if((i__38093_38098 < count__38092_38097))
{var node_38099 = cljs.core._nth.call(null,chunk__38091_38096,i__38093_38098);goog.dom.classes.set(node_38099,classes_38094__$1);
{
var G__38100 = seq__38090_38095;
var G__38101 = chunk__38091_38096;
var G__38102 = count__38092_38097;
var G__38103 = (i__38093_38098 + 1);
seq__38090_38095 = G__38100;
chunk__38091_38096 = G__38101;
count__38092_38097 = G__38102;
i__38093_38098 = G__38103;
continue;
}
} else
{var temp__4092__auto___38104 = cljs.core.seq.call(null,seq__38090_38095);if(temp__4092__auto___38104)
{var seq__38090_38105__$1 = temp__4092__auto___38104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38090_38105__$1))
{var c__4148__auto___38106 = cljs.core.chunk_first.call(null,seq__38090_38105__$1);{
var G__38107 = cljs.core.chunk_rest.call(null,seq__38090_38105__$1);
var G__38108 = c__4148__auto___38106;
var G__38109 = cljs.core.count.call(null,c__4148__auto___38106);
var G__38110 = 0;
seq__38090_38095 = G__38107;
chunk__38091_38096 = G__38108;
count__38092_38097 = G__38109;
i__38093_38098 = G__38110;
continue;
}
} else
{var node_38111 = cljs.core.first.call(null,seq__38090_38105__$1);goog.dom.classes.set(node_38111,classes_38094__$1);
{
var G__38112 = cljs.core.next.call(null,seq__38090_38105__$1);
var G__38113 = null;
var G__38114 = 0;
var G__38115 = 0;
seq__38090_38095 = G__38112;
chunk__38091_38096 = G__38113;
count__38092_38097 = G__38114;
i__38093_38098 = G__38115;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38120_38124 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38121_38125 = null;var count__38122_38126 = 0;var i__38123_38127 = 0;while(true){
if((i__38123_38127 < count__38122_38126))
{var node_38128 = cljs.core._nth.call(null,chunk__38121_38125,i__38123_38127);goog.dom.setTextContent(node_38128,value);
{
var G__38129 = seq__38120_38124;
var G__38130 = chunk__38121_38125;
var G__38131 = count__38122_38126;
var G__38132 = (i__38123_38127 + 1);
seq__38120_38124 = G__38129;
chunk__38121_38125 = G__38130;
count__38122_38126 = G__38131;
i__38123_38127 = G__38132;
continue;
}
} else
{var temp__4092__auto___38133 = cljs.core.seq.call(null,seq__38120_38124);if(temp__4092__auto___38133)
{var seq__38120_38134__$1 = temp__4092__auto___38133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38120_38134__$1))
{var c__4148__auto___38135 = cljs.core.chunk_first.call(null,seq__38120_38134__$1);{
var G__38136 = cljs.core.chunk_rest.call(null,seq__38120_38134__$1);
var G__38137 = c__4148__auto___38135;
var G__38138 = cljs.core.count.call(null,c__4148__auto___38135);
var G__38139 = 0;
seq__38120_38124 = G__38136;
chunk__38121_38125 = G__38137;
count__38122_38126 = G__38138;
i__38123_38127 = G__38139;
continue;
}
} else
{var node_38140 = cljs.core.first.call(null,seq__38120_38134__$1);goog.dom.setTextContent(node_38140,value);
{
var G__38141 = cljs.core.next.call(null,seq__38120_38134__$1);
var G__38142 = null;
var G__38143 = 0;
var G__38144 = 0;
seq__38120_38124 = G__38141;
chunk__38121_38125 = G__38142;
count__38122_38126 = G__38143;
i__38123_38127 = G__38144;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38149_38153 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38150_38154 = null;var count__38151_38155 = 0;var i__38152_38156 = 0;while(true){
if((i__38152_38156 < count__38151_38155))
{var node_38157 = cljs.core._nth.call(null,chunk__38150_38154,i__38152_38156);goog.dom.forms.setValue(node_38157,value);
{
var G__38158 = seq__38149_38153;
var G__38159 = chunk__38150_38154;
var G__38160 = count__38151_38155;
var G__38161 = (i__38152_38156 + 1);
seq__38149_38153 = G__38158;
chunk__38150_38154 = G__38159;
count__38151_38155 = G__38160;
i__38152_38156 = G__38161;
continue;
}
} else
{var temp__4092__auto___38162 = cljs.core.seq.call(null,seq__38149_38153);if(temp__4092__auto___38162)
{var seq__38149_38163__$1 = temp__4092__auto___38162;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38149_38163__$1))
{var c__4148__auto___38164 = cljs.core.chunk_first.call(null,seq__38149_38163__$1);{
var G__38165 = cljs.core.chunk_rest.call(null,seq__38149_38163__$1);
var G__38166 = c__4148__auto___38164;
var G__38167 = cljs.core.count.call(null,c__4148__auto___38164);
var G__38168 = 0;
seq__38149_38153 = G__38165;
chunk__38150_38154 = G__38166;
count__38151_38155 = G__38167;
i__38152_38156 = G__38168;
continue;
}
} else
{var node_38169 = cljs.core.first.call(null,seq__38149_38163__$1);goog.dom.forms.setValue(node_38169,value);
{
var G__38170 = cljs.core.next.call(null,seq__38149_38163__$1);
var G__38171 = null;
var G__38172 = 0;
var G__38173 = 0;
seq__38149_38153 = G__38170;
chunk__38150_38154 = G__38171;
count__38151_38155 = G__38172;
i__38152_38156 = G__38173;
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
{var value_38184 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38180_38185 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38181_38186 = null;var count__38182_38187 = 0;var i__38183_38188 = 0;while(true){
if((i__38183_38188 < count__38182_38187))
{var node_38189 = cljs.core._nth.call(null,chunk__38181_38186,i__38183_38188);node_38189.innerHTML = value_38184;
{
var G__38190 = seq__38180_38185;
var G__38191 = chunk__38181_38186;
var G__38192 = count__38182_38187;
var G__38193 = (i__38183_38188 + 1);
seq__38180_38185 = G__38190;
chunk__38181_38186 = G__38191;
count__38182_38187 = G__38192;
i__38183_38188 = G__38193;
continue;
}
} else
{var temp__4092__auto___38194 = cljs.core.seq.call(null,seq__38180_38185);if(temp__4092__auto___38194)
{var seq__38180_38195__$1 = temp__4092__auto___38194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38180_38195__$1))
{var c__4148__auto___38196 = cljs.core.chunk_first.call(null,seq__38180_38195__$1);{
var G__38197 = cljs.core.chunk_rest.call(null,seq__38180_38195__$1);
var G__38198 = c__4148__auto___38196;
var G__38199 = cljs.core.count.call(null,c__4148__auto___38196);
var G__38200 = 0;
seq__38180_38185 = G__38197;
chunk__38181_38186 = G__38198;
count__38182_38187 = G__38199;
i__38183_38188 = G__38200;
continue;
}
} else
{var node_38201 = cljs.core.first.call(null,seq__38180_38195__$1);node_38201.innerHTML = value_38184;
{
var G__38202 = cljs.core.next.call(null,seq__38180_38195__$1);
var G__38203 = null;
var G__38204 = 0;
var G__38205 = 0;
seq__38180_38185 = G__38202;
chunk__38181_38186 = G__38203;
count__38182_38187 = G__38204;
i__38183_38188 = G__38205;
continue;
}
}
} else
{}
}
break;
}
}catch (e38179){if((e38179 instanceof Error))
{var e_38206 = e38179;domina.replace_children_BANG_.call(null,content,value_38184);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38179;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38213_38217 = cljs.core.seq.call(null,children);var chunk__38214_38218 = null;var count__38215_38219 = 0;var i__38216_38220 = 0;while(true){
if((i__38216_38220 < count__38215_38219))
{var child_38221 = cljs.core._nth.call(null,chunk__38214_38218,i__38216_38220);frag.appendChild(child_38221);
{
var G__38222 = seq__38213_38217;
var G__38223 = chunk__38214_38218;
var G__38224 = count__38215_38219;
var G__38225 = (i__38216_38220 + 1);
seq__38213_38217 = G__38222;
chunk__38214_38218 = G__38223;
count__38215_38219 = G__38224;
i__38216_38220 = G__38225;
continue;
}
} else
{var temp__4092__auto___38226 = cljs.core.seq.call(null,seq__38213_38217);if(temp__4092__auto___38226)
{var seq__38213_38227__$1 = temp__4092__auto___38226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38213_38227__$1))
{var c__4148__auto___38228 = cljs.core.chunk_first.call(null,seq__38213_38227__$1);{
var G__38229 = cljs.core.chunk_rest.call(null,seq__38213_38227__$1);
var G__38230 = c__4148__auto___38228;
var G__38231 = cljs.core.count.call(null,c__4148__auto___38228);
var G__38232 = 0;
seq__38213_38217 = G__38229;
chunk__38214_38218 = G__38230;
count__38215_38219 = G__38231;
i__38216_38220 = G__38232;
continue;
}
} else
{var child_38233 = cljs.core.first.call(null,seq__38213_38227__$1);frag.appendChild(child_38233);
{
var G__38234 = cljs.core.next.call(null,seq__38213_38227__$1);
var G__38235 = null;
var G__38236 = 0;
var G__38237 = 0;
seq__38213_38217 = G__38234;
chunk__38214_38218 = G__38235;
count__38215_38219 = G__38236;
i__38216_38220 = G__38237;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38207_SHARP_,p2__38208_SHARP_){return f.call(null,p1__38207_SHARP_,p2__38208_SHARP_);
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
{if((function (){var G__38239 = list_thing;if(G__38239)
{var bit__4050__auto__ = (G__38239.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38239.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38239.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38239);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38239);
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
{if((function (){var G__38240 = content;if(G__38240)
{var bit__4050__auto__ = (G__38240.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38240.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38240.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38240);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38240);
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
{if((function (){var G__38241 = content;if(G__38241)
{var bit__4050__auto__ = (G__38241.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38241.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38241.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38241);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38241);
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
